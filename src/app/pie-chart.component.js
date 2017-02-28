/// <reference path="../../typings/modules/d3/index.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var data_service_1 = require("./data.service");
var D3 = require("d3");
var PieChartComponent = (function () {
    function PieChartComponent(dataService) {
        this.dataService = dataService;
    }
    PieChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.htmlElement = this.element.nativeElement;
        this.host = D3.select(this.htmlElement);
        this.dataService.$data.subscribe(function (data) {
            _this.pieData = data;
            _this.setup();
            _this.buildSVG();
            _this.buildPie();
        });
    };
    PieChartComponent.prototype.setup = function () {
        this.width = 250;
        this.height = 250;
        this.radius = Math.min(this.width, this.height) / 2;
    };
    PieChartComponent.prototype.buildSVG = function () {
        this.host.html("");
        this.svg = this.host.append("svg")
            .attr("viewBox", "0 0 " + this.width + " " + this.height)
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
    };
    PieChartComponent.prototype.buildPie = function () {
        var pie = D3.layout.pie();
        var values = this.pieData.map(function (data) { return data.value; });
        var arcSelection = this.svg.selectAll(".arc")
            .data(pie(values))
            .enter()
            .append("g")
            .attr("class", "arc");
        this.populatePie(arcSelection);
    };
    PieChartComponent.prototype.populatePie = function (arcSelection) {
        var _this = this;
        var innerRadius = this.radius - 50;
        var outerRadius = this.radius - 10;
        var pieColor = D3.scale.category20c();
        var arc = D3.svg.arc()
            .outerRadius(outerRadius);
        arcSelection.append("path")
            .attr("d", arc)
            .attr("fill", function (datum, index) {
            return pieColor(_this.pieData[index].label);
        });
        arcSelection.append("text")
            .attr("transform", function (datum) {
            datum.innerRadius = 0;
            datum.outerRadius = outerRadius;
            return "translate(" + arc.centroid(datum) + ")";
        })
            .text(function (datum, index) { return _this.pieData[index].label; })
            .style("text-anchor", "middle");
    };
    return PieChartComponent;
}());
__decorate([
    core_1.ViewChild("containerPieChart"),
    __metadata("design:type", core_1.ElementRef)
], PieChartComponent.prototype, "element", void 0);
PieChartComponent = __decorate([
    core_1.Component({
        selector: "pie-chart",
        templateUrl: "/app/pie-chart.html"
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], PieChartComponent);
exports.PieChartComponent = PieChartComponent;
//# sourceMappingURL=pie-chart.component.js.map