
if (typeof gdjs.evtsExt__canvas__canvas !== "undefined") {
  gdjs.evtsExt__canvas__canvas.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__canvas__canvas = {};


gdjs.evtsExt__canvas__canvas.userFunc0x1915858 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.__canvas = gdjs.__secret || {};

let canvas=[];const imageData=[];let pixels=[];
let imageSource=[];
canvas[0] = document.createElement('canvas');
let ctx=[];


gdjs.__canvas.setssttt = function(idd,texture,w,h) 
{
    imageSource[idd] = texture;
    ctx[idd] = canvas[0].getContext('2d');
    canvas[0].height = h;
    canvas[0].width = w;
    ctx[idd].drawImage(imageSource[idd].getDrawableSource(), 0, 0);
        imageData[idd] = ctx[idd].getImageData(0, 0, canvas[0].width, canvas[0].height);
        pixels[idd] = imageData[idd].data;

        return pixels[idd];
};


};
gdjs.evtsExt__canvas__canvas.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__canvas__canvas.userFunc0x1915858(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__canvas__canvas.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__canvas__canvas.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__canvas__canvas.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__canvas__canvas.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__canvas__canvas.registeredGdjsCallbacks = [];