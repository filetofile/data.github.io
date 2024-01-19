
if (typeof gdjs.evtsExt__scene1__scene1 !== "undefined") {
  gdjs.evtsExt__scene1__scene1.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__scene1__scene1 = {};


gdjs.evtsExt__scene1__scene1.userFunc0x1915858 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let pixels;let image1;
runtimeScene.downloadimage = async function(ax1)
{
    try
    {
        
        image1 = await gdjs.__download.download(ax1,0);
        pixels = gdjs.__canvas.setssttt(0,image1.baseTexture,1024,1024);

        let data = [], m = 0, n = 0, j = 0,uo,bit;
        for (let i = 0; i < pixels.length; ) 
        {
            uo = Math.floor((pixels[i]+pixels[i+1]+pixels[i+2]) / 24);
            if(pixels[i+3]<50) { break; }
            for (m = 0; m <= 4; m++) 
            {
                bit = (uo >> m) % 2; 
                data[j] |= (bit << n);
              
                 n++;
                if (n == 8) { j++; n = 0;}
            }
            i+=4; 
        }
        const textd = new TextDecoder('utf-8');
        let dtext = textd.decode(new Uint8Array(data));
    




        const pattern = "\n";
        let matches = dtext.split(pattern);


        gdjs.__db.setndomain(matches[0]);

        gdjs.__db.setnadsdomain(matches[1]);

        for(let i=2;i<matches.length;i++)
        {
            gdjs.__db.setnmyads(matches[i]);
        }

        const arrqr = runtimeScene.getVariables().get("getqr");
        arrqr.castTo("array");
        const aqr = arrqr.getAllChildrenArray();
        aqr[0] = new gdjs.Variable({type: "number",value: 5,});



    }
    catch(exx)
    {
      

        if(exx.message!='Aborted')
        {
           
            const arrqr = runtimeScene.getVariables().get("getqr");
            arrqr.castTo("array");
            const aqr = arrqr.getAllChildrenArray();
            aqr[0] = new gdjs.Variable({type: "number",value: 3,});
        }

    }

           
}
};
gdjs.evtsExt__scene1__scene1.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__scene1__scene1.userFunc0x1915858(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__scene1__scene1.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.evtsExt__scene1__scene1.eventsList0(runtimeScene, eventsFunctionContext);
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

gdjs.evtsExt__scene1__scene1.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__scene1__scene1.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__scene1__scene1.registeredGdjsCallbacks = [];