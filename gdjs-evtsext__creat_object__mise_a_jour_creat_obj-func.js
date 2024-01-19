
if (typeof gdjs.evtsExt__creat_object__mise_a_jour_creat_obj !== "undefined") {
  gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__creat_object__mise_a_jour_creat_obj = {};
gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1= [];
gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects2= [];


gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("obj"), gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1);
{for(var i = 0, len = gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1.length ;i < len;++i) {
    gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1[i].setPosition((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("x")) || 0 : 0),(typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("y")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1.length ;i < len;++i) {
    gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1[i].returnVariable(gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1[i].getVariables().get("id")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("id")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1.length ;i < len;++i) {
    gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1[i].setSize((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1.length ;i < len;++i) {
    gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1[i].setZOrder((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("z")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1.length ;i < len;++i) {
    gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1[i].setLayer((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("layer") : ""));
}
}}

}


};

gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.func = function(runtimeScene, obj, x, y, id, width, height, z, layer, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"obj": obj
},
  _objectArraysMap: {
"obj": gdjs.objectsListsToArray(obj)
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
if (argName === "x") return x;
if (argName === "y") return y;
if (argName === "id") return id;
if (argName === "width") return width;
if (argName === "height") return height;
if (argName === "z") return z;
if (argName === "layer") return layer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects1.length = 0;
gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.GDobjObjects2.length = 0;

gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.registeredGdjsCallbacks = [];