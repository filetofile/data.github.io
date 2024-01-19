
if (typeof gdjs.evtsExt__creat_object__creat_obj_simple !== "undefined") {
  gdjs.evtsExt__creat_object__creat_obj_simple.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__creat_object__creat_obj_simple = {};
gdjs.evtsExt__creat_object__creat_obj_simple.GDtextObjects1= [];
gdjs.evtsExt__creat_object__creat_obj_simple.GDtextObjects2= [];


gdjs.evtsExt__creat_object__creat_obj_simple.mapOfGDgdjs_9546evtsExt_9595_9595creat_9595object_9595_9595creat_9595obj_9595simple_9546GDtextObjects1Objects = Hashtable.newFrom({"text": gdjs.evtsExt__creat_object__creat_obj_simple.GDtextObjects1});
gdjs.evtsExt__creat_object__creat_obj_simple.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__creat_object__creat_obj_simple.GDtextObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__creat_object__creat_obj_simple.mapOfGDgdjs_9546evtsExt_9595_9595creat_9595object_9595_9595creat_9595obj_9595simple_9546GDtextObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("x")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("y")) || 0 : 0), "");
}{for(var i = 0, len = gdjs.evtsExt__creat_object__creat_obj_simple.GDtextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__creat_object__creat_obj_simple.GDtextObjects1[i].returnVariable(gdjs.evtsExt__creat_object__creat_obj_simple.GDtextObjects1[i].getVariables().get("id")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("id")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__creat_object__creat_obj_simple.GDtextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__creat_object__creat_obj_simple.GDtextObjects1[i].setZOrder(-(100));
}
}}

}


};

gdjs.evtsExt__creat_object__creat_obj_simple.func = function(runtimeScene, text, x, y, id, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"text": text
},
  _objectArraysMap: {
"text": gdjs.objectsListsToArray(text)
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__creat_object__creat_obj_simple.GDtextObjects1.length = 0;
gdjs.evtsExt__creat_object__creat_obj_simple.GDtextObjects2.length = 0;

gdjs.evtsExt__creat_object__creat_obj_simple.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__creat_object__creat_obj_simple.registeredGdjsCallbacks = [];