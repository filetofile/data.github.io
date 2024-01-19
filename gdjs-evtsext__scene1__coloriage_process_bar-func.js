
if (typeof gdjs.evtsExt__scene1__coloriage_process_bar !== "undefined") {
  gdjs.evtsExt__scene1__coloriage_process_bar.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__scene1__coloriage_process_bar = {};


gdjs.evtsExt__scene1__coloriage_process_bar.userFunc0xe54f48 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let point = [];
point=[[225,52],[313,93],[375,150],[378,226],[383,315],[314,377],[224,399],[126,401],[82,315],[67,233]
,[81,145],[147,89]];

   


runtimeScene.__getposition = function(pos) 
    {
        return point[pos];
    };
















};
gdjs.evtsExt__scene1__coloriage_process_bar.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__variable__Fill.func(runtimeScene, "loadcoloriage", 0, 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "loop");
}}

}


{


gdjs.evtsExt__scene1__coloriage_process_bar.userFunc0xe54f48(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__scene1__coloriage_process_bar.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__scene1__coloriage_process_bar.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__scene1__coloriage_process_bar.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__scene1__coloriage_process_bar.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__scene1__coloriage_process_bar.registeredGdjsCallbacks = [];