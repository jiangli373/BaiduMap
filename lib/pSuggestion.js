/**
 * Created by li.jiang on 14-9-19.
 * http://developer.baidu.com/map/index.php?title=webapi/place-suggestion-api
 */
"use strict";

var request = require('request');
var _ = require('lodash');

/**
 *
 *http://api.map.baidu.com/place/v2/suggestion/
 * 使用本接口请求，可调出匹配用户输入的关键字的建议列表
 * @param options
 * @param callback
 */
exports.suggestion = function (options,callback) {
    var url = this.apiBase +'/place/v2/suggestion';
    if(!options.query){
        throw new TypeError('需要填写查询关键字');
    }
    if(!options.region){
        throw new TypeError('需要提供城市/区域名称或代号');
    }
    var defaultOptions = {
        query:"",               //检索关键字
        output: "json",     //输出格式为json或者xml
        region:""             //城市内检索请求参数，必须
    };
    options = _.extend(defaultOptions,options);
    request(this.makeUrl(url,options),function(error, response, body){
        callback(error,body);
    });
};