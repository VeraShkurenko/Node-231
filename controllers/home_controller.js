import * as fs from 'node:fs/promises';

export default class HomeController {

    async index(request, response, id) {
        let parts = request.url.split("?");

        const pageData = {
            method: request.method,
            httpVersion: request.httpVersion,
            url: request.url,
            query: null,
        };
        if (parts.length == 2) {
            pageData.query = parts[1];
        }
        pageData.path = parts[0];

        pageData.groupsHtml = await this.makeGroupsHtml();

        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8;'
        });

        const file = await fs.open("home.html", "r");
        let html = (await file.readFile()).toString();
        file.close();
        for (let k in pageData) {
            html = html.replaceAll(`{{${k}}}`, pageData[k]);
        }
        response.end(html);
    }
    privacy(request, response, id) {
        response.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',

        });
        response.end(`<html><head><meta charset-utf-8/></head><body>
            <h1>Політика конфіденційності</h1>
            </body></html>`);
    }


    async makeGroupsHtml() {
        const [data] = await this.dbPool.query('SELECT * FROM `groups` ');
        let wasChild;
        do {
            wasChild = false;
            for (let i = 0; i < data.length; i += 1) {
                let grp = data[i];
                if (grp["parent_id"] != null) {
                    wasChild = true;
                    let parent = this.findParent(data, grp["parent_id"]);
                    if (parent == null) { }
                    if (typeof parent.sub == 'undefined') {
                        parent.sub = [];
                    }
                    parent.sub.push(grp);
                    data.splice(i, 1);
                }
            }
        } while (wasChild);
        // console.log(data);


        return this.grpToHtml(data);
    }

    grpToHtml(grps) {
        let html = "<ul>";
        for (let grp of grps) {
            let hasSub = typeof grp.sub != 'undefined' && grp.sub.length > 0;
            html += `<li class="group-item">`;
            if (hasSub) {
                html += `<span class="toggle">▶</span> ${grp.name}`;
                html += `<div class="subgroups hidden">${this.grpToHtml(grp.sub)}</div>`;
            } else {
                html += `${grp.name}`;
            }
            html += `</li>`;
        }
        html += "</ul>";
        return html;
    }


    findParent(arr, parent_id) {
        for (let elem of arr) {
            if (elem.id == parent_id) return elem;
            if (typeof elem.sub != 'undefined') {
                let p = this.findParent(elem.sub, parent_id);
                if (p != null) return p;
            }
        }
        return null;
    }


}