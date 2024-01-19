
if (typeof gdjs.evtsExt__Recolorizer__DefineJavaScript !== "undefined") {
  gdjs.evtsExt__Recolorizer__DefineJavaScript.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Recolorizer__DefineJavaScript = {};


gdjs.evtsExt__Recolorizer__DefineJavaScript.userFunc0x1698488 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const resetCanvas = function (canvas, texture) 
{
    const context = canvas.getContext('2d');
    const crop = texture._frame;
    context.save();
    context.globalCompositeOperation = 'copy';
    context.drawImage(
        texture.baseTexture.getDrawableSource(),
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
    );
    context.restore();
    return canvas;
}

const recolorizeTexture = function (sourceCanvas, targetCanvas, frame, originColor, targetColor, hueScope, saturationScope, lighnessScope,idd,hidde,id) 
{
    
  
    let sourceContext,targetContext,sourcePixelsdata,targetImageData,sourcePixels,targetPixels;
    if(idd==0||idd==1||idd==2||idd==3)
    {
        sourceContext = sourceCanvas.getContext('2d');
        targetContext = targetCanvas.getContext('2d');
        sourcePixelsdata = sourceContext.getImageData(0, 0, frame.width, frame.height); 
        sourcePixels = sourcePixelsdata.data; 
        targetImageData = targetContext.getImageData(0, 0, frame.width, frame.height);
        targetPixels = targetImageData.data;
    }
    else
    {
        if(gdjs.__canvas.getnemerst(idd)==0)
        {
            gdjs.__canvas.setsstt(sourceCanvas, targetCanvas, frame,idd);
            gdjs.__canvas.setnemerst(gdjs.__canvas.getnemerst(idd)+1,idd);
        }
        sourceContext = gdjs.__canvas.getsourceContext(idd);
        targetContext = gdjs.__canvas.gettargetContext(idd);
        
        sourcePixelsdata = gdjs.__canvas.getsourcePixelsdata(idd);
        targetImageData = gdjs.__canvas.gettargetImageData(idd);

        sourcePixels = gdjs.__canvas.getss(idd);
        targetPixels = gdjs.__canvas.gettt(idd);
    }
    if( hidde == 0 )
    {

        
        let data = runtimeScene.returncanvastopixels();
        
        for(let ii=0;ii<data.length;ii+=4)
        {
         
        sourcePixels[ ii] = data[ ii ];
		sourcePixels[ ii +1] = data[ ii +1];
		sourcePixels[ ii +2] = data[ ii +2];
        sourcePixels[ii + 3] = data[ ii +3];
			
        }
        targetContext.putImageData(sourcePixelsdata, 0, 0);

    }
   if( hidde == 1 )
    {
       

        let kk = runtimeScene.getVariables().get("loadcoloriage").getAllChildrenArray();
        let i = kk[0].getAsNumber();
        let max = i -4;
        if(i>36)
        {
            kk[0] = new gdjs.Variable({type: "number", value:kk[0].getAsNumber()-12}); 
        }
        
        let addd=0,addd2=0;let aattx = [], aatty = [];
        let ady,adx,ad=0,x2;let x1=0;let p = [];let cl = [];

        for (i; i > max;i -= 1)
        {
            
            p = runtimeScene.__getposition((i+12)%12);
            x1 = ((p[1]*461)+(p[0]))*4;
            cl[x1/4] = 0;

            sourcePixels[x1 + 0] = 0;
            sourcePixels[x1 + 1] = 255;
            sourcePixels[x1 + 2] = 0;
			sourcePixels[x1 + 3] = 255;addd++;addd2++;

            for (let y11 = p[1] - 1; y11 <= p[1] + 1; y11++)
            {               	
                for (let x11 = p[0] - 1; x11 <= p[0] + 1; x11++)
                {
                    x2 = (y11*461) + (x11);
                    if((typeof cl[x2] == 'undefined')&&(sourcePixels[(x2*4) + 0]>100&&sourcePixels[(x2*4) + 1]<100&&sourcePixels[(x2*4) + 2]<100))
                    {
                        cl[x2] = 0;
                        x2*=4;
                        sourcePixels[x2 + 0] = 0;
                        sourcePixels[x2 + 1] = 255;
                        sourcePixels[x2 + 2] = 0;
			            sourcePixels[x2 + 3] = 255;addd++;addd2++;
                        
                        
                        aattx[(addd-2)] = (x11);
                        aatty[(addd-2)] = (y11);     
                        
                    }                            
                }
            }
            while(1<addd2)
            {
                //===========================================
                //جلب النقط للتحليل مرة اخرى
                ady = aatty[ad]  - 1;
                adx = aattx[ad]  - 1;
                //===========================================



                for (let y11 = ady ; y11 <= ady + 2 ; y11++)
                {
                    for (let x11 = adx; x11 <= adx + 2 ; x11++)
                    {
                        x1 = (y11*461) + (x11);
                         if((typeof cl[x1] == 'undefined')&&(sourcePixels[(x1*4) + 0]>100&&sourcePixels[(x1*4) + 1]<100&&sourcePixels[(x1*4) + 2]<100))
                        {
                            cl[x1] = 0;
                            x1*=4;
                            sourcePixels[x1 + 0] = 0;
                            sourcePixels[x1 + 1] = 255;
                            sourcePixels[x1 + 2] = 0;
			                sourcePixels[x1 + 3] = 255;addd++;addd2++;
                        
                        
                            aattx[(addd-2)] = (x11);
                            aatty[(addd-2)] = (y11);
                        }
                    }
                }

                if(addd2>=3)
                {
                    addd2--;
                    ad++;
			    }
			    else
			    {
				    ad = 0;addd = 0;addd2 = 0;
			    }
                    
            }
            if(i<12 && (i-1)<0)
            {

                break;
            }


        }








       
        targetContext.putImageData(sourcePixelsdata, 0, 0);
    }
    if( hidde ==2 )
    {
        const arrcrr = runtimeScene.getVariables().get("currenttime");arrcrr.castTo("array");const aecrr = arrcrr.getAllChildrenArray();
    
let m = Math.floor((aecrr[0].getAsNumber()/aecrr[1].getAsNumber()*100));
if(m>100)
{
    m = 100;
}

        for(let ii=0;ii<m;ii+=4)
        {
         
        sourcePixels[ ii] = 0;
		sourcePixels[ ii +1] = 255;
		sourcePixels[ ii +2] = 0;
        sourcePixels[ii + 3] = 255;
			
        }
        targetContext.putImageData(sourcePixelsdata, 0, 0);

    }


 
};


//--------------------------------------------------------------------

const getRecolorizationKey = function (originColor, targetColor, hueScope, saturationScope, lighnessScope) 
{
    
    return String.fromCharCode(originColor[0] * (2 ** 8) + originColor[1],
        originColor[2] * (2 ** 8) + targetColor[0],
        targetColor[1] * (2 ** 8) + targetColor[2],
        (hueScope * (2 ** 8) + saturationScope) * (2 ** 8),
        lighnessScope * (2 ** 8));
}


gdjs.__recolorizerExtension = gdjs.__recolorizerExtension || {};

gdjs.__recolorizerExtension.getCanvas = function (texture,xx,yy) 
{
 
    const canvas = document.createElement('canvas');
	
    const context = canvas.getContext('2d');
    const crop = texture._frame.clone();
    const resolution = texture.baseTexture.resolution;


    crop.x *= resolution;
    crop.y *= resolution;
    crop.width *= resolution;
    crop.height *= resolution;

    canvas.width = Math.ceil(crop.width);
    canvas.height = Math.ceil(crop.height);
    
    context.save();
    context.globalCompositeOperation = 'copy';
    context.drawImage(
        texture.baseTexture.getDrawableSource(),
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        xx,
        yy
    );
    context.restore();
    return canvas;
}
/*
gdjs.__recolorizerExtension.getCanvasa = function (texture) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');

    const context = canvas.getContext('2d');
    const crop = texture._frame.clone();
    const resolution = texture.baseTexture.resolution;
    crop.x *= resolution;
    crop.y *= resolution;
    crop.width *= resolution;
    crop.height *= resolution;

    canvas.width = Math.ceil(crop.width);
    canvas.height = Math.ceil(crop.height);

    context.save();
    context.globalCompositeOperation = 'copy';
    context.drawImage(
      texture.baseTexture.getDrawableSource(),
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );
    context.restore();

 
    resolve(canvas);

   
    setTimeout(() => {
    canvas.width = 0;
    canvas.height = 0;
    canvas.remove();
  }, 0);
  
  });
}
*/
gdjs.__recolorizerExtension.getCanvasa = function (texture) {
  
    const canvas = document.createElement('canvas');

    const context = canvas.getContext('2d');
    const crop = texture._frame.clone();
    const resolution = texture.baseTexture.resolution;
    crop.x *= resolution;
    crop.y *= resolution;
    crop.width *= resolution;
    crop.height *= resolution;

    canvas.width = Math.ceil(crop.width);
    canvas.height = Math.ceil(crop.height);

    context.save();
    context.globalCompositeOperation = 'copy';
    context.drawImage(
      texture.baseTexture.getDrawableSource(),
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );
    context.restore();

 
    return canvas;
}



gdjs.__recolorizerExtension.RecolorizationManager = /** @class */ (function () {
  
    function RecolorizationManager(sourceTextures) {
        
        this.sourceTextures = sourceTextures;

        this.sourceCanvas = sourceTextures.map(texture => gdjs.__recolorizerExtension.getCanvasa(texture));

/*Promise.all(sourceTextures.map(texture => gdjs.__recolorizerExtension.getCanvasa(texture)))
  .then((canvases) => {
    this.sourceCanvas = canvases;
  });*/

        



       
        this.recolorizedSprites = new Map();
   
        this.recycledRecolorizedSprites = [];
    }

    RecolorizationManager.prototype.unregister = function (previousRecolorizationKey) {
        const previousRecolorizedSprite = this.recolorizedSprites.get(previousRecolorizationKey);
        if (previousRecolorizedSprite) {
            previousRecolorizedSprite.userCount--;
            if (previousRecolorizedSprite.userCount <= 0) {
                this.recolorizedSprites.delete(previousRecolorizationKey);
                this.recycledRecolorizedSprites.push(previousRecolorizedSprite);
            }
        }
    }

   
    RecolorizationManager.prototype.register = function (recolorizationKey, recolorizations) {
        let xx;let yy;
        if (recolorizationKey === "") {
            return this.sourceTextures;
        }

        
        let targetTextures;
        let recolorizedSprite = this.recolorizedSprites.get(recolorizationKey);
        if (recolorizedSprite) {
            targetTextures = recolorizedSprite.textures;
        }
        else {
            if (this.recycledRecolorizedSprites.length > 0) {
                const reusableRecolorizedSprite = this.recycledRecolorizedSprites.pop();
                targetTextures = reusableRecolorizedSprite.textures;

                for (const recolorization of recolorizations) 
				{
					xx = recolorization.x;yy = recolorization.y;
				}


                
                const targetCanvas = reusableRecolorizedSprite.canvas;

                for (let textureIndex = 0; textureIndex < this.sourceTextures.length; textureIndex++) {
                    const sourceTexture = this.sourceTextures[textureIndex];
                    const targetCanva = targetCanvas[textureIndex];
                    resetCanvas(targetCanva, sourceTexture);
                }

                this._recolorizeAll(targetCanvas, recolorizations);

                targetTextures.forEach(texture => texture.update());
                reusableRecolorizedSprite.userCount = 0;
                recolorizedSprite = reusableRecolorizedSprite;
            }
            else {
                
                for (const recolorization of recolorizations) 
				{
					xx = recolorization.x;yy = recolorization.y;
				}

                const targetCanvas = this.sourceTextures.map(texture => gdjs.__recolorizerExtension.getCanvas(texture,xx,yy));

                this._recolorizeAll(targetCanvas, recolorizations);

                targetTextures = targetCanvas.map((targetCanva, index) => {
                    const texture = PIXI.Texture.from(targetCanva);
                    texture.baseTexture.scaleMode = this.sourceTextures[index].baseTexture.scaleMode;
                    texture.baseTexture.wrapMode = this.sourceTextures[index].baseTexture.wrapMode;
                    texture.baseTexture.alphaMode = this.sourceTextures[index].baseTexture.alphaMode;
                  
                    return texture;
                });
                recolorizedSprite = { userCount: 0, textures: targetTextures, canvas: targetCanvas };
            }
            this.recolorizedSprites.set(recolorizationKey, recolorizedSprite);
        }
        recolorizedSprite.userCount++;
        return targetTextures;
    }
   
    RecolorizationManager.prototype._recolorizeAll = function (targetCanvas, recolorizations) 
    {
        for (let textureIndex = 0; textureIndex < this.sourceTextures.length; textureIndex++) {
            const sourceTexture = this.sourceTextures[textureIndex];
            const targetCanva = targetCanvas[textureIndex];
            const frame = sourceTexture._frame;
            for (const recolorization of recolorizations) {
                recolorizeTexture(
                    this.sourceCanvas[textureIndex],
                    targetCanva,
                    frame,
                    recolorization.originColor,
                    recolorization.targetColor,
                    recolorization.hueScope,
                    recolorization.saturationScope,
                    recolorization.lighnessScope,
                    recolorization.idd,
                    recolorization.hidde,
                    recolorization.id
                );
            }
        }
    }

    return RecolorizationManager;
}());

gdjs.__recolorizerExtension.Recolorizer = (function () {
 
    function Recolorizer(manager, sourceTextureContainers) {
        this.manager = manager;
        this.sourceTextureContainers = sourceTextureContainers;

        this.previousRecolorizationKey = "";
        this.recolorizationKey = "";
        this.recolorizations = [];
    }

   
    Recolorizer.prototype.recolorizeSprite = function (originColor, targetColor, hueScope, saturationScope, lighnessScope,x,y,idd,hidde,id) 
    {
        this.recolorizationKey += getRecolorizationKey(originColor, targetColor, hueScope, saturationScope, lighnessScope);
        this.recolorizations.push({ originColor, targetColor, hueScope, saturationScope, lighnessScope,x,y,idd,hidde,id}); 
    }
    Recolorizer.prototype.resetSprite = function () {
        this.recolorizationKey = "";
        this.recolorizations = [];
    }
    Recolorizer.prototype.updateSprite = function () {
        const needsRecolorization = this.recolorizationKey !== this.previousRecolorizationKey;
        if (needsRecolorization) {
            this.manager.unregister(this.previousRecolorizationKey);
            const targetTextures = this.manager.register(this.recolorizationKey, this.recolorizations);
            let textureIndex = 0;
            for (const container of this.sourceTextureContainers) {
                container.texture = targetTextures[textureIndex];
                textureIndex++;
            }
            this.previousRecolorizationKey = this.recolorizationKey;
        }
        return needsRecolorization;
    }

    return Recolorizer;
}());


};
gdjs.evtsExt__Recolorizer__DefineJavaScript.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Recolorizer__DefineJavaScript.userFunc0x1698488(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

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

gdjs.evtsExt__Recolorizer__DefineJavaScript.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__Recolorizer__DefineJavaScript.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Recolorizer__DefineJavaScript.registeredGdjsCallbacks = [];