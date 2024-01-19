
if (typeof gdjs.evtsExt__scene1__scene3 !== "undefined") {
  gdjs.evtsExt__scene1__scene3.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__scene1__scene3 = {};


gdjs.evtsExt__scene1__scene3.userFunc0x1915858 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let dtext ;
runtimeScene.downloadimage3 = function()
{
     
           const textd = new TextDecoder('utf-8');
        dtext = textd.decode(new Uint8Array(runtimeScene.datadownloadimage2()));
        
        const arrqr = runtimeScene.getVariables().get("getqr");
    arrqr.castTo("array");
    const aqr = arrqr.getAllChildrenArray();
    aqr[0] = new gdjs.Variable({type: "number",value: 8,});
}
runtimeScene.dtextdownloadimage3 = function()
{
    return dtext;
}
};
gdjs.evtsExt__scene1__scene3.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__scene1__scene3.userFunc0x1915858(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__scene1__scene3.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__scene1__scene3.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__scene1__scene3.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__scene1__scene3.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__scene1__scene3.registeredGdjsCallbacks = [];