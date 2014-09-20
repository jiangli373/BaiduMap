/**
 * Created by li.jiang on 14-9-19.
 * http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-geocoding
 * Geocoding API 是一类简单的HTTP接口，用于提供从地址到经纬度坐标或者从经纬度坐标到地址的转换服务，
 */
"use strict";

var request = require('request');
var _ = require('lodash');

/**
 *
 *http://api.map.baidu.com/geocoder/v2/
 * 地理编码：即地址解析，由详细到街道的结构化地址得到百度经纬度信息
 * @param options
 * @param callback
 */
exports.geocoder = function (options,callback) {
    var url = this.apiBase +'/geocoder/v2/';
    if(!options.address){
        throw new TypeError('需要填写查询地址');
    }
    var defaultOptions = {
        address:"",               //根据指定地址进行坐标的反定向解析
        city:"",            //地址所在的城市名
        output: "json",     //输出格式为json或者xml
        callback:""         //将json格式的返回值通过callback函数返回以实现jsonp功能
    };
    options = _.extend(defaultOptions,options);
    request(this.makeUrl(url,options),function(error, response, body){
        callback(error,body);
    });
};


/**
 * 逆地理编码
 * @param options
 * @param callback
 */
exports.reverseGeocoder = function (options,callback) {
    var url = this.apiBase +'/geocoder/v2/';
    if(!options.location){
        throw new TypeError('需要填写经纬度坐标');
    }
    var defaultOptions = {
        coordtype:"bd09ll",               //坐标的类型，目前支持的坐标类型包括：bd09ll（百度经纬度坐标）、gcj02ll（国测局经纬度坐标）、wgs84ll（ GPS经纬度）
        location:"",            //根据经纬度坐标获取地址    Y
        pois:0,             //是否显示指定位置周边的poi，0为不显示，1为显示。当值为1时，显示周边100米内的poi。
        output: "json",     //输出格式为json或者xml
        callback:""         //将json格式的返回值通过callback函数返回以实现jsonp功能
    };
    options = _.extend(defaultOptions,options);
    request(this.makeUrl(url,options),function(error, response, body){
        callback(error,body);
    });
};