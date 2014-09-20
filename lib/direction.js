/**
 * Created by li.jiang on 14-9-19.
 * http://developer.baidu.com/map/index.php?title=webapi/direction-api
 * 以http形式提供的公交、驾车、步行查询检索接口，返回xml或json格式的检索数据，可用于实现开发线路规划功能
 */
"use strict";

var request = require('request');
var _ = require('lodash');

/**
 *
 *http://api.map.baidu.com/direction/v1
 *提供的公交、驾车、步行查询检索接口
 * @param options
 * @param callback
 */
exports.direction = function (options,callback) {
    var url = this.apiBase +'/direction/v1';
    if(!options.origin){
        throw new TypeError('需要填写起点名称或经纬度');
    }
    if(!options.destination){
        throw new TypeError('需要填写终点名称或经纬度');
    }
    if(options.mode&&options.mode!='driving'){
        if(!options.region){
           throw new TypeError('步行模式需要填写region');
        }
    }
    if(!options.origin_region&&!options.destination_region){
        throw new TypeError('驾车导航需要填写origin_region和destination_region');
    }
    var defaultOptions = {
        origin:"",                      //起点名称或经纬度，或者可同时提供名称和经纬度，此时经纬度优先级高，将作为导航依据，名称只负责展示。
        destination:"",                 //终点名称或经纬度，或者可同时提供名称和经纬度，此时经纬度优先级高，将作为导航依据，名称只负责展示。
        mode:"driving",                 //导航模式，包括：driving（驾车）、walking（步行）、transit（公交）
        region:"",                      //公交、步行导航时该参数必填
        origin_region:"",               //起始点所在城市，驾车导航时必填
        destination_region:"",          //终点所在城市，驾车导航时必填
        coord_type:"bd09ll",            //坐标类型，可选参数，默认为bd09ll
        waypoints:"",                   //分隔的地址名称或经纬度
        tactics:"",                     //导航策略。导航路线类型，10，不走高速；11、最少时间；12、最短路径
        output: "json"                 //输出格式为json或者xml
    };
    options = _.extend(defaultOptions,options);
    console.log(this.makeUrl(url,options));
    request(this.makeUrl(url,options),function(error, response, body){
        callback(error,body);
    });
};