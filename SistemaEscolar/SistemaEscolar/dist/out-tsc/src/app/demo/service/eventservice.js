import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let EventService = class EventService {
    constructor(http) {
        this.http = http;
    }
    getEvents() {
        return this.http.get('assets/demo/data/scheduleevents.json')
            .toPromise()
            .then(res => res.data)
            .then(data => data);
    }
};
EventService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], EventService);
export { EventService };
//# sourceMappingURL=eventservice.js.map