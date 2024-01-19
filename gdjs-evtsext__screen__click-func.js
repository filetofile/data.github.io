
if (typeof gdjs.evtsExt__screen__click !== "undefined") {
  gdjs.evtsExt__screen__click.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__screen__click = {};


gdjs.evtsExt__screen__click.userFunc0xba3488 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let mouse = 0;

gdjs.__mouse = gdjs.__mouse || {};
gdjs.__mouse.getmouse = function() 
{
    return mouse;
};
gdjs.__mouse.setmouse = function(n) 
{
    mouse = n;
};
  

};
gdjs.evtsExt__screen__click.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__variable__Fillgdjs.func(runtimeScene, "id", 0, 0, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__variable__Fillgdjs.func(runtimeScene, "mousex", 0, 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__variable__Fillgdjs.func(runtimeScene, "mousey", 0, 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__variable__Fillgdjs.func(runtimeScene, "good", 0, 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.evtsExt__screen__click.userFunc0xba3488(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__screen__click.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__screen__click.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__screen__click.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__screen__click.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__screen__click.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__screen__click.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__screen__click.registeredGdjsCallbacks = [];