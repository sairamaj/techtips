"use strict";
exports.__esModule = true;
var yaml = require("read-yaml");
var TipCateogry = /** @class */ (function () {
    function TipCateogry(file) {
        this.Tips = yaml.sync(file, {});
    }
    TipCateogry.prototype.get = function (name) {
        return this.Tips.find(function (t) { return t.name === name; });
    };
    return TipCateogry;
}());
exports.TipCateogry = TipCateogry;
