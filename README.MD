##百度地图sdk

### http://developer.baidu.com/map/index.php?title=webapi

使用:

npm install baidu-map

var baiduMap = require('baidu-map');
var bdmap = baiduMap.create({'ak':'xxxxxxxxxxxxxxxxxxxxxxxxx'});

>百度地图place相关用法:（请求字段按照百度官方文档）

>query必填字段，查询关键字，按照下面三种方式查询
>1.城市内检索  #####http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-placeapi#.E5.9F.8E.E5.B8.82.E5.86.85.E6.A3.80.E7.B4.A2.E8.AF.B7.E6.B1.82.E5.8F.82.E6.95.B0
    var options = {'query':'天安门','region':'北京'};
    bdmap.search(options,function(err,reuslt){});
>2.矩形检索   #####http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-placeapi#.E7.9F.A9.E5.BD.A2.E5.8C.BA.E5.9F.9F.E6.A3.80.E7.B4.A2.E5.8F.82.E6.95.B0
    var options = {'query':'天安门','bounds':'39.915,116.404,39.975,116.414','page_size':1};
    bdmap.search(options,function(err,reuslt){});
>3.圆形区域检索  #####http://developer.baidu.com/map/index.php?title=webapi/guide/webservice-placeapi#.E5.9C.86.E5.BD.A2.E5.8C.BA.E5.9F.9F.E6.A3.80.E7.B4.A2.E5.8F.82.E6.95.B0
    var options = {'query':'银行','location':'39.915,116.404','page_size':2,'radius':100};
    bdmap.search(options,function(err,reuslt){});

