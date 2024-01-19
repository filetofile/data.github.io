
if (typeof gdjs.evtsExt__database__database !== "undefined") {
  gdjs.evtsExt__database__database.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__database__database = {};


gdjs.evtsExt__database__database.userFunc0x1915858 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let getdomain = [];

gdjs.__db.getdomain = function () 
{
  return getdomain[0] || null;
}

gdjs.__db.setngetdomain = function (urll) 
{
  getdomain.push(urll);
}
gdjs.__db.getdomainnull = function () 
{
  getdomain = [];
}
};
gdjs.evtsExt__database__database.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.userFunc0x1915858(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__database__database.userFunc0xba3488 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let website = [];

website[0] = "";


const arrqr = runtimeScene.getVariables().get("websitefill");
    arrqr.castTo("array");
    const aqr = arrqr.getAllChildrenArray();


const arrweb = runtimeScene.getVariables().get("pastwebsite");
    arrweb.castTo("array");
    const aweb = arrweb.getAllChildrenArray();

   

gdjs.__db.getwebsite = function () 
{
  return website[0];
}

gdjs.__db.setnwebsite = function (urll) 
{
  website[0]=urll;
   aqr[0] = new gdjs.Variable({type: "number",value: 1,});
   aweb[0] = new gdjs.Variable({type: "number",value: 1,});
}
gdjs.__db.websitenull = function () 
{
  website[0]="";
   aqr[0] = new gdjs.Variable({type: "number",value: 0,});
}
};
gdjs.evtsExt__database__database.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.userFunc0xba3488(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__database__database.userFunc0x1657c90 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let adsdomain = [];



    
gdjs.__db.getadsdomain = function () 
{
  return adsdomain[0] || null;
}

gdjs.__db.setnadsdomain = function (urll) 
{
  adsdomain.push(urll);
 
}
gdjs.__db.getadsdomainnull = function () 
{
  adsdomain = [];
}
};
gdjs.evtsExt__database__database.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.userFunc0x1657c90(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__database__database.userFunc0x1698488 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let myads = []; 

const arrweb = runtimeScene.getVariables().get("pastadssite");
    arrweb.castTo("array");
    const aweb = arrweb.getAllChildrenArray();


gdjs.__db.setnmyads = function (url) 
{
  if(gdjs.__db.getmyadslength()==0)
  {
    aweb[0] = new gdjs.Variable({type: "number",value: 1,});
  }
  myads.push(url);
}

gdjs.__db.getmyads = function (m) 
{
  return myads[m] || null;
}

gdjs.__db.getmyadslength = function () 
{
  return myads.length;
}

gdjs.__db.myadsnull = function () 
{
  myads = [];
}

gdjs.__db.getmyadsmlength = function (m) 
{
  if(!myads[m])
  {
    return 0;
  }
  else
  {
    return myads[m].length;
  }
  
}

gdjs.__db.injsetnmyads = function (url,m) 
{
  myads[m]=url;
  aweb[0] = new gdjs.Variable({type: "number",value: 1,});
}



};
gdjs.evtsExt__database__database.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.userFunc0x1698488(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__database__database.userFunc0x1669800 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let url = []; 

gdjs.__db.setnurl = function (urll) 
{
  url.push(urll);
}

gdjs.__db.geturl = function (m) 
{
  return url[m] || null;
}

gdjs.__db.urllength = function () 
{
  return url.length;
}

gdjs.__db.murlnull = function () 
{
  url = [];
}







};
gdjs.evtsExt__database__database.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.userFunc0x1669800(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__database__database.userFunc0x165c260 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let referal = [];

gdjs.__db.getreferal = function () 
{
  return referal[0] || null;
}

gdjs.__db.setnreferal = function (urll) 
{
  referal.push(urll);
}
gdjs.__db.referalnull = function () 
{
  referal = [];
}
};
gdjs.evtsExt__database__database.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.userFunc0x165c260(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__database__database.userFunc0x796300 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let domain = [];

gdjs.__db.domain = function () 
{
  return domain[0] || null;
}

gdjs.__db.setndomain = function (urll) 
{
  domain.push(urll);
}
gdjs.__db.domainnull = function () 
{
  domain = [];
}
};
gdjs.evtsExt__database__database.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.userFunc0x796300(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__database__database.userFunc0x1698538 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let text = ""; 

gdjs.__db.setntext = function (urll) 
{
  text = urll;
}

gdjs.__db.gettext = function () 
{
  return text;
}








};
gdjs.evtsExt__database__database.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.userFunc0x1698538(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__database__database.userFunc0x164e880 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let urla = [];


gdjs.__db.dellurla = function () 
{ 
  urla = []; 
}
gdjs.__db.setnurla = function ( urll) 
{
  urla.push(urll);
}
gdjs.__db.getnurla = function (m) 
{
  return urla[m] || null;
}

gdjs.__db.geturlalength = function () 
{
  return urla.length;
}







};
gdjs.evtsExt__database__database.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.userFunc0x164e880(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__database__database.userFunc0x1d53470 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let urlz = [];


gdjs.__db.dellurlz = function () 
{ 
  urlz = []; 
}
gdjs.__db.setnurlz = function ( urll) 
{
  urlz.push(urll);
}
gdjs.__db.getnurlz = function (m) 
{
  return urlz[m] || null;
}

gdjs.__db.geturlzlength = function () 
{
  return urlz.length;
}







};
gdjs.evtsExt__database__database.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.userFunc0x1d53470(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__database__database.userFunc0x1103d18 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let urle = [];


gdjs.__db.dellurle = function () 
{ 
  urle = []; 
}
gdjs.__db.setnurle = function ( urll) 
{
  urle.push(urll);
}
gdjs.__db.getnurle = function (m) 
{
  return urle[m] || null;
}
gdjs.__db.geturlelength = function () 
{
  return urle.length;
}






};
gdjs.evtsExt__database__database.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.userFunc0x1103d18(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__database__database.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__database__database.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__database__database.eventsList1(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__database__database.eventsList2(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__database__database.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__database__database.eventsList4(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__database__database.eventsList5(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__database__database.eventsList6(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__database__database.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__database__database.eventsList8(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__database__database.eventsList9(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__database__database.eventsList10(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__database__database.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__database__db_creat_one_time.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__database__database.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__database__database.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__database__database.eventsList12(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__database__database.registeredGdjsCallbacks = [];