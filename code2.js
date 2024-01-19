gdjs.qualityCode = {};
gdjs.qualityCode.GDobjObjects1= [];
gdjs.qualityCode.GDobjObjects2= [];
gdjs.qualityCode.GDobjObjects3= [];
gdjs.qualityCode.GDobjObjects4= [];
gdjs.qualityCode.GDobjObjects5= [];
gdjs.qualityCode.GDqualityaObjects1= [];
gdjs.qualityCode.GDqualityaObjects2= [];
gdjs.qualityCode.GDqualityaObjects3= [];
gdjs.qualityCode.GDqualityaObjects4= [];
gdjs.qualityCode.GDqualityaObjects5= [];
gdjs.qualityCode.GDqualityzObjects1= [];
gdjs.qualityCode.GDqualityzObjects2= [];
gdjs.qualityCode.GDqualityzObjects3= [];
gdjs.qualityCode.GDqualityzObjects4= [];
gdjs.qualityCode.GDqualityzObjects5= [];
gdjs.qualityCode.GDqualityeObjects1= [];
gdjs.qualityCode.GDqualityeObjects2= [];
gdjs.qualityCode.GDqualityeObjects3= [];
gdjs.qualityCode.GDqualityeObjects4= [];
gdjs.qualityCode.GDqualityeObjects5= [];
gdjs.qualityCode.GDnulllObjects1= [];
gdjs.qualityCode.GDnulllObjects2= [];
gdjs.qualityCode.GDnulllObjects3= [];
gdjs.qualityCode.GDnulllObjects4= [];
gdjs.qualityCode.GDnulllObjects5= [];
gdjs.qualityCode.GDbackObjects1= [];
gdjs.qualityCode.GDbackObjects2= [];
gdjs.qualityCode.GDbackObjects3= [];
gdjs.qualityCode.GDbackObjects4= [];
gdjs.qualityCode.GDbackObjects5= [];


gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDobjObjects1Objects = Hashtable.newFrom({"obj": gdjs.qualityCode.GDobjObjects1});
gdjs.qualityCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.qualityCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.qualityCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.qualityCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.qualityCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityaObjects3Objects = Hashtable.newFrom({"qualitya": gdjs.qualityCode.GDqualityaObjects3});
gdjs.qualityCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("qualitya"), gdjs.qualityCode.GDqualityaObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityaObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDqualityaObjects3 */
{for(var i = 0, len = gdjs.qualityCode.GDqualityaObjects3.length ;i < len;++i) {
    gdjs.qualityCode.GDqualityaObjects3[i].setVariableBoolean(gdjs.qualityCode.GDqualityaObjects3[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityzObjects3Objects = Hashtable.newFrom({"qualityz": gdjs.qualityCode.GDqualityzObjects3});
gdjs.qualityCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("qualityz"), gdjs.qualityCode.GDqualityzObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityzObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDqualityzObjects3 */
{for(var i = 0, len = gdjs.qualityCode.GDqualityzObjects3.length ;i < len;++i) {
    gdjs.qualityCode.GDqualityzObjects3[i].setVariableBoolean(gdjs.qualityCode.GDqualityzObjects3[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityeObjects3Objects = Hashtable.newFrom({"qualitye": gdjs.qualityCode.GDqualityeObjects3});
gdjs.qualityCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("qualitye"), gdjs.qualityCode.GDqualityeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityeObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDqualityeObjects3 */
{for(var i = 0, len = gdjs.qualityCode.GDqualityeObjects3.length ;i < len;++i) {
    gdjs.qualityCode.GDqualityeObjects3[i].setVariableBoolean(gdjs.qualityCode.GDqualityeObjects3[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDnulllObjects3Objects = Hashtable.newFrom({"nulll": gdjs.qualityCode.GDnulllObjects3});
gdjs.qualityCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nulll"), gdjs.qualityCode.GDnulllObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDnulllObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDnulllObjects3 */
{for(var i = 0, len = gdjs.qualityCode.GDnulllObjects3.length ;i < len;++i) {
    gdjs.qualityCode.GDnulllObjects3[i].setVariableBoolean(gdjs.qualityCode.GDnulllObjects3[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDbackObjects2Objects = Hashtable.newFrom({"back": gdjs.qualityCode.GDbackObjects2});
gdjs.qualityCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.qualityCode.GDbackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDbackObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDbackObjects2 */
{for(var i = 0, len = gdjs.qualityCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.qualityCode.GDbackObjects2[i].setVariableBoolean(gdjs.qualityCode.GDbackObjects2[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.qualityCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "q1", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "q2", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "q3", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "null", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "back", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityaObjects4Objects = Hashtable.newFrom({"qualitya": gdjs.qualityCode.GDqualityaObjects4});
gdjs.qualityCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.qualityCode.GDqualityaObjects3, gdjs.qualityCode.GDqualityaObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityaObjects4Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDqualityaObjects4 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.qualityCode.GDqualityaObjects4.length ;i < len;++i) {
    gdjs.qualityCode.GDqualityaObjects4[i].setVariableBoolean(gdjs.qualityCode.GDqualityaObjects4[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDqualityaObjects3 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.qualityCode.GDqualityaObjects3.length ;i < len;++i) {
    gdjs.qualityCode.GDqualityaObjects3[i].setVariableBoolean(gdjs.qualityCode.GDqualityaObjects3[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "chois", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "video", true);
}}

}


};gdjs.qualityCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("qualitya"), gdjs.qualityCode.GDqualityaObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.qualityCode.GDqualityaObjects3.length;i<l;++i) {
    if ( gdjs.qualityCode.GDqualityaObjects3[i].getVariableBoolean(gdjs.qualityCode.GDqualityaObjects3[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.qualityCode.GDqualityaObjects3[k] = gdjs.qualityCode.GDqualityaObjects3[i];
        ++k;
    }
}
gdjs.qualityCode.GDqualityaObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityzObjects4Objects = Hashtable.newFrom({"qualityz": gdjs.qualityCode.GDqualityzObjects4});
gdjs.qualityCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.qualityCode.GDqualityzObjects3, gdjs.qualityCode.GDqualityzObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityzObjects4Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDqualityzObjects4 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.qualityCode.GDqualityzObjects4.length ;i < len;++i) {
    gdjs.qualityCode.GDqualityzObjects4[i].setVariableBoolean(gdjs.qualityCode.GDqualityzObjects4[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDqualityzObjects3 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.qualityCode.GDqualityzObjects3.length ;i < len;++i) {
    gdjs.qualityCode.GDqualityzObjects3[i].setVariableBoolean(gdjs.qualityCode.GDqualityzObjects3[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "chois", 0, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "video", true);
}}

}


};gdjs.qualityCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("qualityz"), gdjs.qualityCode.GDqualityzObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.qualityCode.GDqualityzObjects3.length;i<l;++i) {
    if ( gdjs.qualityCode.GDqualityzObjects3[i].getVariableBoolean(gdjs.qualityCode.GDqualityzObjects3[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.qualityCode.GDqualityzObjects3[k] = gdjs.qualityCode.GDqualityzObjects3[i];
        ++k;
    }
}
gdjs.qualityCode.GDqualityzObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityeObjects4Objects = Hashtable.newFrom({"qualitye": gdjs.qualityCode.GDqualityeObjects4});
gdjs.qualityCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.qualityCode.GDqualityeObjects3, gdjs.qualityCode.GDqualityeObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityeObjects4Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDqualityeObjects4 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.qualityCode.GDqualityeObjects4.length ;i < len;++i) {
    gdjs.qualityCode.GDqualityeObjects4[i].setVariableBoolean(gdjs.qualityCode.GDqualityeObjects4[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDqualityeObjects3 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.qualityCode.GDqualityeObjects3.length ;i < len;++i) {
    gdjs.qualityCode.GDqualityeObjects3[i].setVariableBoolean(gdjs.qualityCode.GDqualityeObjects3[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "chois", 0, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "video", true);
}}

}


};gdjs.qualityCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("qualitye"), gdjs.qualityCode.GDqualityeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.qualityCode.GDqualityeObjects3.length;i<l;++i) {
    if ( gdjs.qualityCode.GDqualityeObjects3[i].getVariableBoolean(gdjs.qualityCode.GDqualityeObjects3[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.qualityCode.GDqualityeObjects3[k] = gdjs.qualityCode.GDqualityeObjects3[i];
        ++k;
    }
}
gdjs.qualityCode.GDqualityeObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDnulllObjects4Objects = Hashtable.newFrom({"nulll": gdjs.qualityCode.GDnulllObjects4});
gdjs.qualityCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.qualityCode.GDnulllObjects3, gdjs.qualityCode.GDnulllObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDnulllObjects4Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDnulllObjects4 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.qualityCode.GDnulllObjects4.length ;i < len;++i) {
    gdjs.qualityCode.GDnulllObjects4[i].setVariableBoolean(gdjs.qualityCode.GDnulllObjects4[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDnulllObjects3 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.qualityCode.GDnulllObjects3.length ;i < len;++i) {
    gdjs.qualityCode.GDnulllObjects3[i].setVariableBoolean(gdjs.qualityCode.GDnulllObjects3[i].getVariables().getFromIndex(1), false);
}
}}

}


};gdjs.qualityCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nulll"), gdjs.qualityCode.GDnulllObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.qualityCode.GDnulllObjects3.length;i<l;++i) {
    if ( gdjs.qualityCode.GDnulllObjects3[i].getVariableBoolean(gdjs.qualityCode.GDnulllObjects3[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.qualityCode.GDnulllObjects3[k] = gdjs.qualityCode.GDnulllObjects3[i];
        ++k;
    }
}
gdjs.qualityCode.GDnulllObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDbackObjects3Objects = Hashtable.newFrom({"back": gdjs.qualityCode.GDbackObjects3});
gdjs.qualityCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.qualityCode.GDbackObjects2, gdjs.qualityCode.GDbackObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDbackObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDbackObjects3 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.qualityCode.GDbackObjects3.length ;i < len;++i) {
    gdjs.qualityCode.GDbackObjects3[i].setVariableBoolean(gdjs.qualityCode.GDbackObjects3[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.qualityCode.GDbackObjects2 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.qualityCode.GDbackObjects2.length ;i < len;++i) {
    gdjs.qualityCode.GDbackObjects2[i].setVariableBoolean(gdjs.qualityCode.GDbackObjects2[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "principal", true);
}}

}


};gdjs.qualityCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.qualityCode.GDbackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.qualityCode.GDbackObjects2.length;i<l;++i) {
    if ( gdjs.qualityCode.GDbackObjects2[i].getVariableBoolean(gdjs.qualityCode.GDbackObjects2[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.qualityCode.GDbackObjects2[k] = gdjs.qualityCode.GDbackObjects2[i];
        ++k;
    }
}
gdjs.qualityCode.GDbackObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.qualityCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "q1", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "q2", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "q3", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList15(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "null", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "back", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.qualityCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 4;
if (isConditionTrue_0) {
{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "good", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "good", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
if (isConditionTrue_0) {
{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDobjObjects3Objects = Hashtable.newFrom({"obj": gdjs.qualityCode.GDobjObjects3});
gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityaObjects3Objects = Hashtable.newFrom({"qualitya": gdjs.qualityCode.GDqualityaObjects3});
gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityzObjects3Objects = Hashtable.newFrom({"qualityz": gdjs.qualityCode.GDqualityzObjects3});
gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityeObjects3Objects = Hashtable.newFrom({"qualitye": gdjs.qualityCode.GDqualityeObjects3});
gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDnulllObjects3Objects = Hashtable.newFrom({"nulll": gdjs.qualityCode.GDnulllObjects3});
gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDbackObjects3Objects = Hashtable.newFrom({"back": gdjs.qualityCode.GDbackObjects3});
gdjs.qualityCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.qualityCode.GDbackObjects3);
gdjs.copyArray(runtimeScene.getObjects("nulll"), gdjs.qualityCode.GDnulllObjects3);
gdjs.copyArray(runtimeScene.getObjects("obj"), gdjs.qualityCode.GDobjObjects3);
gdjs.copyArray(runtimeScene.getObjects("qualitya"), gdjs.qualityCode.GDqualityaObjects3);
gdjs.copyArray(runtimeScene.getObjects("qualitye"), gdjs.qualityCode.GDqualityeObjects3);
gdjs.copyArray(runtimeScene.getObjects("qualityz"), gdjs.qualityCode.GDqualityzObjects3);
{gdjs.evtsExt__chachaquality__chachaquality.func(runtimeScene, gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDobjObjects3Objects, gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityaObjects3Objects, gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityzObjects3Objects, gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDqualityeObjects3Objects, gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDnulllObjects3Objects, gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDbackObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__screen__set_reload.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.qualityCode.eventsList23 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__screen__return_reload.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__screen__return_reload.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 2;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.qualityCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.qualityCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23533572);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("obj"), gdjs.qualityCode.GDobjObjects1);
{gdjs.evtsExt__creat_object__creat_obj_principal.func(runtimeScene, gdjs.qualityCode.mapOfGDgdjs_9546qualityCode_9546GDobjObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__object_exist__existquality.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__screen__set_reload.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.qualityCode.eventsList0(runtimeScene);
}


{


gdjs.qualityCode.eventsList21(runtimeScene);
}


{


gdjs.qualityCode.eventsList23(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.qualityCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.qualityCode.GDobjObjects1.length = 0;
gdjs.qualityCode.GDobjObjects2.length = 0;
gdjs.qualityCode.GDobjObjects3.length = 0;
gdjs.qualityCode.GDobjObjects4.length = 0;
gdjs.qualityCode.GDobjObjects5.length = 0;
gdjs.qualityCode.GDqualityaObjects1.length = 0;
gdjs.qualityCode.GDqualityaObjects2.length = 0;
gdjs.qualityCode.GDqualityaObjects3.length = 0;
gdjs.qualityCode.GDqualityaObjects4.length = 0;
gdjs.qualityCode.GDqualityaObjects5.length = 0;
gdjs.qualityCode.GDqualityzObjects1.length = 0;
gdjs.qualityCode.GDqualityzObjects2.length = 0;
gdjs.qualityCode.GDqualityzObjects3.length = 0;
gdjs.qualityCode.GDqualityzObjects4.length = 0;
gdjs.qualityCode.GDqualityzObjects5.length = 0;
gdjs.qualityCode.GDqualityeObjects1.length = 0;
gdjs.qualityCode.GDqualityeObjects2.length = 0;
gdjs.qualityCode.GDqualityeObjects3.length = 0;
gdjs.qualityCode.GDqualityeObjects4.length = 0;
gdjs.qualityCode.GDqualityeObjects5.length = 0;
gdjs.qualityCode.GDnulllObjects1.length = 0;
gdjs.qualityCode.GDnulllObjects2.length = 0;
gdjs.qualityCode.GDnulllObjects3.length = 0;
gdjs.qualityCode.GDnulllObjects4.length = 0;
gdjs.qualityCode.GDnulllObjects5.length = 0;
gdjs.qualityCode.GDbackObjects1.length = 0;
gdjs.qualityCode.GDbackObjects2.length = 0;
gdjs.qualityCode.GDbackObjects3.length = 0;
gdjs.qualityCode.GDbackObjects4.length = 0;
gdjs.qualityCode.GDbackObjects5.length = 0;

gdjs.qualityCode.eventsList24(runtimeScene);

return;

}

gdjs['qualityCode'] = gdjs.qualityCode;
