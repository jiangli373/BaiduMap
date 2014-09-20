/**
 * Created by li.jiang on 14-9-19.
 *  http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-placeapi
 */
"use strict";

var request = require('request');
var _ = require('lodash');

/**
 *
 * api.map.baidu.com/place/v2/search //v2 place区域检索POI服务
 * @param options
 * @param callback
 */
exports.search = function (options,callback) {
    var url = this.apiBase +'/place/v2/search';
    if(!options.query){
        throw new TypeError('需要填写查询关键字');
    }
    if(!options.region&&!options.bounds&&!options.location){
        throw new TypeError('需要提供城市内、矩形、圆形三种检索方法之一');
    }
    var defaultOptions = {
        query:"",               //检索关键字
        tag:"",             //标签项，与q组合进行检索
        output: "json",     //输出格式为json或者xml
        scope:1,            //检索结果详细程度
        filter:"",          //检索过滤条件，当scope取值为2时,
        page_size:10,       //范围记录数量，默认为10条记录,最大返回20条
        page_num:0,          //分页页码，默认为0,0代表第一页
        region:"",             //城市内检索请求参数，必须
        bounds:"",            //矩形区域检索参数38.76623,116.43213,39.54321,116.46773 lat,lng(左下角坐标),lat,lng(右上角坐标)
        location:"",          //圆形区域检索参数38.76623,116.43213lat<纬度>,lng<经度>
        radius:2000           //周边检索半径，单位为米，默认2000
    };
    options = _.extend(defaultOptions,options);
    if(!options.location) delete options['radius'];
    request(this.makeUrl(url,options),function(error, response, body){
        callback(error,body);
    });
};

/**
 * 提供查询某个POI点的详情信息，如好评，评价等。
 * http://api.map.baidu.com/place/v2/detail
 * @param options
 * @param callback
 */
exports.detail = function (options,callback) {
    var url = this.apiBase +'/place/v2/detail';
    if(!options.uid) {
        throw new TypeError('需要填写POI id');
    }
    var defaultOptions = {
        uid:"",               //检索关键字
        output: "json",     //输出格式为json或者xml
        scope:1            //检索结果详细程度
    };
    options = _.extend(defaultOptions,options);
    request(this.makeUrl(url,options),function(error, response, body){
        callback(error,body);
    });
};

/**
 * 团购信息检索服务
 * http://api.map.baidu.com/place/v2/eventsearch
 * @param options
 * @param callback
 */
exports.eventsearch = function (options,callback) {
    var url = this.apiBase +'/place/v2/eventsearch';
    if(!options.query) {
        throw new TypeError('需要填写查询团购关键字');
    }
    if(!options.event) {
        throw new TypeError('需要填写事件名称（groupon）');
    }
    if(!options.region) {
        throw new TypeError('需要填写区域，此字段必须填写城市名称或城市代码');

    }
    if(!options.bounds&&!options.location) {
        throw new TypeError('需要指定检索中心或者检索矩形Bound');
    }
    var defaultOptions = {
        query:"",               //检索关键字   Y
        event:"",             //事件名称，groupon、discount、all 可以是团购、打折或全部，目前只支持团购   Y
        region:"",             //北京、131，注意：和search功能不同，此字段必须填写城市名称或城市代码，不能为全国或1  Y
        bounds:"",            //矩形区域检索参数38.76623,116.43213,39.54321,116.46773 lat,lng(左下角坐标),lat,lng(右上角坐标)
        location:"",          //是，二选一 1)location 2)bounds 若都出现时，bounds优先级最大，location优先级小。 Y
        radius:2000,          //周边检索半径，单位为米，默认2000
        output: "json",     //输出格式为json或者xml
        filter:"",          //检索过滤条件
        page_size:10,       //范围记录数量，默认为10条记录,最大返回20条
        page_num:0          //分页页码，默认为0,0代表第一页

    };
    options = _.extend(defaultOptions,options);
    request(this.makeUrl(url,options),function(error, response, body){
        callback(error,body);
    });
};

/**
 * 商家团购详情查询
 * 根据POI UID查询当前POI所有的团购详细信息
 * http://api.map.baidu.com/place/v2/eventdetail
 * @param options
 * @param callback
 */
exports.eventdetail = function (options,callback) {
    var url = this.apiBase +'/place/v2/eventdetail';
    if(!options.uid) {
        throw new TypeError('需要填写POI id');
    }
    var defaultOptions = {
        uid:"",               //检索关键字
        output: "json"     //输出格式为json或者xml
    };
    options = _.extend(defaultOptions,options);
    request(this.makeUrl(url,options),function(error, response, body){
        callback(error,body);
    });
};