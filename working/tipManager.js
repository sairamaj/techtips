"use strict";
exports.__esModule = true;
var fs = require('fs');
var path_1 = require("path");
var TipManager = /** @class */ (function () {
    function TipManager() {
    }
    TipManager.prototype.getCatagories = function () {
        var isDirectory = function (source) { return fs.lstatSync(source).isDirectory(); };
        var isSpecial = function (source) { return source.includes('node_modules'); };
        var getDirectories = function (source) {
            return fs.readdirSync(source).map(function (name) { return path_1.join(source, name); })
                .filter(isDirectory).filter(function (source) { return !isSpecial(source); });
        };
        return getDirectories('.');
    };
    return TipManager;
}());
exports.TipManager = TipManager;
