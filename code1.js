gdjs.videoCode = {};
gdjs.videoCode.GDobjObjects1= [];
gdjs.videoCode.GDobjObjects2= [];
gdjs.videoCode.GDobjObjects3= [];
gdjs.videoCode.GDobjObjects4= [];
gdjs.videoCode.GDobjObjects5= [];
gdjs.videoCode.GDNewTextObjects1= [];
gdjs.videoCode.GDNewTextObjects2= [];
gdjs.videoCode.GDNewTextObjects3= [];
gdjs.videoCode.GDNewTextObjects4= [];
gdjs.videoCode.GDNewTextObjects5= [];
gdjs.videoCode.GDplayObjects1= [];
gdjs.videoCode.GDplayObjects2= [];
gdjs.videoCode.GDplayObjects3= [];
gdjs.videoCode.GDplayObjects4= [];
gdjs.videoCode.GDplayObjects5= [];
gdjs.videoCode.GDpauseObjects1= [];
gdjs.videoCode.GDpauseObjects2= [];
gdjs.videoCode.GDpauseObjects3= [];
gdjs.videoCode.GDpauseObjects4= [];
gdjs.videoCode.GDpauseObjects5= [];
gdjs.videoCode.GDstopObjects1= [];
gdjs.videoCode.GDstopObjects2= [];
gdjs.videoCode.GDstopObjects3= [];
gdjs.videoCode.GDstopObjects4= [];
gdjs.videoCode.GDstopObjects5= [];
gdjs.videoCode.GDrotatObjects1= [];
gdjs.videoCode.GDrotatObjects2= [];
gdjs.videoCode.GDrotatObjects3= [];
gdjs.videoCode.GDrotatObjects4= [];
gdjs.videoCode.GDrotatObjects5= [];
gdjs.videoCode.GDbarObjects1= [];
gdjs.videoCode.GDbarObjects2= [];
gdjs.videoCode.GDbarObjects3= [];
gdjs.videoCode.GDbarObjects4= [];
gdjs.videoCode.GDbarObjects5= [];
gdjs.videoCode.GDp2textObjects1= [];
gdjs.videoCode.GDp2textObjects2= [];
gdjs.videoCode.GDp2textObjects3= [];
gdjs.videoCode.GDp2textObjects4= [];
gdjs.videoCode.GDp2textObjects5= [];
gdjs.videoCode.GDexpandObjects1= [];
gdjs.videoCode.GDexpandObjects2= [];
gdjs.videoCode.GDexpandObjects3= [];
gdjs.videoCode.GDexpandObjects4= [];
gdjs.videoCode.GDexpandObjects5= [];


gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDobjObjects1Objects = Hashtable.newFrom({"obj": gdjs.videoCode.GDobjObjects1});
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDNewTextObjects2Objects = Hashtable.newFrom({"NewText": gdjs.videoCode.GDNewTextObjects2});
gdjs.videoCode.userFunc0x11b9470 = function(runtimeScene) {
"use strict";
//timer
const arrcrr = runtimeScene.getVariables().get("currenttime");arrcrr.castTo("array");
const aecrr = arrcrr.getAllChildrenArray();
//=======================================================================
//vidio play
let videoPlayer;let mediaSource;let mimeCodec;let sourceBuffer;
//=======================================================================
const vnext = runtimeScene.getVariables().get("next").getAllChildrenArray();const vnexttwo = runtimeScene.getVariables().get("nexttwo").getAllChildrenArray();
const vclear = runtimeScene.getVariables().get("clear").getAllChildrenArray();
const vstop = runtimeScene.getVariables().get("stop").getAllChildrenArray();
//======================================================
const vv = runtimeScene.getGame().getVariables();
const kk = vv.get("atest1").getAllChildrenArray();

var aaaa = document.getElementById("videoPlayer");


alert("v1");


runtimeScene.downloadimagevv =  function(data)
{
    try
    {
        alert("v2");
        const offc =['mouseover','mousemove','mouseup','mousedown','mouseleave','touchstart'];
        videoPlayer = gdjs.__video.editvarvideo();
        videoPlayer.off(offc);
        mediaSource = new MediaSource();
        mimeCodec = 'video/mp4; codecs="avc1.4d400d, mp4a.40.2"';

        mediaSource.addEventListener('sourceopen', () => 
        {          
            sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
            const typedArray = new Uint8Array(data);

            sourceBuffer.appendBuffer(typedArray);


            aaaa.style.objectFit = 'fill';
            aaaa.style.width = kk[0].getAsNumber()+"px";

            aaaa.style.height = runtimeScene.getObjects("obj")[0].getPointY("vfh")+"px";
            aaaa.style.position = "absolute";
            aaaa.style.top = "0px";
            aaaa.style.left = "0px";
            
            videoPlayer.playbackRate(1); 
            vclear[0] = new gdjs.Variable({type: "number", value:2});    
        });

        mediaSource.addEventListener('update',function(){alert("ok");});





        videoPlayer.src({ type: 'video/mp4', src: URL.createObjectURL(mediaSource) });
        
    }
    catch(ll)
    {
        alert(ll);
    }
}












































runtimeScene.addds = function () 
{
    var buffered = sourceBuffer.buffered;
    var bufferSize = buffered.length;
    var totalSize = 0;
    for (var i = 0; i < bufferSize; i++)
    {
        totalSize += buffered.end(i) - buffered.start(i);
    }

    
    if(videoPlayer.currentTime()>buffered.end(0) - 120 )
    {
        vnext[0] = new gdjs.Variable({type: "number", value:1});
        vnexttwo[0] = new gdjs.Variable({type: "number", value:0}); 
    }
    else
    {
        vnext[0] = new gdjs.Variable({type: "number", value:0});
        vnexttwo[0] = new gdjs.Variable({type: "number", value:1}); 
    }
    if (videoPlayer.currentTime() - 120 >= sourceBuffer.buffered.start(0)) 
    {
        sourceBuffer.remove(sourceBuffer.buffered.start(0), videoPlayer.currentTime()-100);
    }
    
    aecrr[2] = new gdjs.Variable({type: "number",value:  buffered.length,});
    aecrr[3] = new gdjs.Variable({type: "number",value: aecrr[3].getAsNumber() +totalSize,}); 
}
runtimeScene.rtimer = function () 
{
    aecrr[0] = new gdjs.Variable({type: "number",value: videoPlayer.currentTime(),});
    aecrr[1] = new gdjs.Variable({type: "number",value: videoPlayer.duration(),});  
}
runtimeScene.addd = function (aze) 
{
   const az = new Uint8Array(aze);
   sourceBuffer.appendBuffer(az); 
   runtimeScene.addds();     
}






runtimeScene.resise = function (a,z) 
{
   aaaa.style.width = a+"px";
   aaaa.style.height = z+"px";      
}

runtimeScene.videopause = function () 
{
    videoPlayer.pause();
}
runtimeScene.videoplay = function () 
{
    videoPlayer.play();
}
runtimeScene.videorotate = function () 
{
    alert("1az");
    var aaaa = document.getElementById("videoPlayer");alert("1");
    aaaa.style.rotate(90);alert("1");
}







};
gdjs.videoCode.eventsList0 = function(runtimeScene) {

{


gdjs.videoCode.userFunc0x11b9470(runtimeScene);

}


};gdjs.videoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.videoCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.userFunc0x11b9660 = function(runtimeScene) {
"use strict";
let vnimagevideo = runtimeScene.getVariables().get("nimagevideo").getAllChildrenArray();

let vnext = runtimeScene.getVariables().get("next").getAllChildrenArray();

runtimeScene.downloadimagevvss = async function(imageUrl)
{
    try
    {
        const timestamp = new Date().getTime();
	    const texture = await gdjs.__download.download(imageUrl+"?timestamp="+timestamp,2);
   
        vnimagevideo[0] = new gdjs.Variable({type: "number", value:vnimagevideo[0].getAsNumber() + 1}); 
        const pixels = gdjs.__canvas.setssttt(2,texture.baseTexture,1024,1024);
        let data = [];let data1 = [];
        let m = 0, n = 0, j = 0;

        for (let i = 0; i < pixels.length; ) 
        {
            let uo = Math.floor((pixels[i]+pixels[i+1]+pixels[i+2]) / 24);           
            if(pixels[i+3]<50)
            {
                break;
            }
            for (m = 0; m <= 4; m++) 
            {
                let bit = (uo >> m) % 2;
                data[j] |= (bit << n);
                n++;
                if (n == 8) 
		        {
                    j++;
                    n = 0;
                }
            }
            i+=4; 
        }


        
        if(vnimagevideo[0].getAsNumber()==1)
        {
            runtimeScene.downloadimagevv(data);
        }
        else
        {
            runtimeScene.addd(data);
        }
        if(vnimagevideo[0].getAsNumber()<10)
        {
            vnext[0] = new gdjs.Variable({type: "number", value: 1 });
        }
        
    }
    catch(exx)
    {
        vnext[0] = new gdjs.Variable({type: "number", value: 1 });
    }
       
   }
};
gdjs.videoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.videoCode.GDNewTextObjects2);
{gdjs.evtsExt__creat_object__creat_obj_simple.func(runtimeScene, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDNewTextObjects2Objects, 20, 20, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.videoCode.GDNewTextObjects2[i].setZOrder(-(20));
}
}}

}


