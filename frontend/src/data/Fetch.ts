export default class Fetch {
    urlPath: string;
    constructor(path: string) {
        const BACKENDPATH = 'http://localhost:8000';
        this.urlPath = BACKENDPATH + path;
    }
    async get(aditionalPath?: string | undefined): Promise<Response> {
        const path = this.urlPath + (aditionalPath === undefined ? '' : aditionalPath);
        console.log(path);
        return await fetch(path);
    }
    post(aditionalPath?: string | undefined, content?: any | undefined) {
        const path = this.urlPath + (aditionalPath === undefined ? '' : aditionalPath);
        return fetch(path, {
            method: 'POST',
            body: content,
        });
    }
    async put(aditionalPath?: string | undefined, content?: any | undefined ) {
        const path = this.urlPath + (aditionalPath === undefined ? '' : aditionalPath);
        return await fetch(path, {
            method: 'PUT',
            body: content,
        });
    }
    delete(aditionalPath?: string | undefined, content?: any | undefined) {
        const path = this.urlPath + (aditionalPath === undefined ? '' : aditionalPath);
        return fetch(path, {
            method: 'DELETE',
            body: content,
        });
    }
}