
if (typeof gdjs.evtsExt__creat_object__creat_obj_principal !== "undefined") {
  gdjs.evtsExt__creat_object__creat_obj_principal.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__creat_object__creat_obj_principal = {};
gdjs.evtsExt__creat_object__creat_obj_principal.GDobjObjects1= [];
gdjs.evtsExt__creat_object__creat_obj_principal.GDobjObjects2= [];


gdjs.evtsExt__creat_object__creat_obj_principal.mapOfGDgdjs_9546evtsExt_9595_9595creat_9595object_9595_9595creat_9595obj_9595principal_9546GDobjObjects1Objects = Hashtable.newFrom({"obj": gdjs.evtsExt__creat_object__creat_obj_principal.GDobjObjects1});
gdjs.evtsExt__creat_object__creat_obj_principal.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("obj"), gdjs.evtsExt__creat_object__creat_obj_principal.GDobjObjects1);
{gdjs.evtsExt__creat_object__creat_obj_plus_layer.func(runtimeScene, gdjs.evtsExt__creat_object__creat_obj_principal.mapOfGDgdjs_9546evtsExt_9595_9595creat_9595object_9595_9595creat_9595obj_9595principal_9546GDobjObjects1Objects, 0, 0, 0, gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), "", 30, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__variable__InsertAt.func(runtimeScene, "obj", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__creat_object__creat_obj_principal.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__creat_object__creat_obj_principal.eventsList0(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__creat_object__creat_obj_principal.func = function(runtimeScene, obj, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__creat_object__creat_obj_principal.GDobjObjects1.length = 0;
gdjs.evtsExt__creat_object__creat_obj_principal.GDobjObjects2.length = 0;

gdjs.evtsExt__creat_object__creat_obj_principal.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__creat_object__creat_obj_principal.registeredGdjsCallbacks = [];