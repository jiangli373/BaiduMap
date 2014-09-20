/**
 * Created by li.jiang on 14-9-19.
 */

"use strict";

var querystring = require('querystring');

function BaiduMap(options) {
    if (!options || !options.ak) {
        throw new TypeError('required ak');
    }
    this.ak = options.ak;
    this.apiBase = "http://api.map.baidu.com";
}

BaiduMap.create = function create(options) {
    return new BaiduMap(options);
};


BaiduMap.prototype.makeUrl = function(url,params){
    var new_params = {};
    for(var key in params){
        if(params[key]) new_params[key] = params[key];
    }
    return url+'?ak='+this.ak+'&'+querystring.stringify(new_params);
};


    ['./place','./pSuggestion','./geocoding','./direction','./routeMatrix','./ipSearch','./geoconv'].forEach(function (name) {
        var proto = require(name);
        for (var k in proto) {
            BaiduMap.prototype[k] = proto[k];
        }
    });

module.exports = BaiduMap;
