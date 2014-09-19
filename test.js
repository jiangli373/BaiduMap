/**
 * Created by li.jiang on 14-9-19.
 */


var baiduMap = require('./index');
var bdmap = baiduMap.create({'ak':'W33OWk9gH40hXlGmUAek73qV'});

//var options = {'query':'天安门','region':'北京'};
//var options = {'query':'天安门','bounds':'39.915,116.404,39.975,116.414','page_size':1};
//var options = {'query':'银行','location':'39.915,116.404','page_size':2,'radius':100};
//bdmap.search(options,function(err,reuslt){
//    if(err){
//        console.error('========',err);
//    }
//    if(reuslt){
//        console.error('====result====',reuslt);
//    }
//});

//var detailOption = {'uid':'8ee4560cf91d160e6cc02cd7'};
//bdmap.detail(detailOption,function(err,reuslt){
//    if(err){
//        console.error('========',err);
//    }
//    if(reuslt){
//        console.error('====result====',reuslt);
//    }
//});

//var eventsearchOption = {'query':'美食','event':'groupon','region':131,'bounds':'39.915,116.404,39.935,116.435','page_size':1};
//bdmap.eventsearch(eventsearchOption,function(err,reuslt){
//    if(err){
//        console.error('========',err);
//    }
//    if(reuslt){
//        console.error('====result====',reuslt);
//    }
//});

var eventdetailOption = {'uid':'c14fc238f7fadd4ea5da390f'};
bdmap.eventdetail(eventdetailOption,function(err,reuslt){
    if(err){
        console.error('========',err);
    }
    if(reuslt){
        console.error('====result====',reuslt);
    }
});

