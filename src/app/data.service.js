"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var DataService = (function () {
    function DataService() {
        this.mockData = [
            {
                label: "data1",
                value: 1,
            },
            {
                label: "data2",
                value: 2,
            },
            {
                label: "data3",
                value: 3,
            },
            {
                label: "data4",
                value: 4,
            }
        ];
        this.dataSubject = new BehaviorSubject_1.BehaviorSubject(this.mockData);
        this.$data = this.dataSubject.asObservable();
    }
    DataService.prototype.addData = function (newData) {
        this.mockData.push(newData);
        this.dataSubject.next(this.mockData);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map