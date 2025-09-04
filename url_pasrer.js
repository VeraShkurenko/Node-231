const _url = "https://login:password@music.portal.fun:80/rock/ballads?search=scorpions&from=1990#desending";
const invalidUrl = "123";

function parseUrl(url){
    let result = {};
    let parts = url.split("://");
    if(parts.length != 2){
        throw new Error (`Format Error: scheme not detected in ${url}`);
    }
    result.scheme = parts[0];

    parts = parts[1].split('@');
    if(parts.length > 2){
        throw new Error (`Format Error: multiple '@' in ${url}`);
    }
    if(parts.length == 2){
        let credentials = parts[0].split(':');
        if(credentials.length == 2){
            result["auth"] = {
                "user-id": credentials[0],
                "password": credentials[1]
            };
        } else{
            throw new Error (`Format Error: no credentials in ${url}`);
        }
        parts = parts[1];
    } else{
        result["auth"] = null;
        parts = parts[0];
    }

    let fragmentSplit = parts.split('#');
    if(fragmentSplit.length > 2){
        throw new Error (`Format Error: multiple '#' in ${url}`);
    }
    result.fragment = fragmentSplit.length === 2 ? fragmentSplit[1] : null;
    parts = fragmentSplit[0];

    let querySplit = parts.split('?');
    if(querySplit.length > 2){
        throw new Error (`Format Error: multiple '?' in ${url}`);
    }
    let queryObj = {};
    if(querySplit.length === 2){
        let queryParams = querySplit[1].split('&');
        for(let qp of queryParams){
            let kv = qp.split('=');
            if(kv.length === 2){
                queryObj[kv[0]] = kv[1];
            }
        }
        result.query = queryObj;
    } else {
        result.query = null;
    }
    parts = querySplit[0];

    let pathSplit = parts.split('/');
    let hostAndPort = pathSplit.shift(); 
    result.path = pathSplit.length ? pathSplit : null;

    let hostParts = hostAndPort.split(':');
    let hostOnly = hostParts[0];
    result.port = hostParts.length === 2 ? Number(hostParts[1]) : null;

    let domainParts = hostOnly.split('.');
    if(domainParts.length < 2){
        throw new Error (`Format Error: invalid host in ${url}`);
    }
    result.host = {
        "tld": domainParts.pop(),
        "domain": domainParts.pop(),
        "subdomain": domainParts.length ? domainParts.join('.') : null
    };

    return result;
}

console.log(parseUrl(_url));
console.log(parseUrl(invalidUrl));
