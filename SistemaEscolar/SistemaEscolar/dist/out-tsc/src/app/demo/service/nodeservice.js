import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let NodeService = class NodeService {
    constructor(http) {
        this.http = http;
    }
    getFiles() {
        return this.http.get('assets/demo/data/files.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
    getFilesystem() {
        return this.http.get('assets/demo/data/filesystem.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
};
NodeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], NodeService);
export { NodeService };
//# sourceMappingURL=nodeservice.js.map