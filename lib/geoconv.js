/**
 * Created by li.jiang on 14-9-19.
 * http://developer.baidu.com/map/index.php?title=webapi/guide/changeposition
 * 百度地图坐标转换API是一套以HTTP形式提供的坐标转换接口，用于将常用的非百度坐标
 * （目前支持GPS设备获取的坐标、google地图坐标、soso地图坐标、amap地图坐标、mapbar地图坐标）
 * 转换成百度地图中使用的坐标，并可将转化后的坐标在百度地图JavaScript API、车联网API、静态图API、web服务API等产品中使用
 */
"use strict";

var request = require('request');
var _ = require('lodash');

/**
 *
 *http://api.map.baidu.com/geoconv/v1/?
 * @param options
 * @param callback
 */
exports.geoconv = function (options,callback) {
    var url = this.apiBase +'/geoconv/v1/';

    var defaultOptions = {
        coords:"",               //源坐标  格式：经度,纬度;经度,纬度   限制：最多支持100个 格式举例：114.21892734521,29.575429778924;114.21892734521,29.575429778924
        from: 1,            //源坐标类型    默认是1      1：GPS设备获取的角度坐标;
                             //                    2：GPS获取的米制坐标、sogou地图所用坐标;
                             //                    3：google地图、soso地图、aliyun地图、mapabc地图和amap地图所用坐标
                             //                    4：3中列表地图坐标对应的米制坐标
                             //                    5：百度地图采用的经纬度坐标
                             //                    6：百度地图采用的米制坐标
                             //                    7：mapbar地图坐标;
                             //                    8：51地图坐标
        to:5,               //           默认为5         5：bd09ll(百度经纬度坐标),
                             //                   6：bd09mc(百度米制经纬度坐标);
        output:"json"                       //返回结果格式    json或者xml
    };
    options = _.extend(defaultOptions,options);
    request(this.makeUrl(url,options),function(error, response, body){
        callback(error,body);
    });
};