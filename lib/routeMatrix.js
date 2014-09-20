/**
 * Created by li.jiang on 14-9-19.
 * http://developer.baidu.com/map/index.php?title=webapi/route-matrix-api
 * Route Matrix API是一套以HTTP形式提供的批量线路查询接口，用于返回多个起点和多个终点间的线路距离和行驶时间
 * 起终点个数最多为5个，即每个请求串最多能查询25条线路信息；
 * 每个ak每天最多查询10万次
 */
"use strict";

var request = require('request');
var _ = require('lodash');

/**
 *
 *http://api.map.baidu.com/direction/v1/routematrix
 * @param options
 * @param callback
 */
exports.routeMatrix = function (options,callback) {
    var url = this.apiBase +'/direction/v1/routematrix';
    if(!options.origins){
        throw new TypeError('需要填写起点');
    }
    if(!options.destinations){
        throw new TypeError('需要填写终点');
    }
    var defaultOptions = {
        origins:"",               //起点，最多传5个点   名称：百度大厦 经纬度：40.056878, 116.30815 坐标格式为：lat<纬度>,lng<经度>
        destinations: "",     //终点，最多传5个点   名称：百度大厦 经纬度：40.056878, 116.30815 坐标格式为：lat<纬度>,lng<经度>
        mode:"driving",             //导航模式，包括：driving（驾车）、walking（步行）
        output:"json",          //表示输出类型，可设置为xml或json
        coord_type:"bd09ll",    //坐标类型，可选参数，默认为bd09ll。允许的值为：bd09ll（百度经纬度坐标）、bd09mc（百度摩卡托坐标）、gcj02（国测局加密坐标）、wgs84（gps设备获取的坐标）
        tactics:""              //导航策略。导航路线类型，10，不走高速；11、最少时间；12、最短路径
    };
    options = _.extend(defaultOptions,options);
    request(this.makeUrl(url,options),function(error, response, body){
        callback(error,body);
    });
};