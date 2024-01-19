
if (typeof gdjs.evtsExt__download__download !== "undefined") {
  gdjs.evtsExt__download__download.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__download__download = {};


gdjs.evtsExt__download__download.userFunc0x1915858 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(!gdjs.__download)
{
    let iimmgg=[];
    gdjs.__download = gdjs.__download || {};
    let ac = new AbortController();




    gdjs.__download.download = function (imageUrl,id) 
    {  
        return new Promise((resolve, reject) => 
        {


            ac = new AbortController();
            ac.signal.addEventListener('abort',()=>
            {

                reject(new Error('Aborted'));
                
            });


    

            iimmgg[id] = PIXI.Texture.fromURL(imageUrl);

            iimmgg[id].then((texture) => 
            {
                resolve(texture);
            }).catch((error) => 
            {
                reject(error);
            });
        });
    };
    gdjs.__download.deletdownload2 = function () 
    {
        ac.abort();
    }


    
}
};
gdjs.evtsExt__download__download.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__download__download.userFunc0x1915858(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__download__download.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__download__download.eventsList0(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__download__download.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__download__download.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__download__download.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__download__download.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__download__download.registeredGdjsCallbacks = [];