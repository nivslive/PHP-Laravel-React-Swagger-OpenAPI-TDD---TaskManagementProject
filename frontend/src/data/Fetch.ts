export default class Fetch {
    urlPath: string;
    headers: any;
    constructor(path: string) {
        const BACKENDPATH = 'http://localhost:8000';
        this.headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
        };
        this.urlPath = BACKENDPATH + path;
    }
    async get(aditionalPath?: string | undefined): Promise<Response> {
        const path = this.urlPath + (aditionalPath === undefined ? '' : aditionalPath);
        console.log(path);
        return await fetch(path, {headers: this.headers});
    }
    post(aditionalPath?: string | undefined, content?: any | undefined) {
        const path = this.urlPath + (aditionalPath === undefined ? '' : aditionalPath);
        return fetch(path, {
            headers: this.headers,
            method: 'POST',
            body: JSON.stringify(content),
        });
    }
    async put(aditionalPath?: string | undefined, content?: any | undefined ) {
        const path = this.urlPath + (aditionalPath === undefined ? '' : aditionalPath);
        return await fetch(path, {
            headers: this.headers,
            method: 'PUT',
            body: JSON.stringify(content),
        });
    }
    delete(aditionalPath?: string | undefined, content?: any | undefined) {
        const path = this.urlPath + (aditionalPath === undefined ? '' : aditionalPath);
        return fetch(path, {
            headers: this.headers,
            method: 'DELETE',
            body: JSON.stringify(content),
        });
    }
}