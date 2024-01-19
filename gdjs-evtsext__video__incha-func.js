
if (typeof gdjs.evtsExt__video__incha !== "undefined") {
  gdjs.evtsExt__video__incha.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__video__incha = {};


gdjs.evtsExt__video__incha.userFunc0x1915858 = function(runtimeScene, eventsFunctionContext) {
"use strict";

    var videoElement = document.createElement("video");
    videoElement.id = "videoPlayer";
    videoElement.className = "video-js vjs-default-skin";
    videoElement.controls = false;
    videoElement.width = "100"+"px";
    videoElement.height = "100"+"px";
    //videoElement.style.transform = "rotate(180deg)";
    // إضافة نص العدم دعم
    var unsupportedText = document.createTextNode("Your browser does not support the video tag.");
    //videoElement.appendChild(unsupportedText);
    videoElement.style.display = "block"; // يمكنك استخدام "block"none لجعله مرئيًا مرة أخرى
    document.body.appendChild(videoElement);
};
gdjs.evtsExt__video__incha.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__video__incha.userFunc0x1915858(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__video__incha.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__video__incha.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__video__incha.registeredGdjsCallbacks = [];