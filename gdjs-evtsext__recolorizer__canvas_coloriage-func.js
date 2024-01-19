
if (typeof gdjs.evtsExt__Recolorizer__canvas_coloriage !== "undefined") {
  gdjs.evtsExt__Recolorizer__canvas_coloriage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Recolorizer__canvas_coloriage = {};


gdjs.evtsExt__Recolorizer__canvas_coloriage.userFunc0x1915858 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(!gdjs.__canvas)
{
	gdjs.__canvas = gdjs.__canvas || {};

	let targetContext =[];
	let sourcePixelsdata=[];
	let sourcePixels=[];
	let targetImageData=[];
	let targetPixels=[];
	let nemerst=[];

	nemerst = new Array(20).fill(0);

	gdjs.__canvas.getss = function(idd) {	return sourcePixels[idd]; }
	gdjs.__canvas.getsourceContext = function(idd) 	{	return sourceContext[idd];  }
	gdjs.__canvas.getsourcePixelsdata = function(idd) {  return sourcePixelsdata[idd]; }
	gdjs.__canvas.gettt = function(idd)	{   return targetPixels[idd];	}
	gdjs.__canvas.gettargetContext = function(idd) {	return targetContext[idd]; }
	gdjs.__canvas.gettargetImageData = function(idd) { return targetImageData[idd]; }
	gdjs.__canvas.setsstt = function(nene,tete,frame,idd)
	{
		sourceContext[idd] = nene.getContext('2d');
		targetContext[idd] =  tete.getContext('2d');
		sourcePixelsdata[idd] =  sourceContext[idd].getImageData(0, 0, frame.width, frame.height);
		sourcePixels[idd] =  sourcePixelsdata[idd].data;
		targetImageData[idd] = targetContext[idd].getImageData(0, 0, frame.width, frame.height);
		targetPixels[idd] =  targetImageData[idd].data;
	};
	gdjs.__canvas.setnemerst = function(nene,idd) { nemerst.splice(idd, 0, nene); };
	gdjs.__canvas.getnemerst = function(idd)  { return nemerst[idd]; };	
}
};
gdjs.evtsExt__Recolorizer__canvas_coloriage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Recolorizer__canvas_coloriage.userFunc0x1915858(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__Recolorizer__canvas_coloriage.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Recolorizer__canvas_coloriage.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__Recolorizer__canvas_coloriage.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__Recolorizer__canvas_coloriage.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Recolorizer__canvas_coloriage.registeredGdjsCallbacks = [];