
if (typeof gdjs.evtsExt__screen__layer !== "undefined") {
  gdjs.evtsExt__screen__layer.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__screen__layer = {};


gdjs.evtsExt__screen__layer.userFunc0xba3488 = function(runtimeScene, eventsFunctionContext) {
"use strict";
    let reload = 1;

    gdjs.__reload = gdjs.__reload || {};

    gdjs.__reload.getreload = function () 
    {
        return reload;
    }
    gdjs.__reload.setreload = function (n) 
    {
        reload = n;
    }

};
gdjs.evtsExt__screen__layer.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__screen__layer.userFunc0xba3488(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__screen__layer.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__screen__layer.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__screen__layer.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__screen__layer.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__screen__layer.registeredGdjsCallbacks = [];