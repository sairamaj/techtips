"use strict";
exports.__esModule = true;
var techcategory_1 = require("./techcategory");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.test = function () {
        var category = new techcategory_1.TechCategory('readme');
        category.getTips().then(function (t) {
            console.log(t);
        })["catch"](function (err) {
            console.log('error :' + err);
            console.log('error :' + err.stack);
        });
    };
    return Test;
}());
new Test().test();
