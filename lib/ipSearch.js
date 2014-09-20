/**
 * Created by li.jiang on 14-9-19.
 * http://developer.baidu.com/map/index.php?title=webapi/ip-api
 * IP定位 API是一个根据IP返回对应位置信息的http形式位置服务接口,返回json格式的位置数据（包括坐标值、省份、城市、百度城市代码等）
 * 每个key支持100万次/天，超过限制不返回数据
 */
"use strict";

var request = require('request');
var _ = require('lodash');

/**
 *
 *http://api.map.baidu.com/place/location/ip
 * @param options
 * @param callback
 */
exports.ipSearch = function (options,callback) {
    var url = this.apiBase +'/location/ip';

    var defaultOptions = {
        ip:"",               //可选，ip不出现，或者出现且为空字符串的情况下，会使用当前访问者的IP地址作为定位参数
        coor: ""            //可选，coor不出现时，默认为百度墨卡托坐标；coor=bd09ll时，返回为百度经纬度坐标
    };
    options = _.extend(defaultOptions,options);
    request(this.makeUrl(url,options),function(error, response, body){
        callback(error,body);
    });
};