export default class ClientController {
    
    doGet(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        response.end("ClientController")
    }

    doPost(request, response, id) {
        let body = ''
        request.on('data', function(chunk) { body += chunk })
        request.on('end', function() {
            console.log('ClientController::doPost body: ' + body)
            console.log(request.headers['content-type'])
            if (validContentType(request.headers['content-type'])) {
                    let data = JSON.parse(body)
                    if (typeof data == 'object')
                        data = JSON.stringify(data)
                    response.writeHead(200, {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    })
                    response.end(JSON.stringify({
                        "controller": "ClientController",
                        "method": "POST",
                        "semantic": "Create",
                        "body": data
                    }))
            } else {
                response.writeHead(415)
                response.end()
            }
        })
    }

    doPut(request, response, id) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*'
        })
        response.end(JSON.stringify(
            {
                "controller": "ClientController",
                "method": "PUT",
                "semantic": "Update"
            }))
    }

    doPatch(request, response, id) {
        response.writeHead(200)
        response.end(JSON.stringify(
            {
                "controller": "ClientController",
                "method": "PATCH",
                "semantic": "Update"
            }))
    }

    doDelete(request, response, id) {
        response.writeHead(200)
        response.end(JSON.stringify(
            {
                "controller": "ClientController",
                "method": "DELETE",
                "semantic": "Delete"
            }))
    }

    doOptions(request, response) {
        response.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers': '*'
        })
        response.end()
    }
}

function validContentType(str) {
    if (typeof str != 'string') return false

    const jsonType = 'application/json'
    if (str.startsWith(jsonType)) {
        if (str === jsonType || str[jsonType.length] == ';') {
            return true
        }
    }

    return false
}
//application/json; charset=utf-8

/*
CORS - Cross-Origin Resourse Sharing - жити не дає багато кому
 - обмеження згідно з яким дані що предаються між ресурсами 
 різних джерел (origine). 
 Ресурси вважаються різного походження якщо в них відрізняються (хочаб одне): 
 - shceme (http/https)
 - host
 - port
Кліент (браузер) повинен заблокувати CORS дані якщо у відповіді сервера 
відсутні заголовки які це дозволяють.
Access-Control-Allow-Origin

Якщо метод запиту відрізняється від GET, то перед самим запитом 
надсилається "preflight" запит методом OPTIONS з передачею питання
заголовком access-control-request-method
У відповіді мають бути дозвільні заголовки
Acess-Control-Allow-Origin
Acess-Control-Allow-Method 

Також за CORS вважаються забороненними майже усі заголовки запиту,
зокрема, Content-Type. Для дозволу таких запитів необхідно 
додати заголовок 
Access-Control-Allow-Headers
до відповіді preflight
*/