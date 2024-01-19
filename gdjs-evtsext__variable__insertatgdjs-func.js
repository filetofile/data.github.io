
if (typeof gdjs.evtsExt__variable__InsertAtgdjs !== "undefined") {
  gdjs.evtsExt__variable__InsertAtgdjs.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__variable__InsertAtgdjs = {};


gdjs.evtsExt__variable__InsertAtgdjs.userFunc0xba3488 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const arr = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("arr"));




arr.castTo("array");
const a = arr.getAllChildrenArray();

a[eventsFunctionContext.getArgument("index")] = new gdjs.Variable({
        type: "number",
        value: eventsFunctionContext.getArgument("variable"),
    });
};
gdjs.evtsExt__variable__InsertAtgdjs.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__variable__InsertAtgdjs.userFunc0xba3488(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__variable__InsertAtgdjs.func = function(runtimeScene, arr, index, variable, parentEventsFunctionContext) {
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
if (argName === "arr") return arr;
if (argName === "index") return index;
if (argName === "variable") return variable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__variable__InsertAtgdjs.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__variable__InsertAtgdjs.registeredGdjsCallbacks = [];