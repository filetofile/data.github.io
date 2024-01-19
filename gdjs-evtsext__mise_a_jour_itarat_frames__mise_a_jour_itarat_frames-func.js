
if (typeof gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames !== "undefined") {
  gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames = {};


gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.userFunc0x18fe7c8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const canvas = runtimeScene.getGame().getRenderer().getCanvas();
canvas.width =  runtimeScene.getVariables().get("x").getAsNumber()*runtimeScene.getVariables().get("x1").getAsNumber();
canvas.height =  runtimeScene.getVariables().get("y").getAsNumber()*runtimeScene.getVariables().get("x1").getAsNumber();

let k = runtimeScene.getGame().getVariables().get("misea").getAllChildrenArray();
k[0] = new gdjs.Variable({type: "number", value:k[0].getAsNumber()+1});
let kk = runtimeScene.getGame().getVariables().get("atest1").getAllChildrenArray();
kk[0] = new gdjs.Variable({type: "number", value:runtimeScene.getVariables().get("x").getAsNumber()*runtimeScene.getVariables().get("x1").getAsNumber()});
let kkk = runtimeScene.getGame().getVariables().get("atest2").getAllChildrenArray();
kkk[0] = new gdjs.Variable({type: "number", value:runtimeScene.getVariables().get("y").getAsNumber()*runtimeScene.getVariables().get("x1").getAsNumber()});



};
gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene));
if (isConditionTrue_0) {
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "repeat", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__screen__set_reload.func(runtimeScene, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtTools.window.getWindowInnerWidth() != gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtTools.window.getWindowInnerHeight() != gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "repeat", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "width_height", 4, gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "width_height", 5, gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("x").setNumber(gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}{runtimeScene.getScene().getVariables().get("y").setNumber(gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{



}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("x")) / (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "percent", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 0.01) <= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("y")) / (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "percenth", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 0.01));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("x1").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("x")) / (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "percent", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 0.01));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("x")) / (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "percent", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 0.01) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("y")) / (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "percenth", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 0.01));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("x1").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("y")) / (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "percenth", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 0.01));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("x").setNumber(gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "percent", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 0.01);
}{runtimeScene.getScene().getVariables().get("y").setNumber(gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "percenth", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) * 0.01);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("x1")) < 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("x1").add(1);
}}

}


{


gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.userFunc0x18fe7c8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "atest1", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "atest2", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - 1);
}{gdjs.evtTools.window.setMargins(runtimeScene, 0, 0, 0, 0);
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "width_height", 0, gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "atest1", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "width_height", 1, gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "atest2", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "width_height", 2, gdjs.evtTools.window.getWindowInnerWidth(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "width_height", 3, gdjs.evtTools.window.getWindowInnerHeight(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 4, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) != gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "width_height", 5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "repeat", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.registeredGdjsCallbacks = [];