{


gdjs.videoCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.videoCode.userFunc0x11b9660(runtimeScene);

}


};gdjs.videoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23493404);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("obj"), gdjs.videoCode.GDobjObjects1);
{gdjs.evtsExt__video__videogroup.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__object_exist__existvideo.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__creat_object__creat_obj_principal.func(runtimeScene, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDobjObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__screen__set_reload.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__video__incha.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "daflam");
}{gdjs.evtsExt__variable__InsertAt.func(runtimeScene, "next", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.videoCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__mise_a_jour_itarat_frames__mise_a_jour_itarat_frames.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.videoCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.videoCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.videoCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
if (isConditionTrue_0) {
{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.videoCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDplayObjects3Objects = Hashtable.newFrom({"play": gdjs.videoCode.GDplayObjects3});
gdjs.videoCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.videoCode.GDplayObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDplayObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDplayObjects3 */
{for(var i = 0, len = gdjs.videoCode.GDplayObjects3.length ;i < len;++i) {
    gdjs.videoCode.GDplayObjects3[i].setVariableBoolean(gdjs.videoCode.GDplayObjects3[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDpauseObjects3Objects = Hashtable.newFrom({"pause": gdjs.videoCode.GDpauseObjects3});
gdjs.videoCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.videoCode.GDpauseObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDpauseObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDpauseObjects3 */
{for(var i = 0, len = gdjs.videoCode.GDpauseObjects3.length ;i < len;++i) {
    gdjs.videoCode.GDpauseObjects3[i].setVariableBoolean(gdjs.videoCode.GDpauseObjects3[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDstopObjects3Objects = Hashtable.newFrom({"stop": gdjs.videoCode.GDstopObjects3});
gdjs.videoCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("stop"), gdjs.videoCode.GDstopObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDstopObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDstopObjects3 */
{for(var i = 0, len = gdjs.videoCode.GDstopObjects3.length ;i < len;++i) {
    gdjs.videoCode.GDstopObjects3[i].setVariableBoolean(gdjs.videoCode.GDstopObjects3[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDrotatObjects3Objects = Hashtable.newFrom({"rotat": gdjs.videoCode.GDrotatObjects3});
gdjs.videoCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("rotat"), gdjs.videoCode.GDrotatObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDrotatObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDrotatObjects3 */
{for(var i = 0, len = gdjs.videoCode.GDrotatObjects3.length ;i < len;++i) {
    gdjs.videoCode.GDrotatObjects3[i].setVariableBoolean(gdjs.videoCode.GDrotatObjects3[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDbarObjects3Objects = Hashtable.newFrom({"bar": gdjs.videoCode.GDbarObjects3});
gdjs.videoCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bar"), gdjs.videoCode.GDbarObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDbarObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDbarObjects3 */
{for(var i = 0, len = gdjs.videoCode.GDbarObjects3.length ;i < len;++i) {
    gdjs.videoCode.GDbarObjects3[i].setVariableBoolean(gdjs.videoCode.GDbarObjects3[i].getVariables().get("clicked"), true);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDexpandObjects2Objects = Hashtable.newFrom({"expand": gdjs.videoCode.GDexpandObjects2});
gdjs.videoCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("expand"), gdjs.videoCode.GDexpandObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDexpandObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDexpandObjects2 */
{for(var i = 0, len = gdjs.videoCode.GDexpandObjects2.length ;i < len;++i) {
    gdjs.videoCode.GDexpandObjects2[i].setVariableBoolean(gdjs.videoCode.GDexpandObjects2[i].getVariables().getFromIndex(1), true);
}
}{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.videoCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "play", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "pause", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "stop", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "rotat", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "bar", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "expand", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDplayObjects4Objects = Hashtable.newFrom({"play": gdjs.videoCode.GDplayObjects4});
gdjs.videoCode.userFunc0x11c01b8 = function(runtimeScene) {
"use strict";
runtimeScene.videoplay();
};
gdjs.videoCode.eventsList15 = function(runtimeScene) {

{


gdjs.videoCode.userFunc0x11c01b8(runtimeScene);

}


};gdjs.videoCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.videoCode.GDplayObjects3, gdjs.videoCode.GDplayObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDplayObjects4Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDplayObjects4 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDplayObjects4.length ;i < len;++i) {
    gdjs.videoCode.GDplayObjects4[i].setVariableBoolean(gdjs.videoCode.GDplayObjects4[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDplayObjects3 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDplayObjects3.length ;i < len;++i) {
    gdjs.videoCode.GDplayObjects3[i].setVariableBoolean(gdjs.videoCode.GDplayObjects3[i].getVariables().getFromIndex(1), false);
}
}
{ //Subevents
gdjs.videoCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList17 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.videoCode.GDplayObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.videoCode.GDplayObjects3.length;i<l;++i) {
    if ( gdjs.videoCode.GDplayObjects3[i].getVariableBoolean(gdjs.videoCode.GDplayObjects3[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.videoCode.GDplayObjects3[k] = gdjs.videoCode.GDplayObjects3[i];
        ++k;
    }
}
gdjs.videoCode.GDplayObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDpauseObjects4Objects = Hashtable.newFrom({"pause": gdjs.videoCode.GDpauseObjects4});
gdjs.videoCode.userFunc0x11c0d08 = function(runtimeScene) {
"use strict";
runtimeScene.videopause();
};
gdjs.videoCode.eventsList18 = function(runtimeScene) {

{


gdjs.videoCode.userFunc0x11c0d08(runtimeScene);

}


};gdjs.videoCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.videoCode.GDpauseObjects3, gdjs.videoCode.GDpauseObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDpauseObjects4Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDpauseObjects4 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDpauseObjects4.length ;i < len;++i) {
    gdjs.videoCode.GDpauseObjects4[i].setVariableBoolean(gdjs.videoCode.GDpauseObjects4[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDpauseObjects3 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDpauseObjects3.length ;i < len;++i) {
    gdjs.videoCode.GDpauseObjects3[i].setVariableBoolean(gdjs.videoCode.GDpauseObjects3[i].getVariables().getFromIndex(1), false);
}
}
{ //Subevents
gdjs.videoCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.videoCode.GDpauseObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.videoCode.GDpauseObjects3.length;i<l;++i) {
    if ( gdjs.videoCode.GDpauseObjects3[i].getVariableBoolean(gdjs.videoCode.GDpauseObjects3[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.videoCode.GDpauseObjects3[k] = gdjs.videoCode.GDpauseObjects3[i];
        ++k;
    }
}
gdjs.videoCode.GDpauseObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDstopObjects4Objects = Hashtable.newFrom({"stop": gdjs.videoCode.GDstopObjects4});
gdjs.videoCode.userFunc0x11c1918 = function(runtimeScene) {
"use strict";
//document.querySelector("video").remove();
 var aaaa = document.getElementById("videoPlayer");
    aaaa.remove();

    /*
runtimeScene.videopause();
runtimeScene.resise(0,0);*/
};
gdjs.videoCode.eventsList21 = function(runtimeScene) {

{


gdjs.videoCode.userFunc0x11c1918(runtimeScene);

}


};gdjs.videoCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.videoCode.GDstopObjects3, gdjs.videoCode.GDstopObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDstopObjects4Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDstopObjects4 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDstopObjects4.length ;i < len;++i) {
    gdjs.videoCode.GDstopObjects4[i].setVariableBoolean(gdjs.videoCode.GDstopObjects4[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDstopObjects3 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDstopObjects3.length ;i < len;++i) {
    gdjs.videoCode.GDstopObjects3[i].setVariableBoolean(gdjs.videoCode.GDstopObjects3[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "principal", true);
}
{ //Subevents
gdjs.videoCode.eventsList21(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("stop"), gdjs.videoCode.GDstopObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.videoCode.GDstopObjects3.length;i<l;++i) {
    if ( gdjs.videoCode.GDstopObjects3[i].getVariableBoolean(gdjs.videoCode.GDstopObjects3[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.videoCode.GDstopObjects3[k] = gdjs.videoCode.GDstopObjects3[i];
        ++k;
    }
}
gdjs.videoCode.GDstopObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDrotatObjects4Objects = Hashtable.newFrom({"rotat": gdjs.videoCode.GDrotatObjects4});
gdjs.videoCode.eventsList24 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.videoCode.GDrotatObjects3, gdjs.videoCode.GDrotatObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDrotatObjects4Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDrotatObjects4 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDrotatObjects4.length ;i < len;++i) {
    gdjs.videoCode.GDrotatObjects4[i].setVariableBoolean(gdjs.videoCode.GDrotatObjects4[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDrotatObjects3 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDrotatObjects3.length ;i < len;++i) {
    gdjs.videoCode.GDrotatObjects3[i].setVariableBoolean(gdjs.videoCode.GDrotatObjects3[i].getVariables().getFromIndex(1), false);
}
}}

}


};gdjs.videoCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("rotat"), gdjs.videoCode.GDrotatObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.videoCode.GDrotatObjects3.length;i<l;++i) {
    if ( gdjs.videoCode.GDrotatObjects3[i].getVariableBoolean(gdjs.videoCode.GDrotatObjects3[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.videoCode.GDrotatObjects3[k] = gdjs.videoCode.GDrotatObjects3[i];
        ++k;
    }
}
gdjs.videoCode.GDrotatObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDbarObjects4Objects = Hashtable.newFrom({"bar": gdjs.videoCode.GDbarObjects4});
gdjs.videoCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.videoCode.eventsList27 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.videoCode.GDbarObjects3, gdjs.videoCode.GDbarObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDbarObjects4Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDbarObjects4 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDbarObjects4.length ;i < len;++i) {
    gdjs.videoCode.GDbarObjects4[i].setVariableBoolean(gdjs.videoCode.GDbarObjects4[i].getVariables().get("clicked"), false);
}
}{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDbarObjects3 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDbarObjects3.length ;i < len;++i) {
    gdjs.videoCode.GDbarObjects3[i].setVariableBoolean(gdjs.videoCode.GDbarObjects3[i].getVariables().get("clicked"), false);
}
}
{ //Subevents
gdjs.videoCode.eventsList26(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bar"), gdjs.videoCode.GDbarObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.videoCode.GDbarObjects3.length;i<l;++i) {
    if ( gdjs.videoCode.GDbarObjects3[i].getVariableBoolean(gdjs.videoCode.GDbarObjects3[i].getVariables().get("clicked"), true) ) {
        isConditionTrue_0 = true;
        gdjs.videoCode.GDbarObjects3[k] = gdjs.videoCode.GDbarObjects3[i];
        ++k;
    }
}
gdjs.videoCode.GDbarObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDexpandObjects3Objects = Hashtable.newFrom({"expand": gdjs.videoCode.GDexpandObjects3});
gdjs.videoCode.userFunc0x11c39d8 = function(runtimeScene) {
"use strict";
alert("ok5");
const vv = runtimeScene.getGame().getVariables();
const kk = vv.get("atest1").getAllChildrenArray();

runtimeScene.resise(kk[0].getAsNumber(),runtimeScene.getObjects("obj")[0].getPointY("vmh"));



};
gdjs.videoCode.eventsList29 = function(runtimeScene) {

{


gdjs.videoCode.userFunc0x11c39d8(runtimeScene);

}


};gdjs.videoCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.videoCode.GDexpandObjects2, gdjs.videoCode.GDexpandObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDexpandObjects3Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDexpandObjects3 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDexpandObjects3.length ;i < len;++i) {
    gdjs.videoCode.GDexpandObjects3[i].setVariableBoolean(gdjs.videoCode.GDexpandObjects3[i].getVariables().getFromIndex(1), false);
}
}{gdjs.evtsExt__screen__set_mouse.func(runtimeScene, 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDexpandObjects2 */
{gdjs.evtsExt__variable__InsertAtgdjs.func(runtimeScene, "good", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.videoCode.GDexpandObjects2.length ;i < len;++i) {
    gdjs.videoCode.GDexpandObjects2[i].setVariableBoolean(gdjs.videoCode.GDexpandObjects2[i].getVariables().getFromIndex(1), false);
}
}
{ //Subevents
gdjs.videoCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("expand"), gdjs.videoCode.GDexpandObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.videoCode.GDexpandObjects2.length;i<l;++i) {
    if ( gdjs.videoCode.GDexpandObjects2[i].getVariableBoolean(gdjs.videoCode.GDexpandObjects2[i].getVariables().getFromIndex(1), true) ) {
        isConditionTrue_0 = true;
        gdjs.videoCode.GDexpandObjects2[k] = gdjs.videoCode.GDexpandObjects2[i];
        ++k;
    }
}
gdjs.videoCode.GDexpandObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList30(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "play", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "pause", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "stop", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList23(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "rotat", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "bar", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "expand", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList31(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList33 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__screen__return_mouse.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList5(runtimeScene);} //End of subevents
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
gdjs.videoCode.eventsList7(runtimeScene);} //End of subevents
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
gdjs.videoCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__returngdjs.func(runtimeScene, "good", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList32(runtimeScene);} //End of subevents
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


};gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDobjObjects3Objects = Hashtable.newFrom({"obj": gdjs.videoCode.GDobjObjects3});
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDplayObjects3Objects = Hashtable.newFrom({"play": gdjs.videoCode.GDplayObjects3});
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDpauseObjects3Objects = Hashtable.newFrom({"pause": gdjs.videoCode.GDpauseObjects3});
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDstopObjects3Objects = Hashtable.newFrom({"stop": gdjs.videoCode.GDstopObjects3});
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDrotatObjects3Objects = Hashtable.newFrom({"rotat": gdjs.videoCode.GDrotatObjects3});
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDbarObjects3Objects = Hashtable.newFrom({"bar": gdjs.videoCode.GDbarObjects3});
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDp2textObjects3Objects = Hashtable.newFrom({"p2text": gdjs.videoCode.GDp2textObjects3});
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDexpandObjects3Objects = Hashtable.newFrom({"expand": gdjs.videoCode.GDexpandObjects3});
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDp2textObjects3Objects = Hashtable.newFrom({"p2text": gdjs.videoCode.GDp2textObjects3});
gdjs.videoCode.eventsList34 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bar"), gdjs.videoCode.GDbarObjects3);
gdjs.copyArray(runtimeScene.getObjects("expand"), gdjs.videoCode.GDexpandObjects3);
gdjs.copyArray(runtimeScene.getObjects("obj"), gdjs.videoCode.GDobjObjects3);
gdjs.copyArray(runtimeScene.getObjects("p2text"), gdjs.videoCode.GDp2textObjects3);
gdjs.copyArray(runtimeScene.getObjects("pause"), gdjs.videoCode.GDpauseObjects3);
gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.videoCode.GDplayObjects3);
gdjs.copyArray(runtimeScene.getObjects("rotat"), gdjs.videoCode.GDrotatObjects3);
gdjs.copyArray(runtimeScene.getObjects("stop"), gdjs.videoCode.GDstopObjects3);
{gdjs.evtsExt__chachavideo__chachavideo.func(runtimeScene, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDobjObjects3Objects, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDplayObjects3Objects, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDpauseObjects3Objects, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDstopObjects3Objects, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDrotatObjects3Objects, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDbarObjects3Objects, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDp2textObjects3Objects, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDexpandObjects3Objects, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDp2textObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__screen__set_reload.func(runtimeScene, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.videoCode.eventsList35 = function(runtimeScene) {

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
gdjs.videoCode.eventsList34(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.videoCode.userFunc0x11bafe8 = function(runtimeScene) {
"use strict";


let vnimagevideo = runtimeScene.getVariables().get("nimagevideo").getAllChildrenArray();

let vnext = runtimeScene.getVariables().get("next").getAllChildrenArray();



const vv = runtimeScene.getGame().getVariables();
const kk = vv.get("chois").getAllChildrenArray();

let imageUrl;

if(kk[0].getAsNumber()==1)
{
    imageUrl = gdjs.__db.domain()+gdjs.__db.getnurla( vnimagevideo[0].getAsNumber());
}
if(kk[0].getAsNumber()==2)
{
    imageUrl = gdjs.__db.domain()+gdjs.__db.getnurlz( vnimagevideo[0].getAsNumber());
}
if(kk[0].getAsNumber()==3)
{
    imageUrl = gdjs.__db.domain()+gdjs.__db.getnurle( vnimagevideo[0].getAsNumber());
}



if(imageUrl != null)
{
   runtimeScene.downloadimagevvss(imageUrl);
}
else
{
    vnext[0] = new gdjs.Variable({type: "number", value: 1 }); 
}



};
gdjs.videoCode.eventsList36 = function(runtimeScene) {

{


gdjs.videoCode.userFunc0x11bafe8(runtimeScene);

}


};gdjs.videoCode.userFunc0x11bb430 = function(runtimeScene) {
"use strict";
runtimeScene.addds();

};
gdjs.videoCode.eventsList37 = function(runtimeScene) {

{


gdjs.videoCode.userFunc0x11bb430(runtimeScene);

}


};gdjs.videoCode.eventsList38 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "daflam") >= 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "daflam");
}
{ //Subevents
gdjs.videoCode.eventsList37(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.userFunc0x11bb858 = function(runtimeScene) {
"use strict";
runtimeScene.rtimer();
};
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDNewTextObjects3Objects = Hashtable.newFrom({"NewText": gdjs.videoCode.GDNewTextObjects3});
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDp2textObjects3Objects = Hashtable.newFrom({"p2text": gdjs.videoCode.GDp2textObjects3});
gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDp2textObjects2Objects = Hashtable.newFrom({"p2text": gdjs.videoCode.GDp2textObjects2});
gdjs.videoCode.eventsList39 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.videoCode.GDNewTextObjects2, gdjs.videoCode.GDNewTextObjects3);

gdjs.copyArray(gdjs.videoCode.GDp2textObjects2, gdjs.videoCode.GDp2textObjects3);

{gdjs.evtsExt__RenderToSprite__RenderObject2.func(runtimeScene, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDNewTextObjects3Objects, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDp2textObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.videoCode.GDNewTextObjects2 */
gdjs.copyArray(runtimeScene.getObjects("bar"), gdjs.videoCode.GDbarObjects2);
/* Reuse gdjs.videoCode.GDp2textObjects2 */
{gdjs.evtsExt__creat_object__mise_a_jour_creat_obj.func(runtimeScene, gdjs.videoCode.mapOfGDgdjs_9546videoCode_9546GDp2textObjects2Objects, (( gdjs.videoCode.GDbarObjects2.length === 0 ) ? 0 :gdjs.videoCode.GDbarObjects2[0].getPointX("c1")), (( gdjs.videoCode.GDbarObjects2.length === 0 ) ? 0 :gdjs.videoCode.GDbarObjects2[0].getPointY("c1")), 0, (( gdjs.videoCode.GDNewTextObjects2.length === 0 ) ? 0 :gdjs.videoCode.GDNewTextObjects2[0].getWidth()), (( gdjs.videoCode.GDbarObjects2.length === 0 ) ? 0 :gdjs.videoCode.GDbarObjects2[0].getHeight()), 29, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.videoCode.eventsList40 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.videoCode.GDNewTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("p2text"), gdjs.videoCode.GDp2textObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.videoCode.GDNewTextObjects2.length;i<l;++i) {
    if ( gdjs.videoCode.GDNewTextObjects2[i].getVariableNumber(gdjs.videoCode.GDNewTextObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.videoCode.GDNewTextObjects2[k] = gdjs.videoCode.GDNewTextObjects2[i];
        ++k;
    }
}
gdjs.videoCode.GDNewTextObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.videoCode.GDp2textObjects2.length;i<l;++i) {
    if ( gdjs.videoCode.GDp2textObjects2[i].getVariableNumber(gdjs.videoCode.GDp2textObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.videoCode.GDp2textObjects2[k] = gdjs.videoCode.GDp2textObjects2[i];
        ++k;
    }
}
gdjs.videoCode.GDp2textObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDNewTextObjects2 */
{for(var i = 0, len = gdjs.videoCode.GDNewTextObjects2.length ;i < len;++i) {
    gdjs.videoCode.GDNewTextObjects2[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtsExt__variable__return.func(runtimeScene, "currenttime", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + "*" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtsExt__variable__return.func(runtimeScene, "currenttime", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + "*" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtsExt__variable__return.func(runtimeScene, "currenttime", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) + "*" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtsExt__variable__return.func(runtimeScene, "currenttime", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}
{ //Subevents
gdjs.videoCode.eventsList39(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList41 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.videoCode.eventsList40(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList42 = function(runtimeScene) {

{


gdjs.videoCode.userFunc0x11bb858(runtimeScene);

}


{


gdjs.videoCode.eventsList41(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.videoCode.eventsList43 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("bar"), gdjs.videoCode.GDbarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.videoCode.GDbarObjects2.length;i<l;++i) {
    if ( gdjs.videoCode.GDbarObjects2[i].getVariableNumber(gdjs.videoCode.GDbarObjects2[i].getVariables().getFromIndex(3)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.videoCode.GDbarObjects2[k] = gdjs.videoCode.GDbarObjects2[i];
        ++k;
    }
}
gdjs.videoCode.GDbarObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDbarObjects2 */
{for(var i = 0, len = gdjs.videoCode.GDbarObjects2.length ;i < len;++i) {
    gdjs.videoCode.GDbarObjects2[i].getBehavior("SpriteRecolorizer").ResetColor((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.videoCode.GDbarObjects2.length ;i < len;++i) {
    gdjs.videoCode.GDbarObjects2[i].returnVariable(gdjs.videoCode.GDbarObjects2[i].getVariables().getFromIndex(3)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bar"), gdjs.videoCode.GDbarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.videoCode.GDbarObjects2.length;i<l;++i) {
    if ( gdjs.videoCode.GDbarObjects2[i].getVariableNumber(gdjs.videoCode.GDbarObjects2[i].getVariables().getFromIndex(3)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.videoCode.GDbarObjects2[k] = gdjs.videoCode.GDbarObjects2[i];
        ++k;
    }
}
gdjs.videoCode.GDbarObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.videoCode.GDbarObjects2 */
{for(var i = 0, len = gdjs.videoCode.GDbarObjects2.length ;i < len;++i) {
    gdjs.videoCode.GDbarObjects2[i].returnVariable(gdjs.videoCode.GDbarObjects2[i].getVariables().getFromIndex(2)).setNumber(2);
}
}{for(var i = 0, len = gdjs.videoCode.GDbarObjects2.length ;i < len;++i) {
    gdjs.videoCode.GDbarObjects2[i].getBehavior("SpriteRecolorizer").Recolorize("177;102;102", "146;72;72", gdjs.randomInRange(0, 99), gdjs.randomInRange(0, 99), gdjs.randomInRange(0, 99), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.videoCode.GDbarObjects2.length ;i < len;++i) {
    gdjs.videoCode.GDbarObjects2[i].returnVariable(gdjs.videoCode.GDbarObjects2[i].getVariables().getFromIndex(3)).setNumber(1);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.videoCode.eventsList44 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.videoCode.eventsList43(runtimeScene);} //End of subevents
}

}


};gdjs.videoCode.eventsList45 = function(runtimeScene) {

{


gdjs.videoCode.eventsList3(runtimeScene);
}


{


gdjs.videoCode.eventsList4(runtimeScene);
}


{


gdjs.videoCode.eventsList33(runtimeScene);
}


{


gdjs.videoCode.eventsList35(runtimeScene);
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
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "next", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__variable__InsertAt.func(runtimeScene, "next", 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.videoCode.eventsList36(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "nexttwo", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList38(runtimeScene);} //End of subevents
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
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtsExt__variable__return.func(runtimeScene, "clear", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 2);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.videoCode.eventsList42(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.videoCode.eventsList44(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.videoCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.videoCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.videoCode.GDNewTextObjects1[i].setString("*u*" + gdjs.evtTools.common.toString(gdjs.evtsExt__variable__return.func(runtimeScene, "next", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + "*s*" + gdjs.evtTools.common.toString(gdjs.evtsExt__variable__return.func(runtimeScene, "clear", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) + "*s*" + gdjs.evtTools.common.toString(gdjs.evtsExt__variable__return.func(runtimeScene, "stop", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
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


};

gdjs.videoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.videoCode.GDobjObjects1.length = 0;
gdjs.videoCode.GDobjObjects2.length = 0;
gdjs.videoCode.GDobjObjects3.length = 0;
gdjs.videoCode.GDobjObjects4.length = 0;
gdjs.videoCode.GDobjObjects5.length = 0;
gdjs.videoCode.GDNewTextObjects1.length = 0;
gdjs.videoCode.GDNewTextObjects2.length = 0;
gdjs.videoCode.GDNewTextObjects3.length = 0;
gdjs.videoCode.GDNewTextObjects4.length = 0;
gdjs.videoCode.GDNewTextObjects5.length = 0;
gdjs.videoCode.GDplayObjects1.length = 0;
gdjs.videoCode.GDplayObjects2.length = 0;
gdjs.videoCode.GDplayObjects3.length = 0;
gdjs.videoCode.GDplayObjects4.length = 0;
gdjs.videoCode.GDplayObjects5.length = 0;
gdjs.videoCode.GDpauseObjects1.length = 0;
gdjs.videoCode.GDpauseObjects2.length = 0;
gdjs.videoCode.GDpauseObjects3.length = 0;
gdjs.videoCode.GDpauseObjects4.length = 0;
gdjs.videoCode.GDpauseObjects5.length = 0;
gdjs.videoCode.GDstopObjects1.length = 0;
gdjs.videoCode.GDstopObjects2.length = 0;
gdjs.videoCode.GDstopObjects3.length = 0;
gdjs.videoCode.GDstopObjects4.length = 0;
gdjs.videoCode.GDstopObjects5.length = 0;
gdjs.videoCode.GDrotatObjects1.length = 0;
gdjs.videoCode.GDrotatObjects2.length = 0;
gdjs.videoCode.GDrotatObjects3.length = 0;
gdjs.videoCode.GDrotatObjects4.length = 0;
gdjs.videoCode.GDrotatObjects5.length = 0;
gdjs.videoCode.GDbarObjects1.length = 0;
gdjs.videoCode.GDbarObjects2.length = 0;
gdjs.videoCode.GDbarObjects3.length = 0;
gdjs.videoCode.GDbarObjects4.length = 0;
gdjs.videoCode.GDbarObjects5.length = 0;
gdjs.videoCode.GDp2textObjects1.length = 0;
gdjs.videoCode.GDp2textObjects2.length = 0;
gdjs.videoCode.GDp2textObjects3.length = 0;
gdjs.videoCode.GDp2textObjects4.length = 0;
gdjs.videoCode.GDp2textObjects5.length = 0;
gdjs.videoCode.GDexpandObjects1.length = 0;
gdjs.videoCode.GDexpandObjects2.length = 0;
gdjs.videoCode.GDexpandObjects3.length = 0;
gdjs.videoCode.GDexpandObjects4.length = 0;
gdjs.videoCode.GDexpandObjects5.length = 0;

gdjs.videoCode.eventsList45(runtimeScene);

return;

}

gdjs['videoCode'] = gdjs.videoCode;
