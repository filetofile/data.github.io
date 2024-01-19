
if (typeof gdjs.evtsExt__RenderToSprite__RenderObject2 !== "undefined") {
  gdjs.evtsExt__RenderToSprite__RenderObject2.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__RenderToSprite__RenderObject2 = {};
gdjs.evtsExt__RenderToSprite__RenderObject2.GDsourceObjects1= [];
gdjs.evtsExt__RenderToSprite__RenderObject2.GDsourceObjects2= [];
gdjs.evtsExt__RenderToSprite__RenderObject2.GDrenderTargetObjects1= [];
gdjs.evtsExt__RenderToSprite__RenderObject2.GDrenderTargetObjects2= [];


gdjs.evtsExt__RenderToSprite__RenderObject2.userFunc0x1915858 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const source = eventsFunctionContext.getObjects("source")[0].getRendererObject();
const renderTarget = eventsFunctionContext.getObjects("renderTarget")[0].getRendererObject();




const { position: { x: originalX, y: originalY } } = source;
const { width, height, x, y } = source.getLocalBounds();
source.position = { x: -x, y: -y };





if (renderTarget.texture instanceof PIXI.RenderTexture) 
{
    renderTarget.texture.resize(width, height);
} 
else 
{
    renderTarget.texture = PIXI.RenderTexture.create({ width, height });
    
}


runtimeScene.getGame().getRenderer().getPIXIRenderer().render( source , { renderTexture: renderTarget.texture });

source.position = { x: originalX, y: originalY };


};
gdjs.evtsExt__RenderToSprite__RenderObject2.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("source"), gdjs.evtsExt__RenderToSprite__RenderObject2.GDsourceObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__RenderToSprite__RenderObject2.GDsourceObjects1);
gdjs.evtsExt__RenderToSprite__RenderObject2.userFunc0x1915858(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__RenderToSprite__RenderObject2.func = function(runtimeScene, source, renderTarget, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"source": source
, "renderTarget": renderTarget
},
  _objectArraysMap: {
"source": gdjs.objectsListsToArray(source)
, "renderTarget": gdjs.objectsListsToArray(renderTarget)
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

gdjs.evtsExt__RenderToSprite__RenderObject2.GDsourceObjects1.length = 0;
gdjs.evtsExt__RenderToSprite__RenderObject2.GDsourceObjects2.length = 0;
gdjs.evtsExt__RenderToSprite__RenderObject2.GDrenderTargetObjects1.length = 0;
gdjs.evtsExt__RenderToSprite__RenderObject2.GDrenderTargetObjects2.length = 0;

gdjs.evtsExt__RenderToSprite__RenderObject2.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__RenderToSprite__RenderObject2.registeredGdjsCallbacks = [];