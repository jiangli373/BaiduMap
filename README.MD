##百度地图sdk

### http://developer.baidu.com/map/index.php?title=webapi

使用:  
#### 首先需要在百度上申请ak   [申请地址](http://lbsyun.baidu.com/apiconsole/key?application=key)
    npm install baidumap

    var baiduMap = require('baidumap');
    var bdmap = baiduMap.create({'ak':'xxxxxxxxxxxxxxxxxxxxxxxxx'});  

百度地图place相关用法:（请求字段按照百度官方文档）

1.城市内检索  [官方地址](http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-placeapi#.E5.9F.8E.E5.B8.82.E5.86.85.E6.A3.80.E7.B4.A2.E8.AF.B7.E6.B1.82.E5.8F.82.E6.95.B0)  
        
        
        var options = {'query':'天安门','region':'北京'};  
        bdmap.search(options,function(err,reuslt){});  
        
2.矩形检索   [官方地址](http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-placeapi#.E7.9F.A9.E5.BD.A2.E5.8C.BA.E5.9F.9F.E6.A3.80.E7.B4.A2.E5.8F.82.E6.95.B0)  
       
        
        var options = {'query':'天安门','bounds':'39.915,116.404,39.975,116.414','page_size':1};
        bdmap.search(options,function(err,reuslt){});  
        
3.圆形区域检索  [官方地址](http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-placeapi#.E5.9C.86.E5.BD.A2.E5.8C.BA.E5.9F.9F.E6.A3.80.E7.B4.A2.E5.8F.82.E6.95.B0)  
        
        
        var options = {'query':'银行','location':'39.915,116.404','page_size':2,'radius':100};
        bdmap.search(options,function(err,reuslt){});

4.区域详情检索  [官方地址](http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-placeapi#Place.E8.AF.A6.E6.83.85.E6.A3.80.E7.B4.A2.E6.9C.8D.E5.8A.A1)
      
        var detailOption = {'uid':'8ee4560cf91d160e6cc02cd7'};
        bdmap.detail(detailOption,function(err,reuslt){});
        
5.团购信息检索   [官方地址](http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-placeapi#.E5.9B.A2.E8.B4.AD.E4.BF.A1.E6.81.AF.E6.A3.80.E7.B4.A2.E6.9C.8D.E5.8A.A1)
       
        var eventsearchOption = {'query':'美食','event':'groupon','region':131,'bounds':'39.915,116.404,39.935,116.435','page_size':1};
        bdmap.eventsearch(eventsearchOption,function(err,reuslt){});

6.商家团购详情查询   [官方地址](http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-placeapi#.E5.95.86.E5.AE.B6.E5.9B.A2.E8.B4.AD.E8.AF.A6.E6.83.85.E6.9F.A5.E8.AF.A2)

        var eventdetailOption = {'uid':'c14fc238f7fadd4ea5da390f'};
        bdmap.eventdetail(eventdetailOption,function(err,reuslt){});
 
百度地图Place Suggestion API相关用法 [官方地址](http://developer.baidu.com/map/index.php?title=webapi/place-suggestion-api)

        var suggestionOption = {'query':'天安门','region':131};
        bdmap.suggestion(suggestionOption,function(err,reuslt){});
        
        
百度地图Geocoding API 相关用法 [官方地址](http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-geocoding)

1.地理编码

        var geocoderOption = {'address':'天安门','city':'北京市','callback':'showMap'};
        bdmap.geocoder(geocoderOption,function(err,reuslt){});
        
2.逆地理编码

        var reverseGeocoderOption = {'location':'39.983424,116.322987','pois':1,'callback':'showMap'};
        bdmap.reverseGeocoder(reverseGeocoderOption,function(err,reuslt){});
        
        
百度地图Direction API  相关用法 [官方地址](http://developer.baidu.com/map/index.php?title=webapi/direction-api)

        var directionOption = {'origin':'上地五街','destination':'北京大学','origin_region':'北京','destination_region':'北京'};
        bdmap.direction(directionOption,function(err,reuslt){});
        

百度地图Route Matrix API  相关用法 [官方地址](http://developer.baidu.com/map/index.php?title=webapi/route-matrix-api)

        var routeMatrixOption = {'origins':'天安门|鸟巢','destinations':'北京大学'};
        bdmap.routeMatrix(routeMatrixOption,function(err,reuslt){});


百度地图Route Matrix API  相关用法 [官方地址](http://developer.baidu.com/map/index.php?title=webapi/ip-api)

        var ipSearchOption = {ip:"119.75.217.56"};
        bdmap.ipSearch(ipSearchOption,function(err,reuslt){});
        
百度地图 坐标转换API  相关用法 [官方地址](http://developer.baidu.com/map/index.php?title=webapi/guide/changeposition)

        var geoconvOption = {coords:'114.21892734521,29.575429778924;114.21892734521,29.575429778924'};
        bdmap.geoconv(geoconvOption,function(err,reuslt){});
        
        
#### 具体示例可以查看test.js


