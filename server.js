import http from "http";
import * as fs from 'node:fs/promises';

const HTTP_PORT = 81;

async function serverFunction(request, response) {
    const pageData = {
        method: request.method,
        httpVersion: request.httpVersion,
        url: request.url,
        controller: "home",
        action: "index",
        slug: null,
        query: {}
    };

    let parts = request.url.split("?");
    if (parts.length > 2) {
        response.writeHead(400);
        response.end("Bad request");
        return;
    }

    let path = parts[0];
    let queryString = parts[1];

    let pathParts = path.split("/").filter(p => p.length > 0);

    if (pathParts.length > 0) {
        pageData.controller = pathParts[0] || "home";
    }
    if (pathParts.length > 1) {
        pageData.action = pathParts[1] || "index";
    }
    if (pathParts.length > 2) {
        pageData.slug = pathParts[2] || null;
    }
    
    if (queryString) {
        let queryObj = {};
        let params = queryString.split("&");
        for (let param of params) {
            let [key, val] = param.split("=");
            if (key) {
                queryObj[key] = val || "";
            }
        }
        pageData.query = queryObj;
    }

    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    const file = await fs.open("home.html", "r");
    let html = (await file.readFile()).toString();
    file.close();

    for (let k in pageData) {
        let val = typeof pageData[k] === "object" ? JSON.stringify(pageData[k]) : pageData[k];
        html = html.replaceAll(`{{${k}}}`, val);
    }

    response.end(html);
}

const server = http.createServer(serverFunction);
server.on('close', () => {
    console.log("Server stopped");
    process.exit(); 
});
server.listen(HTTP_PORT, () => {
    console.log("Server listening port ", HTTP_PORT);
    console.log("Press Ctrl-C to stop");
});

process.on('SIGINT', () => {
    server.close();
});
