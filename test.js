/**
 * Created by li.jiang on 14-9-19.
 */


var baiduMap = require('./index');
var bdmap = baiduMap.create({'ak':'W33OWk9gH40hXlGmUAek73qV'});


//区域检索
var options = {'query':'天安门','region':'北京'};
//var options = {'query':'天安门','bounds':'39.915,116.404,39.975,116.414','page_size':1};
//var options = {'query':'银行','location':'39.915,116.404','page_size':2,'radius':100};
bdmap.search(options,function(err,reuslt){
    if(err){
        console.error('===err=====',err);
    }
    if(reuslt){
        console.log('====result====',reuslt);
    }
});


//Place详情检索
var detailOption = {'uid':'8ee4560cf91d160e6cc02cd7'};
bdmap.detail(detailOption,function(err,reuslt){
    if(err){
        console.error('===err=====',err);
    }
    if(reuslt){
        console.log('====result====',reuslt);
    }
});


//团购信息检索
var eventsearchOption = {'query':'美食','event':'groupon','region':131,'bounds':'39.915,116.404,39.935,116.435','page_size':1};
bdmap.eventsearch(eventsearchOption,function(err,reuslt){
    if(err){
        console.error('====err====',err);
    }
    if(reuslt){
        console.log('====result====',reuslt);
    }
});

//根据POI UID查询当前POI所有的团购详细信息
var eventdetailOption = {'uid':'c14fc238f7fadd4ea5da390f'};
bdmap.eventdetail(eventdetailOption,function(err,reuslt){
    if(err){
        console.error('====err====',err);
    }
    if(reuslt){
        console.log('====result====',reuslt);
    }
});

//Place suggestion
var suggestionOption = {'query':'天安门','region':131};
bdmap.suggestion(suggestionOption,function(err,reuslt){
    if(err){
        console.error('===err=====',err);
    }
    if(reuslt){
        console.log('====result====',reuslt);
    }
});

//从地址到经纬度坐标转换
var geocoderOption = {'address':'天安门','city':'北京市','callback':'showMap'};
bdmap.geocoder(geocoderOption,function(err,reuslt){
    if(err){
        console.error('====err====',err);
    }
    if(reuslt){
        console.log('====result====',reuslt);
    }
});


//从经纬度坐标到地址转换
var reverseGeocoderOption = {'location':'39.983424,116.322987','pois':1,'callback':'showMap'};
bdmap.reverseGeocoder(reverseGeocoderOption,function(err,reuslt){
    if(err){
        console.error('====err====',err);
    }
    if(reuslt){
        console.log('====result====',reuslt);
    }
});


//  公交、驾车、步行查询检索
var directionOption = {'origin':'上地五街','destination':'北京大学','origin_region':'北京','destination_region':'北京'};
bdmap.direction(directionOption,function(err,reuslt){
    if(err){
        console.error('====err====',err);
    }
    if(reuslt){
        console.log('====result====',reuslt);
    }
});

//批量线路查询
var routeMatrixOption = {'origins':'天安门|鸟巢','destinations':'北京大学'};
bdmap.routeMatrix(routeMatrixOption,function(err,reuslt){
    if(err){
        console.error('===err=====',err);
    }
    if(reuslt){
        console.log('====result====',reuslt);
    }
});

// IP定位
var ipSearchOption = {ip:"119.75.217.56"};
bdmap.ipSearch(ipSearchOption,function(err,reuslt){
    if(err){
        console.error('====err====',err);
    }
    if(reuslt){
        console.log('====result====',reuslt);
    }
});


//坐标转换
var geoconvOption = {coords:'114.21892734521,29.575429778924;114.21892734521,29.575429778924'};
bdmap.geoconv(geoconvOption,function(err,reuslt){
    if(err){
        console.error('====err====',err);
    }
    if(reuslt){
        console.log('====result====',reuslt);
    }
});