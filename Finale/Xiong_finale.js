(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Xiong_finale_atlas_1", frames: [[0,0,1996,1999]]},
		{name:"Xiong_finale_atlas_2", frames: [[0,0,1996,1999]]},
		{name:"Xiong_finale_atlas_3", frames: [[0,0,1958,1929]]},
		{name:"Xiong_finale_atlas_4", frames: [[0,1445,47,33],[0,0,1469,1443]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Xiong_finale_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Xiong_finale_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Xiong_finale_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Xiong_finale_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Xiong_finale_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3839,2162);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tophalf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-366.95,-360.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tophalf, new cjs.Rectangle(-366.9,-360.4,734.5,721.5), null);


(lib.shine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EAhTgtyIMStMQFsDvFNEyQWdUpBMcvIOxAAEBD/gBFIMIAAQAEBmAABoQAAe03tVyQquJ3svFZIECJkEAtlg6+II+poEAbzA5lIFOMaQvbGjyYAAQ05AAxFoeQqWlHo8oOQvcuMlZyBIwAFJEgVihF8QJ3iTK5AAQaLAAUMNREgVihF8Ik4pmEhFhglcQEzm3GsmKQQButUfkyEg66gb9IqnpfIqBo+EgQZg72IlJqGEhO3AWiQi4pqAAqvQAA2HMOxeEhEmATOIqRDUEgmwBEEIoSKjEgfGA6TInqJx");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,153,0.42)").s().p("Egl+BB8IHrpyInrJyQqVlIo8oOQvcuMlZyBIKQjTIqQDTQi4ppAAqwQAA2HMOxeIKmJfIqmpfQEzm3GsmKQQButUfkyQJ3iTK4AAQaLAAUMNSIsSNLIMStLQFsDuFNEyQWdUqBNcuIsJAAIMJAAQADBnAABnQAAe03tVyQquJ3suFaIlOsbIFOMbQvcGiyYAAQ05AAxFodgEgPng9/IlIqGgEAuXg9GIAAAAg");
	this.shape_1.setTransform(-5.05,13.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EBrlgBcIT0AAEA9NhPMIMDs7EA9NhPMQHoFBG/GbUAeLAbuABmAmmQAFCIAACMUAAAApYgf2AdRQuZNOxFHQIFZM2EAstg9eIQgxuEAlVBNUIHBQrQ0uIy4rAAQ8EAA28rXIrHOKEBbTgBcIQSAAEgc6hd7Imjs5Egc6hd7QNPjFOoAAUAjJAAAAbHAR0EgWBhQWIm5tlEhPHgljIuPsvQGcpNI/oRQVgzwbhmbEhp5AeQQj4s9AAubQAA9tQb3dItdsCEhp5AeQI1fG6Eg0DBbaQt4m4sArBQ0vzEnP4NEgpwBOSIqTNIEhcHAZ0ItyEc");
	this.shape_2.setTransform(0,-0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,153,0.42)").s().p("Egy/BYiIKTtIIqTNIQt4m4sArBQ0vzFnP4MINykcItyEcQj4s9AAubQAA9tQb3dQGcpOI/oQQVgzwbhmbIG5NkIm5tkQNPjFOnAAUAjKAAAAbHAR1IwgRtIQgxtQHoFBG/GaUAeKAbuABmAmmQAGCJAACLUAAAApYgf2AdRQuZNOxGHQInAwrIHAQrQ0uIy4rAAQ8DAA28rXgEBsogEUIwSAAgEhODgobIuPsvg");
	this.shape_3.setTransform(-6.775,18.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},8).to({state:[{t:this.shape_1},{t:this.shape}]},8).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-816.2,-684.7,1632.5,1369.3000000000002);


(lib.lever = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AoCzVIAAk3IFKAAIAAE3IEhAAIAAEYIlTAAIkYAAgAjqmDIAAksIAAkOAjqmDIAAAeIlKAAIAAlKIFKAAABpq5IAKAAIAAI7IhQAAIAAoxABpq5IAAAKIhGAAIhjAAIAAEsIiqAAABpu9IAAEEAi4zVIlKAAAhAqvIiqAAAEopfIAAkOIEOAAIAAEOgAI2pfIBZAAABu1hIGqAAIAAGpImqAAgAHckUIhQAAIhkAAIAAlLAHcEkIhQAAIAAo4AHcEkICzAAAHckUIAAI4AKPkUIizAAAoCjEIFHAAIAAFGIlHAAgAhAhMIDaAAIAADZIjaAAgAAtGmIolAAIAAj6IIlAAgAnQMiIAAkEIEEAAIAAEEIAADSInCAAIAAjSgACbRiIAAhGIEFAAIAABGIAAGoImoAAIAAmogADILmIDOAAIAACqImaAAIAAiqIAxAAIAAlAAnQVmICnAAIAACnIinAAgAliQSIExAAIAAExIkxAAgAjMMiIkEAAAKPKWIkDAAIAAlyADILmIibAAAAtCsICbAAIAAI6AGgRiIkFAA");
	this.shape.setTransform(61.45,33.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AnPYNIAAinICmAAIAACngAqOP0IAAjSIC/AAIEEAAIAADSgAGLKWIAAlyIBQAAIC0AAIAAFygAhACNIAAjaIDaAAIAADagAHbkVIhQAAIhkAAIAAlJIEOAAIBaAAIAAFJgAjqmDIAAkrICqAAIAAErgAoCzUIAAk4IFLAAIAAE4g");
	this.shape_1.setTransform(61.45,33.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AnFCTIFiplIIpE/IliJmg");
	this.shape_2.setTransform(-246.075,-128.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgSW2IAAmpICjAAIEEAAIAAGpgAAjKSIAAlBIAAj5ICbAAIAAI6gAoMAtIAAlGIFHAAIAAFGgAAZsDIhjAAIiqAAIAAkOIFTAAIAAEEIAAAKgABkwMIAAmpIGpAAIAAGpg");
	this.shape_3.setTransform(62.5,42.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkrUMIAAkxIEwAAIAAExgAAyNZIAAiqIAyAAICbAAIDNAAIAACqgAnBFvIAAj6IIlAAIAAD6gABai1IAAowIBGAAIAAgKIAKAAIAAI6gAizvzIkYAAIAAkYIFKAAIEhAAIAAEYg");
	this.shape_4.setTransform(56,39.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("AyHlqIFipmIetRuIAAMzg");
	this.shape_5.setTransform(-120.075,-45.5375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AqOYQIAAofIHDAAIAAjSIkEAAIAAkEIEEAAIAAEEIAAkEIkEAAIAAEEIi/AAIAAprIAAsyIAAuSICMAAIAAE4IAAEYIEYAAIAAEOIlJAAIAAFKIFJAAIAAgeIAAAeIlJAAIAAlKIFJAAIAAEsICqAAIAAksIBjAAIAAIwIBQAAIAAo6IgKAAIAAkEIAAkYIkgAAIAAk4INGAAIAAOuIhaAAIAAkOIkOAAIAAEOIAAkOIEOAAIAAEOIkOAAIAAFKIBkAAIBQAAIC0AAIAAI4Ii0AAIAAo4IAAI4IhQAAIAAo4IAAI4IAAFyIEEAAIAAN+gAnPYKICmAAIAAioIimAAgAgIYHIGnAAIAAmpIkDAAIikAAgAlhU/IExAAIAAkxIkxAAgAGfReIAAhGIkDAAIAABGIAAhGIEDAAgAgDONIGYAAIAAiqIjMAAIAAo6IicAAIolAAIAAD5IIlAAIAAFBIgwAAgAhACJIDaAAIAAjZIjaAAgAoCB+IFHAAIAAlGIlHAAgABvu7IGpAAIAAmpImpAAg");
	this.shape_6.setTransform(61.45,34.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("EAg6gUIIAQAAMAAAAxMI04AAIAA1VATzvRIEhAAIAAEYIAAEEIAKAAIAAI5IhQAAIAAovIhkAAIAAEsIipAAIAAksIAAkOIkZAAIAAkYATBh/IAAAeIlLAAIAAlKIFLAAAYUm1IAAAKIhGAAAVqmrIipAAATzvRIlLAAAYUq5IlTAAAbSlbIAAkOIEOAAIAAEOgAfglbIBaAAAYZxdIGpAAIAAGpImpAAgATz0IIAAE3AMSmUIAAt0ICWAAIAAE3Ac2gRIhkAAIAAlKAeGgRIhQAAAeGIoIhQAAIAAo5EAg6AOaIkEAAIAAlyEAg6gARIi0AAIAAI5IC0AAAVqC2IDbAAIAADbIjbAAgAOoA+IFIAAIAAFHIlIAAgAXYKqIomAAIAAj6IImAAgAPaQmIAAkEIEFAAIAAEEgAXYGwICbAAIAAI6IDNAAIAACqImaAAIAAiqIAyAAIAAlAAdKVmIAAGoImoAAIAAmoICkAAIAAhGIEEAAIAABGIkEAAAZzPqIibAAATfQmIAADSInDAAIAAjSIC+AAAPaZqICoAAIAACnIioAAgARJUWIEwAAIAAExIkwAAgAMSHDMgj0gUrIgKgGIopk+IFjpnQEMCbENCbIAIAFIAJAFIAJAFIeRRfIAAgNIAAgYMgnagWvImBKeMAtbAaUAMSHDIAAAsAMSlvIAAMlIAAAN");
	this.shape_7.setTransform(-84.85,6.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgTW2IAAmoICkAAIEEAAIAAGogAAjKSIAAlBIAAj6ICbAAIAAI7gAoMAtIAAlGIFHAAIAAFGgAAZsDIhjAAIiqAAIAAkOIFTAAIAAEEIAAAKgABkwMIAAmpIGpAAIAAGpg");
	this.shape_8.setTransform(61.3,40.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AnQYNIAAinICoAAIAACngAqOP0IAAjSIC+AAIEEAAIAADSgAGMKWIAAlyIBQAAICzAAIAAFygAg/CNIAAjaIDZAAIAADagAHckUIhQAAIhkAAIAAlLIEOAAIBZAAIAAFLgAjpmCIAAktICqAAIAAEtgAoBzVIAAk3IFJAAIAAE3g");
	this.shape_9.setTransform(60.25,32.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ATNbGIAAkxIExAAIAAExgAYrUSIAAipIAyAAICbAAIDNAAIAACpgAQ3MoIAAj6IImAAIAAD6gA/EwnIGBqdMAnaAWuIAAAZIAAANI+SxgIgJgFIgIgEIgJgGIoYk1IljJmIIoE/IALAGMAj0AUrIAAArgAZTEDIAAovIBGAAIAAgKIAKAAIAAI5gAVFo6IkYAAIAAkYIFKAAIEiAAIAAEYg");
	this.shape_10.setTransform(-98.1,-6.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#663300").s().p("Ax6lfIgJgFIFjpnIAAAAIAIAFIgIgFIAIAFIeSRfIAAgOIAKAGIAAMzIgKgFIAAsmIAAMmIAAANg");
	this.shape_11.setTransform(-120.825,-45.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("ABiHSIonk/IFiplIIYE1IAIAGIAJAEIAAABIgJgFIAJAFIliJlgAHGiSg");
	this.shape_12.setTransform(-246.375,-127.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AqbYnIAA1WIAAgrIAAgNIAKAFIAAsyIgKgGIAAgYIAAt0ICXAAIAAE4IAAEYIEYAAIAAEOIlLAAIAAFKIFLAAIAAgeIAAAeIlLAAIAAlKIFLAAIAAEsICqAAIAAksIBjAAIAAIwIBQAAIAAo6IgKAAIAAkEIAAkYIkiAAIAAk4INHAAIAPAAMAAAAxNgAnTXzICoAAIAAinIioAAgAgLXxIGnAAIAAmpIkEAAIAAhGIEEAAIAABGIAAhGIkEAAIAABGIijAAgAlkUpIEwAAIAAkxIkwAAgAqRPaIHCAAIAAjSIkEAAIAAkEIEEAAIAAEEIAAkEIkEAAIAAEEIi+AAgAgHN2IGZAAIAAiqIjNAAIAAo6IibAAIokAAIAAD6IIkAAIAAFAIgxAAgAGJJ8IEDAAIAAlyIizAAIhQAAgAHZEKIAAo4ICzAAIAAlKIhZAAIAAkOIkOAAIAAEOIAAFKIBkAAIAAI4IAAo4IBQAAgAhCBzIDZAAIAAjZIjZAAgAoEBoIFGAAIAAlGIlGAAgABrvRIGpAAIAAmpImpAAgAIzp4IkOAAIAAkOIEOAAIAAEOg");
	this.shape_13.setTransform(60.55,35.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AUC0UIEiAAIAAEYIAAEEIAKAAIAAI6IhQAAIAAowIhkAAIAAEsIiqAAIAAksIAAkOIkYAAIAAkYATQnCIAAAeIlKAAIAAlKIFKAAAYkr4IAAAKIhGAAAV6ruIiqAAAUC0UIlKAAAYkv8IlUAAAbiqeIAAkOIEOAAIAAEOgAfwqeIBaAAIAAFKIi0AAIAAI4IhQAAIAAo4IhkAAIAAlKEAhKgZMIAAOuAYp2gIGpAAIAAGpImpAAgAUC5MIAAE4AMSrYIAAt0ICmAAIAAE4AeWlUIhQAAEAhKgFUIAAI4IAAFyIkEAAIAAlyAeWDkIC0AAAV6iMIDaAAIAADZIjaAAgAO4kEIFHAAIAAFGIlHAAgAXoFmIomAAIAAj6IImAAgAPqLiIAAkEIEEAAIAAEEgAXoBsICbAAIAAI6IDNAAIAACqImaAAIAAiqIAyAAIAAlAAdaQiIAAGpImoAAIAAmpICkAAIAAhGIEEAAIAABGIkEAAAaDKmIibAAATuLiIAADSInDAAIAAjSIC/AAAPqUmICnAAIAACnIinAAgARYPSIExAAIAAExIkxAAgEAhKAXUIAAAtI04AAIAA1WAMSqyIAAgmIgLgGMgtQAaNIGCKeMAnOgWoAMHq5IALAHIAAMyIAAArAMSCAIgLgHAMHCkIALAHAMHqzMgjpAUkIgKAGIopE/IFjJnQEMibENibIAIgFIAJgFIAJgFIeGxZ");
	this.shape_14.setTransform(-86,41.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgSW2IAAmoICjAAIEEAAIAAGogAAjKRIAAk/IAAj6ICbAAIAAI5gAoMAtIAAlGIFHAAIAAFGgAAZsDIhjAAIiqAAIAAkOIFTAAIAAEEIAAAKgABkwMIAAmpIGpAAIAAGpg");
	this.shape_15.setTransform(61.7,43.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CCCCCC").s().p("AnPYNIAAinICmAAIAACngAqOP0IAAjSIC/AAIEEAAIAADSgAGLKWIAAlyIBQAAIC0AAIAAFygAhACNIAAjZIDaAAIAADZgAHbkUIhQAAIhkAAIAAlKIEOAAIBaAAIAAFKgAjqmDIAAksICqAAIAAEsgAoCzUIAAk4IFLAAIAAE4g");
	this.shape_16.setTransform(60.65,35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("A/MMTMAtQgaNIALAGIAAAmIgLgHIAAAGMgjpAUkIgKAGIopE/IFjJnIIZk2IAIgFIAJgFIAJgFIeGxYIAAgGIALAHIAAAqIgLgGIAAAAMgnPAWogATVRnIAAkxIExAAIAAExgAYzK0IAAiqIAyAAICbAAIDNAAIAACqgAQ/DKIAAj5IImAAIAAD5gAZblaIAAowIBGAAIAAgKIAKAAIAAI6gAVNyYIkYAAIAAkYIFKAAIEiAAIAAEYg");
	this.shape_17.setTransform(-98.475,56.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#663300").s().p("AsoPPIlipmIAJgGMAjogUkIAAgGIALAHIAAMzIgLgHIAAAGI+GRYIgJAFIAJgFIgJAFgASCibIAAszIAJAGIAAMzg");
	this.shape_18.setTransform(-121.2,68.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AnFiSIInlAIACAAIFiJlIgIAGIgJAEIoYE2gAG+CZIAIgGIAAAAIgIAGgAHGCTg");
	this.shape_19.setTransform(-247.525,151.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AqbYnIAA1WIAAgrIAAsyIAAgmIAAt0ICmAAIAAE4IAAEYIEYAAIAAEOIlKAAIAAFKIFKAAIAAgeIAAAeIlKAAIAAlKIFKAAIAAEsICqAAIAAksIBjAAIAAIwIBQAAIAAo6IgKAAIAAkEIAAkYIkhAAIAAk4INHAAIAAOuIhaAAIAAkOIkOAAIAAEOIAAkOIEOAAIAAEOIkOAAIAAFKIBkAAIAAI4IAAFyIEEAAIAAN+IAAAtgAnDXzICnAAIAAinIinAAgAAEXxIGoAAIAAmpIkEAAIAAhGIEEAAIAABGIAAhGIkEAAIAABGIikAAgAlVUpIExAAIAAkxIkxAAgAqCPaIHDAAIAAjSIkEAAIAAkEIEEAAIAAEEIAAkEIkEAAIAAEEIi/AAgAAIN2IGaAAIAAiqIjNAAIAAo6IibAAIolAAIAAD6IIlAAIAAFAIgyAAgAqLCZIAJAFIAAsyIgJgGgAgzBzIDZAAIAAjZIjZAAgAn1BoIFHAAIAAlGIlHAAgAB7vRIGpAAIAAmpImpAAgAHoEKIAAo4IC0AAIAAI4gAHoEKIhQAAIAAo4IBQAAIAAI4g");
	this.shape_20.setTransform(59.4,37.575);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("Ai4zVIEhAAIAAEYIAAEEIAKAAIAAI7IhQAAIAAoxIhjAAIAAEtIiqAAIAAktIAAkOIkYAAIAAkYIAAk3AjqmCIAAAeIlKAAIAAlLIFKAAABpq5IAAAKIhGAAAhAqvIiqAAAi4zVIlKAAABpu9IlTAAAEopfIAAkOIEOAAIAAEOgAI2pfIBZAAABu1hIGqAAIAAGpImqAAgAi44MIAAE3AjMMiIAADSInCAAIAAjSIC+AAIAAkEIEEAAIAAEEIkEAAAGMkUIhkAAIAAlLAHckUIhQAAAHcEkIhQAAIAAo4AKPkUIizAAIAAI4ICzAAAhAhMIDaAAIAADZIjaAAgAAtGmIolAAIAAj6IIlAAgAAtCsICbAAIAAI6IDOAAIAACqImaAAIAAiqIAxAAIAAlAAoCjEIFHAAIAAFGIlHAAgADILmIibAAAnQVmICnAAIAACnIinAAgAGgRiIAAGpImoAAIAAmpICjAAIAAhGIEFAAIAABGIkFAAAliQSIExAAIAAExIkxAAgAKPKWIkDAAIAAly");
	this.shape_21.setTransform(59.75,37.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgSW2IAAmoICjAAIEEAAIAAGogAAjKRIAAk/IAAj7ICbAAIAAI6gAoMAtIAAlGIFHAAIAAFGgAAZsDIhjAAIiqAAIAAkOIFTAAIAAEEIAAAKgABkwMIAAmpIGpAAIAAGpg");
	this.shape_22.setTransform(60.8,46.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AnFCTIFiplIIpFAIliJlg");
	this.shape_23.setTransform(-247.775,-124.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AqOYRIAAohIHDAAIAAjRIAAkFIkEAAIAAEFIi/AAIAAprIAAsyIAAuRICMAAIAAE3IAAEYIEYAAIAAEOIlJAAIAAFKIFJAAIAAgeIAAAeIlJAAIAAlKIFJAAIAAEsICqAAIAAksIBjAAIAAIwIBQAAIAAo6IgKAAIAAkEIAAkYIkgAAIAAk3INGAAIAAOtIhaAAIAAkOIkOAAIAAEOIAAkOIEOAAIAAEOIkOAAIAAFKIBkAAIAAI4IAAFyIEEAAIAAN/gAnPYJICmAAIAAinIimAAgAgIYHIGoAAIAAmoIkEAAIAAhGIEEAAIAABGIAAhGIkEAAIAABGIikAAgAliVAIEyAAIAAkxIkyAAgAgDOMIGYAAIAAiqIjMAAIAAo6IicAAIolAAIAAD7IIlAAIAAE/IgwAAgAhACKIDaAAIAAjaIjaAAgAoCB+IFIAAIAAlGIlIAAgABvu7IGpAAIAAmpImpAAgAnPMfIAAkFIEEAAIAAEFgAHbEgIAAo4IC0AAIAAI4gAHbEgIhQAAIAAo4IBQAAIAAI4g");
	this.shape_24.setTransform(59.75,38.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5,p:{x:-120.075,y:-45.5375}},{t:this.shape_4,p:{x:56,y:39.275}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:60.65,y:35}},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_5,p:{x:-121.775,y:-41.625}},{t:this.shape_4,p:{x:54.3,y:43.175}},{t:this.shape_16,p:{x:59.75,y:37.7}},{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299.1,-180.5,427.40000000000003,384.2);


(lib.knob = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// knob
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AH5/NIAAgJIAFAAAH054IgFgFIAAAFIAFAAIAFAAIAAgvIAAj1Ak+6qQAHgPBqgEQAcgBB2AAQDGAAAsAGQAcAEEmBBIgFgFAH5/WIgKFZAH5/WQgegijZgQQiNgKiGAAQg9AAhbAJQgzAGhTAKIgFAAQAAACACAGQACAEAAADIABgKIAFAAIAAAPIAFAAAH56nQGiB5FMFLQIKIJAALhQAALioKIJQoKIKrhAAQrhAAoKoKQoJoJAAriQAArhIJoJQGXmXIahZIAAApAH/+qQINCBGaGaQGiGiB/IcQA2DpAAD+QAANPpXJXQpXJXtPAAQkMAAj1g9QoMiCmYmYQpXpXAAtPQAAtOJXpXQHonoKMhaQAEgBADAAAkw/qQABADAAACIAFAAIAAATIAAAkQgCAJgFA/QgDAfgEAXQgDAQgDANIAABAQABAAABgBQACAAACAAAkw/qIgBAZIgHChIgEBcIgCAq");
	this.shape.setTransform(7.5,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ABXCKQgsgFjGAAQh1AAgdABQhqAEgHAPIACgqIAEgBIgEABIAEhdIgEBdIgCAAIACAAIgCAqIAAgqIAAhAIAGgdQAEgWADgfIAHhIIAAgkIAAgSIAFAAIgFAAIAAgQIgFAAIAAAKIgCgGIgDgIIAFAAICGgQQBcgJA9AAQCFAACNAKQDZAQAeAiIgKFYIAKlYIAAAJQAFAGgCAHIgCAIIACADQADAFAAAFIgBAFQgBAGgEADIAAD0IAAAvIgFAAIgFgEIAAAEIAFAAIAFAFQkmhAgcgFgAGUDKgAGPDKIAAgEIAFAEgAmPihIAAgGIAAgKIAFAAIAAAQg");
	this.shape_1.setTransform(17.075,-174.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AoBe2QoMiCmYmYQpXpXAAtOQAAtPJXpXQHonoKNhaIgIChIgGAdIAABAQoaBZmXGXQoJIKAALhQAALhIJIJQIKIKLhAAQLhAAIJoKQILoJgBrhQABrhoLoKQlLlLmih5IAAj1QAEgDABgHIABgEQINCBGaGaQGiGiB/IcQA2DpAAD/QAANOpXJXQpXJXtPAAQkMAAj1g9gAk49QIAIihIAGgBIAAAkIgHBIQgDAfgEAXgAkw/xg");
	this.shape_2.setTransform(7.5,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.knob, new cjs.Rectangle(-198,-196.4,411,415.4), null);


(lib.eyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AmwIzQg2gRghgXQgxgjgdg/QgZg2gIhGQgHhBAHhRQAEgvANhjIARhzQAKhIAGgeQALg5APgrQAlhvBKg7QAjgcAkgJQAlgIAoALQAmAMAfAaQA1AtAhBUQAiBSAHBcQADBFADAiIAKBOQAUCTgZB0QgeCOhWBdQgpAsgpAPQgaAKghAAQgnAAgwgOgAm2mtQguAtgcBKQgVA3gPBUQgPBXgTCwQgMBqABA8QACBLAWA5QAaBEAzAiQAYAQAlAMQA4ATAsgGQA8gJAwg0QAlgpAbhEQAwh6gCiQQgBgrgIgZIgJgZQgGgOgCgLQgCgMABgRIAEgdQAKhQgShRQgShQgshEQgagngegXQglgcgmAAQg0AAgxAxgAGXHRQgrgGgmgpQgXgagTglQgOgZgSgtQgZg9gMgmQgOgsgKg5QgGgigKhEQgIgzAGgcIAIghQAFgSACglIAIiPQACgzADgWQAFgoALgeQANgkAZgbQAagdAhgJQAugNA6AVQA1ATAiAiQAZAYATAlQAOAdAPArQA6C0gCDaQgBBngPBPQgTBggsBIQgeAwgfAWQgjAZgkAAIgQgBgAEvoOQgyAcgOBYQgHApgEBVIgGB1QgDBOAFAnQADASgBAJQgBAOgJAHQALBbALAtQANA0AoBiQAUAyAQAbQAZAoAhASQAYANAWgCQAcgEAagdQAUgWAcg1QAlhGALgsQAFgVAFgqQAZjpg4jlQgMgugMgeQgQgpgXgdQgggngugVQgdgOgdgBIgIAAQgcAAgWAMg");
	this.shape.setTransform(-14.3796,-9.929);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmxILQgmgNgXgPQg0gigahEQgWg6gBhKQgBg8ALhqQATixAPhWQAPhUAVg3QAchKAvguQAwgwA1AAQAmAAAkAcQAfAXAZAnQAsBDATBRQASBQgLBQIgDAeQgCARACAMQACAKAGAOIAKAZQAIAaABArQABCPgwB7QgaBDglApQgwA1g8AIQgLACgMAAQgjAAgqgOgAF+GlQghgSgYgoQgRgagUgzQgohigNgzQgLgtgLhcQAJgHACgOQAAgJgCgRQgGgnADhPIAGh1QAEhUAHgqQAPhYAygcQAYgOAhACQAdACAeANQAuAVAfAoQAXAcAQApQANAfALAuQA4DkgZDqQgFAqgFAUQgLAsgkBGQgcA1gVAXQgZAdgdADIgFABQgTAAgWgMg");
	this.shape_1.setTransform(-14.1432,-10.1797);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ApTDiQgBg8ALhqQATixAPhWIAEgRQATACAagDQAqgJAVgCIAzgCIBRgCIA3gCQAWAAASgCIAlgGQAUgDAOAAIABAHIAAAEQAKA/gJA/IgDAeQgCARACAMQACAKAGAPIAKAZQAIAZABArQABBigWBZQgMAAgQAFIgeAIQggAKgyADIhUAFQgaADhSAQQhCANgqAAIgJAAQgJgpgBgwgAJCCHIi7gKIg6gDQg1gCgXgGQgFgCgDABIgHAFIgBACIgGgSQgLgtgLhbQAJgIACgOQAAgJgCgRQgGgnADhPIAFhZQAZgCATgEIAfgHQAKgCAVAAIBEAAQAoAAAcgDIAngFQAXgCAQAAIAVAAQAvDTgYDYIgDAXIgHgBg");
	this.shape_2.setTransform(-14.1436,-6.6625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ao5FbQgQgGgeAGQgKgjgFgpQgHhAAHhSQAEgvANhiIARh0QAKhEAGgeIgBgCQgEgGACgGIAAgBIAKgGIABgBIAHACQAPACANgFIgBAFQANABAUgFQA0gLBGgEIB6gDIArgDQAfgEAQgBQANgCALABIAAgCQARACATABIADAOQAGAHgDAIQAEAaACAaQADBFADAiIAKBPQAUCTgZB0QgGAagHAYIgRADIgfAJIADgIIg7AMQgeAGgPACIgxACQgsABhLALQhXANghADIgPAAIgQgBgAokjIQgPBWgTCxQgMBqABA8QABAwAKApIAJAAQApAABDgNQBSgQAZgDIBUgGQAygCAggKIAegIQAQgFAMAAQAWhZgBhiQgBgrgIgZIgJgZQgGgPgCgKQgCgMABgRIAEgeQAIg/gJg/IgBgEIgBgHQgOAAgTADIgmAGQgRACgWAAIg4ACIhQABIg0ADQgVACgqAJQgZADgUgCIgDARgAJFCyIAAgBIgXgBIjggRQg4gEgbgGIAAAAIACAFIgFgBQgQgDgHAAQgHAAgEACQgNgrgKg2QgGghgKhFQgIgzAGgcIAIggQAFgSACgmIAFhdQAWgGAVgHIAEgBIAHgCIAWgGQAegJAxAAIBRAAIA8gHQAagCAhAAIAMAAQAUAHALADIAHABQAmCXgCCxQgBBdgNBKIAAAAIAAADIgGADIgJAGIgQAGIgJAEIABgDgAEEB1QAWAGA1ACIA7ADIC6AKIAIABIADgXQAXjYgujTIgVAAQgRAAgWACIgnAFQgdADgnAAIhEAAQgVAAgKACIgfAHQgUAEgZACIgEBZQgDBPAFAnQADARgBAJQgBAOgJAIQALBbALAtIAFASIACgCIAGgFIADAAIAGABg");
	this.shape_3.setTransform(-14.3796,-6.9504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ApqBSQgCgDABgEQABgEADgDQAFgDAKgBICogTQDUgYBogIQAQgCAEAIQACAEgCAFQgBAEgFADQgGAEgMAAQhUAEieATQikAUhOAEIgEABQgHAAgDgFgAC5gnQgEgDABgEIAEgGQAOgMAXgDQAMgBAeAAQAjABAygFIBUgJQA8gFBlAAQAXAAADANQABALgLAEQgHAEgMAAIiZADQgZAAgUACQgeAFgQABQgPABgTgBIhRgBQgPAAgHADIgJADIgJACQgFAAgDgDg");
	this.shape_4.setTransform(-13.9077,-12.3417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},6).to({state:[{t:this.shape_4}]},2).to({state:[]},1).to({state:[{t:this.shape_4}]},7).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape},{t:this.shape_1}]},2).to({state:[{t:this.shape},{t:this.shape_1}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.8,-67.6,126.9,115.39999999999999);


(lib.drop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("EgOHBTOQniiClnkgQjOikjCjzQiYi9iykaQjmlsiPkyQiul1hLlbQg6kKgNk1QgKkGAWk/QBLwtF8v5QF7v5KEtZQB3ieD3k1QDbkYB+jJQHdr0CdwlQAMhJAYgtQAhg7A2gBQAkgBAjAeQAYAUAeArQEkGrE0LBQAaA6DjIYQCZFoBtDmQBtDlD0HMQDwHGBwDtQCAEPCNFdQBTDOCiGoQEIKxB7FaQDOJDCGHZQCoJVAWG3QAdI/jPGsQiiFOlJEiQkKDqmRDfQuwINtPA9QhvAIhtAAQl1AAleheg");
	this.shape.setTransform(-46.5838,-30.4665);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drop, new cjs.Rectangle(-363.6,-572.5,634.1,1084.1), null);


(lib.claws = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AJLoBIWsAAIw4I/ItPHFIG/vGgEAhmgIBIWrAAI4ZNAIluDEIBljagEghlgIBIQuI6INZHKImeuAIg9iEI2sAAI2rAAIZYNiIEvCiIhajCg");
	this.shape.setTransform(0.65,598.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AbvEoIF3sqIWrAAI4ZNBIluDEgAIvnDIAcg/IWsAAIw4JAItPHFgAw3A5Iwto7IWrAAIA9CFIGeOAgA+4FhI5YtjIWsAAIGCNDIBZDCg");
	this.shape_1.setTransform(0.65,598.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EgchAsLQijhBjRiaQjmizh4hRQilhvjuhxQgqgUl/irQkAhyiehaQjah7ibiNQi7iricj2Qh7jEiBkiIjZoBQiCkyhtjCQhfirkFl9QjvlchqjSQhCiChOjAQhWjdgrhtQiNlaiQjSQgtAWghAGQAWgjAggbIgVgbQADAhgVAdQgUAeggAIQAEgwAWgtQAWgsAjgiQAYAhAYAlQAvgdA/gQQBjgaCmABIUTAKQDfABB1AMQBQAJCFAYQCeAdA2AIQCQAVDIALIFaAOQEXAOEIAfQAfADAYAEIg2haIA9BbIAPADQALgfAcgGQAPAhAVAeQAUAKAPANQAeAYAXAqIAEAIQAfAYAjASQARAJAGAFQANAKAEALQAJAbgoAlQAVA8ANAjQAVAzAXAnIAmA6QAZAkALAWQASAgASAvIAWA7QDaFICuEDIAgAcIgQgFQCNDSBwCjQKhPTJHLvQDVESArA5QCPC+BiCZQBXCGApBkQA3CIgFB4QgFCOhZCVIg9iFI2rAAI2sAAIZYNjIgKABQhyAMhpAAQkcAAjXhVgA/u42Ih7i+QAwBTBLBrgEgnBgk/IgkhTIAAAAQgNgKgPgEIBABhgEgo/gn/IACgJIgPgKIANATgEA1VAtTQiCgGlCgYIgpgDIYYtCI2rAAIl3MrQhbgJg2gHQj8gii5hFQh/gwhqhDIQ4pBI2sAAIgdA+QghiEANiZQAPiUA4ieQCHlyF0mWQBth4DfjcQDmjjBnhwQHgoFE/qBQFAqBB7q3QAGgaAVgTQAXgTALAVIgNBFIBvjSQARggAPgLQAPgLAXgDQAPgDAZABQFbAFGCAQIP0AsQBKAEArgEQA4gGBRgaICHgsQBLgVBNgHQA3hsBLhLQgpBYglBdQAegBAfACQgNAegeAaQgSAOgjAVQhKDKg2DkQhME9gxGjQgYDLgvImQgpHcgnESQgqEsg9DaQgvCshSDPQgxB8hrD2QjfIAimEDQkCGTlIDDQlTDJn3AfQhjAGhxAAQhxAAiAgGgAz1fwIQuI7QhfA8hrAyQjhBokBAyg");
	this.shape_2.setTransform(-87.3,344.1895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.claws, new cjs.Rectangle(-746.1,53,1317.6,598.3), null);


(lib.waterdrop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.drop();
	this.instance.setTransform(-17.65,-332.6,0.189,0.189,0,0,0,-46.9,-30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-46.6,regY:-30.5,x:-17.55,y:-328.75},0).wait(1).to({x:-17.4,y:-317.1},0).wait(1).to({x:-17.2,y:-297.65},0).wait(1).to({x:-16.9,y:-270.5},0).wait(1).to({x:-16.5,y:-235.55},0).wait(1).to({x:-16.05,y:-192.75},0).wait(1).to({x:-15.5,y:-142.3},0).wait(1).to({x:-14.85,y:-84.05},0).wait(1).to({x:-14.15,y:-18},0).wait(1).to({x:-13.3,y:55.75},0).wait(1).to({x:-12.45,y:137.3},0).wait(1).to({x:-11.45,y:226.65},0).wait(1).to({x:-10.4,y:323.75},0).wait(1).to({x:-9.25,y:428.65},0).wait(1).to({x:-8.05,y:541.3},0).wait(1).to({x:-6.75,y:661.7},0).wait(1).to({x:-5.35,y:789.9},0).wait(1).to({x:-3.85,y:925.8},0).wait(1).to({x:-2.25,y:1069.55},0).wait(1).to({x:-0.6,y:1221.05},0).wait(1).to({x:1.15,y:1380.25},0).wait(1).to({x:2.95,y:1547.35},0).wait(1).to({x:4.9,y:1722.2},0).wait(1));

	// pooodle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AI3XnQwPg7tijZQvgj3sRnJQiohihwhUQiRhthhh1QhwiHg1iaQg7inAXifQAXijBsibQBdiGCXh4QGllRJxhdQIOhOKABhQDyAkFHBHII2B+QK6CZG7AXQCFAHIKgDQGUgCD5AjQGOA4FqCrQGMC7C5EJQC2EDgLFQQgLFSjGD3QiICpjeB8Qi0Bkj+BQQn+ChpoAuQkBAUklAAQkcAAk9gTg");
	this.shape.setTransform(-48.6062,1728.107);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(24));

	// puddle
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AgJASQATgKAAgZ");
	this.shape_1.setTransform(139,1465.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("EAOdDAGQiRgRjmgvQpdh9qojBQo4ihq7jnQirg5hYgmQiMg8hihLQhzhZhBh3QhIiBAJiEQACgTAYiIQAFgcADgZQAFg6gJgqQgXhkhlhGIgFgDQhVg5iBggQlBhOmxApQifAPjeAkIl8A/IhIALQmXA9kigOQmlgVktiuQiLhRhVhtQhjh9gBiIQAAh3BLhvQBFhnBxhEQBeg5CFgnQBRgYCighISfjuQFJhCCngvQEPhNDGhsQBXgwBzhOIDFiIQDxikCwg5QCig1DIgEQAzgCA8ADQByAECTAQQD6AgB+ALQCjAPCDgDQgFgMgBgLQgCgiAdglIA5g8QA2g7AOhNIAGgoQADgZAHgPQAUgwA+gYQArgRBKgGICjgPQB5gLA8gDQBLgDCVAAQBKAAAnAFQA+AHAtAWQA1AZAxA3QAgAjAvBIQAqA8ATAiQAgA2AQAvQAHAVAMAsQAMAmAOAYQASAdAfAcQATAQApAdIDfCeIA0AmIAVATQAkAKAkAIQDkAyFnAGIA9AAIDsACQCwACB5AIQC5AOFzAvQFIAfDggnQCkgdD5hjQA8gZBCgcQDNhZA7gXQCWg8B4gfQE1hQFVApQFBAnE0CNQIiD7HeIpQCOClBACNQBTC4goCfQgmCZiZB9QhqBXjIBjQpxEynNCNQoOChnSAFQhNAAhMgDQhUgElEgiQj8gbidAGQhDAChAAIQiSATh/AxQjOBQh4CYQhYBuhdEAQgwCGgaA6QguBpg2BJQhrCTi1BZQimBSjHAWQhLAIhSAAQhoAAh0gNgEAdlCIXQAUgKAAgZQAAAZgUAKgEAADB/8QgQgggXgSQATAaAUAYgEAEuiCOQg7gKgrgrQgjgkgcg7QgIgRgjhaQg5iUhRiGQn3lnpwjnQqij6r/hUQqzhMsRA4QplArrOCAQAJAPAGARQhCgFg9gGIgYAEQiEAZhXgLQhugPgxhGQg3gNgwgQQlQhwiWjvQg5hbgOhgQgQhrAthTQAOgZATgWQgmhFgLhQQgRh0Alh+QAhhwBHhwQBripCCgxQBfgkB+AVQBUAOCKAzQGvCdDEAwQFmBVEdgxQEdgxFfjbQBXg2DRiOQC7h/BthBQBjg7BMggQBjgqBZgJQC2gUDeBpQBOAlBxBDQB9BLA+AjQEgClFFBWIARAFQKVhREmggQFsgpFsgiQBYg2BUhBQDfitCdjmQAog8AYgYQApgqAugJQAbgEAiAHQAVAEAmANIVAHMIBFAYQEjgNEkgJQBbgDBLAAIAYgEQAdgDA6gBIDEgDQBAgsAwg0QAzg3A2hXQBbiSBDigQAxh0BAALQARADASANQALAJARASQDbDgD+C4QB4BYBaArQApAUBIAdIBzAvQB8A3BtBUQBtBTBWBpQALAOAIAOQAxAzAVA3QAUA0AABFQAAAugLBPQgYC3gcCcQgTBugTBOIAAACQgFA2gYAxQgcBUgkBEQhRCbiTB7QiHBxiwBKQiZBBjBAnQiXAfjRAUQkcAcokARQo1ARkMAYQnNAqlqBlQmwB5lFDWQh9BShKBTQheBqgVBzQgJBNgIAkQgOBAgjAeQghAcgsAAQgOAAgOgDgEADSiHoIALgHIgRgGIAGANg");
	this.shape_2.setTransform(-51.2871,594.7846);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-711.1,-635.9,1319.7,2517);


(lib.torchlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// light
	this.instance = new lib.shine();
	this.instance.setTransform(-9,-66.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EANFg97IBynxEANFg97QQPB5NMIrQEwDIEWEAQFwFSEGF8IIbkzEA9cghBQJQNaAsQrQAEBWAABXQAAKgjUJRQkzNbrvKzQijCWisCCIFYH1EA1wgcqIHskXEAKygz4ICTqDEA7PAOYII5FKIGvD6EApbAo9IE8HLQmwFJnoDPQs1FcvQACQgGAAgGAAQxeAAuTnFQopkSnem3Qi1inicixQopp0jhrxQiboEAAo+QAAjwAbjlIrRhzEgkqgySQKhnWMgi6QIQh8JHAAQEzAAEkAjEg1SgF7IqThpQBquJIKrqQEBlvFmlJQDnjVD5iuEgeegrIImMnKImAm6EAD6A9+IAAHvEAD6A1xIAAINEgxbAmYIpLGpEgmSAeVIrJID");
	this.shape.setTransform(-37,-53.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,153,0.42)").s().p("EAANA+OIAAoNIAAINIgNAAQxdAAuTnFQopkSnem3Qi2inicixILKoDIrKIDQopp0jgrxQiboEAAo/QAAjvAbjlQBpuIIKrrQEBlvFnlJQDnjUD4iuIGNHJImNnJQKhnWMhi7QIQh7JGAAQEzAAElAiQQPB6NLIqQEwDIEXEAQFwFTEFF7QJQNaAsQrQAEBWAABWQAAKhjUJRIo5lKII5FKQkyNcrvKyQikCWirCDIk9nMIE9HMQmxFInoDPQs0FcvQACgEg4/gFrIqThpgEAyCgcaIHskXgEAHFgzoICTqDg");
	this.shape_1.setTransform(-13.25,-55.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EBQHgBFQAEBmAABoQAAe03tVyQquJ3svFZQvbGjyYAAQ05AAxFoeIoSKjEBQHgBFIOxAAEAtlg6+QFrDvFOEyQWdUpBMcvEBD/gBFIMIAAEAhTgtyIMStMII+poEAbzA5lIFOMaIECJkEgVihF8QJ3iTK5AAQaLAAUMNREgQZg72IlJqGIk4pmEhFhglcQE0m3GrmKQQButUfkyEg66gb9IqnpfEhO3AWiQi4pqAAqvQAA2HMOxeIqBo+EgfGA6TInqJxQqWlHo8oOQvcuMlZyBIwAFJEhEmATOIqRDU");
	this.shape_2.setTransform(-9,-66.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,153,0.42)").s().p("Egl+BB7IHrpxInrJxQqVlHo8oOQvcuMlZyBIKQjTIqQDTQi4pqAAqvQAA2HMOxeIKmJfIqmpfQEzm3GsmKQQButUfkyIFIKGIlIqGQJ3iTK4AAQaLAAUMNSIsSNLIMStLQFsDuFNEyQWdUpBMcvQAFBngBBnQAAe03tVyQquJ3suFZIlOsaIFOMaQvcGjyYAAQ04AAxGoegEBQ5gDOIsIAAg");
	this.shape_3.setTransform(-14.05,-53.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_1},{t:this.shape}]},8).to({state:[{t:this.shape_3},{t:this.shape_2}]},8).wait(8));

	// torchfire
	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(-361.95,-364.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_11();
	this.instance_2.setTransform(167.3,-27.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(-342.95,-329,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_12();
	this.instance_4.setTransform(-361.95,-364.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},8).to({state:[{t:this.instance_4}]},8).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-617.1,-577.1,1253.2,1212.6);


(lib.Slime = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:9};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
		
		this.gotoAndPlay("walking");
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(1));

	// eyes
	this.instance = new lib.eyes();
	this.instance.setTransform(87,23.9,0.7965,0.8168,0,-21.7497,6.0319,-14.3,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:-14.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:87.1,y:-8},0).wait(1).to({x:85.1},0).wait(1).to({regX:-13.9,regY:-9.8,scaleX:0.5234,scaleY:0.7765,skewX:-66.8242,skewY:-33.0002,x:37.15,y:-121},0).wait(2).to({regX:-14.2,regY:-10,scaleX:0.7845,scaleY:0.9423,skewX:-9.5264,skewY:10.9871,x:119.05,y:-19.05},0).wait(1).to({skewX:-9.5264,skewY:10.9871},0).wait(1).to({regX:-14.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:87.1,y:-8},0).wait(2));

	// slime
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009966").s().p("AoLM1QlWgci/AHIh5AEQhEABgzgKQg/gMgxgeQg4ghgcgxQg0hbAmiZQAriuBviSQBxiRCdhVQAzgbBmgrQBqgrAwgZQCLhJBphwQAxgzgHgoQgGgrg+gbQg6gZhUgDQgegBh1AFQjPAHjGgiQgggFgTgIQgagMgKgWQgNgbASggQAQgdAfgRQAygeBLgHQAogEBeACQCxAABYABQCbADBsAVQBMAOCUAtQB+AmBAAbQBFAeBOAvQA0AgBXA7QCpByAsAdQB5BNBlAwQAYALB8A0QBbAmA3AeQBjA3CFBxQBvBeBFBMQBbBkAzBkQA/B6gmBPQgaA2hGAdQgxAUhWALIoHBDQj4Agh9AMQjQAUioAAQidAAl4geg");
	this.shape.setTransform(37.8259,34.6667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009966").s().p("AAWSjQlWg1k3ibQhkgyhCgxQhUg+gwhLQhChmgMiSQgJhxAWicQAWiaAmhtQAwiLBRhfQA3hBCThvQCNhrA5hKQAcgjgEgaQgEgdgjgOQgbgLgogBInngHQgpAAgXgGQgjgIgSgVQgaggAMgyQAKgpAhgpQBchzCThDQCLg+CdgGQCSgFCbAsQCMAoCMBNQB6BDCFBlQBgBJCLB4QCXCDBWBZQB7B/BMB8QBDBtAhBvQAkB7gIBzQgJCDhICeQhPCshwB8QguAzhCA5QgoAihSBAQg9AwghAXQg2AlgxATQhSAihqADIgWAAQhLAAhigOg");
	this.shape_1.setTransform(45.455,-3.3597);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009966").s().p("AsHNUQhOgZgyg2QgmgqgXhBQgTg0gJhHQgWibAViTQAUidBCiDQBEiLBzhlQBxhmCJgsIgJgGQgXACgmgCIg/gBQgZAAgQAJIgWARQgJAHgPAIIgZAOIgeAWIgfAVQgoAWgggJQgMgDgHgIQgJgJADgLQAEgLAYgKQAagMAbgXQASgOAdgeIBzh2QAVgWAQgLQAMgJALgFIAUgLIAKgIQAIgGAQgIQAHgDAMgKQAQgLAigIQAagHBCgPIA4gMQAhgIAagEIAdgFIAdgEIAKgHQAUgLAlgKQDIg3DLgcQBcgMBAAAQBUAABDAVQBoAgB4BoQA7A0AlAsQAvA5AXA5QAZBBgCBLQgCBFgXBGQgnB0hpB/QjHD4lMDIQjrCOmOCpQhaAmg1ASQhRAahFAGQgTABgSAAQg9AAg3gRgAoInYIACAAIAEACIgCgCIgBAAIgDAAg");
	this.shape_2.setTransform(42.7223,-49.1183);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009966").s().p("AENN6Qg6gRhEgeQgpgShQgoQjwh2h2hGQjChxiDh7QhQhLhriAQgogvgWghQgggtgSgqQgahAAChIQABhIAeg/QAnhWBjhSQAigcA6gqQgpgKgwgQQgigMhFgaQg1gUgagQQgpgZgSgiQgTglALgiQAPgvBRgfQCTg4C6gVQCRgQDIACQBTABAzAEQDyAVDSB7IABgBIAFAEIACACQAdARAJARQFiFAEBGZQAxBOAYA4QAiBNADBEQAEBJgeBTQgXBAgwBRQg4Bfg6BAQhGBPhQArQhfAzh3AGIgfABQhfAAhggdg");
	this.shape_3.setTransform(58.7919,5.4785);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009966").s().p("AnIRZQhxgThSgXQhogehRgqQhcgxhFhEIgRgSQglgYgdgeQhchbgZiOQgYiHAsiDQAoh5BbhuQBQhgB0hWQBahDDEhxQDDhxBbhEQCHhlgOhiQgCgOgFgNIgDgBQgMgCgIgJQgGgIgFgMIgJgVQgFgNgIgMQgUgTgggdQghgdgVgdQgTgOgOgJQgcgSgagHQgagHg1AAIhvAAIgegBQgTACgiAAQgeAAgRgFQgagJgIgVQgJgZAYgmQAvhKA3ggQAigTAlgEQAcgEAZAHIALAAICbgCQAXAAALACQAMACAXAHQAqALBMAIIAiADQAZADALAEQALAEATAMQAMAIALAJQATAGATAJQA1AZBBAuIBuBTQDCCQAQAOQBMBCAsBFQAPASANAVQAMATAVAuIAMAdQAdAlAZA2QAlBWATAqQA3B4B/ClQCpDfAhA0QAnA8AWAxQAbA9AFA5QAGBMgeBOQgbBIg3A+QhWBiipBRQkdCGlhAcQhZAGhbAAQjnAAj8grg");
	this.shape_4.setTransform(33.9988,-1.2126);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.5,-156.6,304.7,276.4);


(lib.exitdoor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3A37A").s().p("A0kAnIAAhNIclABIMkABMgpEABLg");
	this.shape.setTransform(-58.275,-198.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,153,0.298)").s().p("A3WT1MAAAgk0IAFhyMApEgBNIskgBIMOghQF6GWAAIDQAALBrGHzQrGH0vsAAQknAAkOgsg");
	this.shape_1.setTransform(-40.475,-74.2125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(24));

	// shin
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AgBAAIADAA");
	this.shape_2.setTransform(161.3125,-205.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,153,0.149)").s().p("A+7UBMACRgsgMA2xgBuQE1HrABJdQAAOnrkKWQrkKWwVAAQspAApymNg");
	this.shape_3.setTransform(-6,-37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(24));

	// knob
	this.instance = new lib.knob();
	this.instance.setTransform(-97.7,-43.25,0.1517,0.1517,0,0,0,25.7,-176.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("ACvAAQAABJgzAzQgzA0hJAAQhIAAgzg0Qg0gzAAhJQAAhIA0gzQAzgzBIAAQBJAAAzAzQAzAzAABIg");
	this.shape_4.setTransform(-99.6,-41.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbJVQgGgBgEgCIgDAAQgHADgGgDQgLgGACgaIANh2QABgOADgJQgJgHgHgKQgOgVgBgfQgBgUAGgLIAKgTIAKgSQALgOATgJQAVgKATgDQAOgCAMACQAKACAKAFQAQAJAMAPQAUAPAJAYQALAagFAaQgFAagTAVQgFAHgHAGIAUBqQAHAngQANQgJAIgbgBIgHgBIgEABQgLADgSAAIgdAAIgMAAIgNgBgAAgHHIAEAIQgCgIAAgDIgDAAIABADgAh7kqQg0gzAAhJQAAhIA0g0QAzgzBIAAQBJAAAzAzQAzA0AABIQAABJgzAzQgzA0hJAAQhIAAgzg0g");
	this.shape_5.setTransform(-99.6,1.02);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regY:-176.7,scaleY:0.1517,regX:25.7,rotation:0,y:-43.25,scaleX:0.1517,skewX:0,skewY:0,x:-97.7}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regY:-176.8,scaleY:0.0984,regX:25.7,rotation:0,y:-43.25,scaleX:0.1517,skewX:0,skewY:0,x:-97.7}}]},4).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regY:-176.8,scaleY:0.1479,regX:25.7,rotation:0,y:-43.25,scaleX:0.1517,skewX:0,skewY:0,x:-97.7}}]},4).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regY:-177.2,scaleY:0.0315,regX:25.8,rotation:0.4719,y:-43.35,scaleX:0.1517,skewX:0,skewY:0,x:-97.7}}]},4).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regY:-177.8,scaleY:0.1023,regX:25.4,rotation:0,y:-43.25,scaleX:0.1516,skewX:-179.8462,skewY:0.1672,x:-97.8}}]},4).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regY:-177.7,scaleY:0.1478,regX:25.9,rotation:0.1774,y:-43.3,scaleX:0.1516,skewX:0,skewY:0,x:-97.7}}]},4).wait(4));

	// door
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ASF55QAAAvgFCXQgFCXAAAGQAABvAEDLALX55IAKAAQAJDxAeGsAGr5bQAAAFAAAFQAAD6ACF7Agg5lQAAAFAAAFQAIC/AWHAAAJreQAHCTAJCnQAWG0AAGCQAAEHgdE7AGvreQACEgAEFdQAAIvgvIGASFreQACBfADBtQAPIsAAG0QAAFIgBC+AMbreQABAOABAPQAoIKAAEnQAACrgPE/QgLDmgDCUAY06DIA9AAIBfAAIDeAAIAAAeQgDBTADBpIAADlIAABFAYz6NQAAAEABAGQAHBNABFpQABArAADGAeuvcIAABnAeuxIIAABlAeusHIAABsAeuqUIAABqAY9reQAAAeAAAgQAAKBggOhQgCApgBApAeutuIAABgAeuI+IAADXIAAAbAeuPbIAABlIAAAHAeuNvIAABlAeuTNIAAAsIAABFAeuVFIAABTAX5c7QgBAKAAALQgBAKAAAKAeuc7QBgAABgAAMAAAg6eMhDbAAAMAAAA6WIAqAAICZAAIEZABQgBADAAAEIAAABIgKgBIAKAAIH3AAIEVgCICYgBIAAAAQAyAAAyABIAAAAQBAAABAAAQAFAAAFAAQAAABAAACIAAAKAeuWfIAAGcAYRTRQgLEvgNE7QDaAADbAAAeuRHIAAB/AgGTRQgkFhAAC/IAAA2QAAgKAKgJAFuTRQgbD9gqFkAMnTRQAAA5gBALQgDB0gQBfQgIAvgJCBQgNB0geAmASUTRQgOF6gzDRAeuojIAAQpAmw5lIgUAAIAACMQAUEbAQDiAtA5lQAMFzAKEWA1S5vIAUAAQACAiAyJxA7i55QgKAUAABGQAAAuAdDiQA1GNANBsQBfMNAAHrQAADcgSEWAz2reQAwJYAACrQAAEbgxKUAshreQADBZADBMQADBbAAIwQAAGPgrHzAmOreQAkH7AABpQAAEQhIMuQAAAIgBAIA5STRQgCAagCAaQgbE6ggD1IFTAAIEjABICVABQAAACAAABA0LTRQgWEWgdFNAtbTRQgcEtgBAKQgPCyAABuQABAHAAAHICYACAnKTRQgZEjgcE+QgBADAAAEQP8ABP9ABEghJAc7IGtAAA+qczMAAAg22MA3eAAA");
	this.shape_6.setTransform(26.325,-13.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AblVKQgRgCgQgMQghgYgRg0ICDAAIAAAbQAAATgCALQgEAQgKAJQgKAJgPAAIgHgBgAaQTpQgFgQgDgSQgJgvgDg8IgBg6Ij/AAIl9AAIltAAIm6AAIlzAAInEAAImRAAImwAAIlHAAIg0AAIAAj9IBGAAIFJAAIG0AAIGQAAIHGAAIFzAAIGiAAIFvAAIGDAAID+AAQAFhAAFgsQAEgjANgPQANgPAhgLQApgNATAMQAMAHAFAOQADAIAAAKQABAJgCANIgCAQIiLAAIAAAHICKAAQgGAjABA/IAAADIiFAAIAAAHICFAAIABBlIiGAAIAAAHICGAAIAAB+IAAABIiGAAIAAAHICGAAIAAAsIABBFIiHAAIAAAHICHAAIAABTgAThNyQgWAWAAAgQAAAfAWAXQAXAWAfAAQAgAAAWgWQAXgXAAgfQAAgggXgWQgWgXggAAQgfAAgXAXgAITNyQgWAWAAAgQAAAfAWAXQAXAWAfAAQAgAAAWgWQAXgXAAgfQAAgggXgWQgWgXggAAQgfAAgXAXgAh0NyQgXAWAAAgQAAAfAXAXQAWAWAgAAQAfAAAXgWQAVgXAAgfQAAgggVgWQgXgXgfAAQggAAgWAXgArKNyQgXAWAAAgQAAAfAXAXQAWAWAgAAQAfAAAXgWQAWgXAAgfQAAgggWgWQgXgXgfAAQggAAgWAXgAzVNyQgWAWAAAgQAAAfAWAXQAXAWAfAAQAgAAAWgWQAXgXAAgfQAAgggXgWQgWgXggAAQgfAAgXAXgA7LNyQgXAWAAAgQAAAfAXAXQAWAWAgAAQAfAAAXgWQAWgXAAgfQAAgggWgWQgXgXgfAAQggAAgWAXgAblplQgRgDgQgLQgsghgQhVQgJgugDg8IgCg6IjSAAIm5AAIlpAAIlsAAImlAAImYAAImTAAInVAAImQAAIAAj+IF8AAIHgAAIGKAAIGeAAIGvAAIFbAAIF3AAIG+AAIDbAAQAEhAAGgsQAEgiANgQQANgOAhgLQApgOATAMQAMAIAFAOQACAHABAKQABAKgCANIgCAPIAAgHIiLAAIAAAHICLAAIgBAHQgGAiABA8IiFAAIAAAHICFAAIABBnIiGAAIAAAHICGAAIAABgIiGAAIAAAHICGAAIABBsIiHAAIAAAHICHAAIAABqIiHAAIAAAHICHAAIAAAtQAAATgCALQgEARgKAIQgKAJgPAAIgHAAgAThxAQgWAXAAAfQAAAgAWAWQAXAXAfAAQAgAAAWgXQAXgWAAggQAAgfgXgXQgWgWggAAQgfAAgXAWgAITxAQgWAXAAAfQAAAgAWAWQAXAXAfAAQAgAAAWgXQAXgWAAggQAAgfgXgXQgWgWggAAQgfAAgXAWgAh0xAQgXAXAAAfQAAAgAXAWQAWAXAgAAQAfAAAXgXQAVgWAAggQAAgfgVgXQgXgWgfAAQggAAgWAWgArKxAQgXAXAAAfQAAAgAXAWQAWAXAgAAQAfAAAXgXQAWgWAAggQAAgfgWgXQgXgWgfAAQggAAgWAWgAzVxAQgWAXAAAfQAAAgAWAWQAXAXAfAAQAgAAAWgXQAXgWAAggQAAgfgXgXQgWgWggAAQgfAAgXAWgA7LxAQgXAXAAAfQAAAgAXAWQAWAXAgAAQAfAAAXgXQAWgWAAggQAAgfgWgXQgXgWgfAAQggAAgWAWgAcZz3g");
	this.shape_7.setTransform(41.2313,4.3408);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66412F").s().p("A5JbnIABgIQAgj0Abk7IAEgzIFHAAIGxAAIGRAAIHCAAIF1AAIG5AAIFtAAIF9AAID/AAIABA6QADA8AJAuQADASAFAQIgBAAIAAAHIADAAQASA0AhAZQAPALARADQAUACAMgLQALgIADgRQACgLABgTIgBgbIAEAAIAAGdIm1gBQANk7ALkuQgLEugNE7I/5gCIABgHIA2pgIg2JgIgBAHIgKAAIh/AAIgBAAIhjAAIAAgOIgBAAIAAAOIiYgCIAAgPIAAgMQAAhsAOinIAek3IgeE3QgOCnAABsIAAAMIAAAPIiVgCIkjAAQAdlNAWkWQgWEWgdFNIEjAAIiAAHgAz1bgIlTgBgANvTBQgDB0gQBeQgIAvgJCCQgNBzgeAmQAegmANhzQAJiCAIgvQAQheADh0IABhEIgBBEgAFybdQAqljAbj9QgbD9gqFjgAAeacIAAA3QAAgKAKgKQgKAKAAAKIAAg3QAAi/AklgQgkFgAAC/gASdbHQAzjQANl6QgNF6gzDQgA5TbnImtAAIAHgJICYABIEZAAIgBAIgAz1bggA9hbfMAAAg23MA3eAAAQAHBNABFqIABDxIgBjxQgBlqgHhNIA+AAIBfAAIDdAAIAAAeQgDBUADBoIAADmIAABEQgFgOgMgHQgSgMgpANQgiALgMAPQgNAPgEAjQgGAsgFBAIjbAAIm+AAIl3AAIlbAAQgCl8AAj6IAAgKIAAAKQAAD6ACF8ImwAAQgWnBgIi/IAAgKIAAAKQAIC/AWHBImdAAIgkn+IAAiMIAUAAIgUAAIAACMIAkH+ImKAAIgWqKIAWKKIngAAIg0qUIgUAAIAUAAIA0KUIl8AAIAAD9IGRAAIHUAAIGTAAIGYAAIGlAAIFsAAIFqAAIG4AAIDTAAIABA6QADA8AJAvQAQBUAtAhQAPAMARACQAUADAMgLQALgJADgQQACgLABgTIgBguIAEAAIAAQqQADAIABAJQAAAKgCANIgCAPIAADYIAJAAIgJExIAAgHIAAhlIAAgHIgFAAIAAgDQgCg+AGgkIABAAIAAgHIACgPQACgNAAgKQgBgJgDgIIAAgbIAAAbQgFgOgMgIQgSgMgpAOQgiALgMAOQgNAQgEAiQgGAsgFBAIj+AAIADhRQAguiAAqBIAAg+IAAA+QAAKBggOiIgDBRImCAAQABi+AAlIQAAmzgPosIgFjNIAFDNQAPIsAAGzQAAFIgBC+IlwAAQADiTALjmQAPlAAAirQAAkmgooLIgCgdIACAdQAoILAAEmQAACrgPFAQgLDmgDCTImiAAQAvoFAAowIgGp9IAGJ9QAAIwgvIFIlzAAQAck7AAkHQAAmBgWm0IgPk7IAPE7QAWG0AAGBQAAEHgcE7InGAAIABgPQBIsuAAkRQAAhpgkn7QAkH7AABpQAAERhIMuIgBAPImQAAQArnyAAmPIAAgGQAAorgDhbIgGilIAGClQADBbAAIrIAAAGQAAGPgrHyIm0AAQAxqTAAkbQAAisgvpYQAvJYAACsQAAEbgxKTIlIAAQARkVAAjdQAAnqhfsNQgNhsg1mNQgdjjAAguQAAhGAKgUQgKAUAABGQAAAuAdDjQA1GNANBsQBfMNAAHqQAADdgREVIhHAAIAAD+IA0AAIgEAzQgbE7ggD0gAf3N/IAAhlgATE1rQAABwAEDLQgEjLAAhwIAFidQAFiXAAgvQAAAvgFCXIgFCdIAAAAgAMq7OQAJDyAeGsQgemsgJjyIgKAAgAfzVDIAAhTIAEAAIAABTgAfzTpIAAhFIAEAAIAABFgA4JR9gAfyPyIAFAAIgEB/gAfyPrIAAhlIAFAAIAABlgAf3OGgAfzp/IAAhpIAEAAIAABpgAfzrvIAAhtIAEAAIAABtgAfztjIgBhfIAFAAIAABfgAfyvJIAAhnIAFAAIAABngAfyw3QgBg8AFgiIABgHIAABlgAf30YIAAjmQACBoAIB+gAa77YIAAgOIBfAOg");
	this.shape_8.setTransform(19,-4.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AeudPIAAmcIgEAAIiDAAIgEAAIAAgHIACAAICFAAIAEAAIAAhTIgEAAIiHAAIAAgHICHAAIAEAAIAAhFIAAgsIgFAAIiGAAIAAgHICGAAIAFAAIAAh/IgFAAIiGAAIAAgHICGAAIAFAAIAAAHIAJkxIgJAAIAAjYIACgPQACgNgBgKQAAgKgDgIIAAwpIgEAAIiHAAIAAgHICHAAIAEAAIAAhqIgEAAIiHAAIAAgGICHAAIAEAAIAAhtIgFAAIiGAAIAAgHICGAAIAFAAIAAhgIgFAAIiGAAIAAgHICGAAIAFAAIAAhnIgGAAIiFAAIAAgHICFAAIAGAAIAAhlIACgPQACgNgBgJQAAgKgDgIIAAhFIAKAAQgIh9gChoQgDhoADhUIAAgeIjeAAIhfgOIAAAOIg9AAIgBgKIABAKMg3eAAAMAAAA22IiZAAIgqAAMAAAg6VMBDbAAAMAAAA6eIjAgBgAV2ShQgWgXAAgfQAAggAWgWQAXgXAfABQAggBAWAXQAXAWAAAgQAAAfgXAXQgWAWggABQgfgBgXgWgAKoShQgWgXAAgfQAAggAWgWQAXgXAfABQAggBAWAXQAXAWAAAgQAAAfgXAXQgWAWggABQgfgBgXgWgAAgShQgXgXAAgfQAAggAXgWQAWgXAgABQAfgBAXAXQAWAWAAAgQAAAfgWAXQgXAWgfABQgggBgWgWgAo1ShQgXgXAAgfQAAggAXgWQAWgXAgABQAfgBAXAXQAWAWAAAgQAAAfgWAXQgXAWgfABQgggBgWgWgAxAShQgWgXAAgfQAAggAWgWQAXgXAfABQAggBAWAXQAXAWAAAgQAAAfgXAXQgWAWggABQgfgBgXgWgA42ShQgXgXAAgfQAAggAXgWQAWgXAgABQAfgBAXAXQAWAWAAAgQAAAfgWAXQgXAWgfABQgggBgWgWgAeoPvIiFAAIAAgHICFAAIAGAAIAAAHgAetODIiKAAIAAgHICLAAIAAAHgAV2sRQgWgWAAggQAAgfAWgXQAXgWAfAAQAgAAAWAWQAXAXAAAfQAAAggXAWQgWAXggAAQgfAAgXgXgAKosRQgWgWAAggQAAgfAWgXQAXgWAfAAQAgAAAWAWQAXAXAAAfQAAAggXAWQgWAXggAAQgfAAgXgXgAAgsRQgXgWAAggQAAgfAXgXQAWgWAgAAQAfAAAXAWQAWAXAAAfQAAAggWAWQgXAXgfAAQggAAgWgXgAo1sRQgXgWAAggQAAgfAXgXQAWgWAgAAQAfAAAXAWQAWAXAAAfQAAAggWAWQgXAXgfAAQggAAgWgXgAxAsRQgWgWAAggQAAgfAWgXQAXgWAfAAQAgAAAWAWQAXAXAAAfQAAAggXAWQgWAXggAAQgfAAgXgXgA42sRQgXgWAAggQAAgfAXgXQAWgWAgAAQAfAAAXAWQAWAXAAAfQAAAggWAWQgXAXgfAAQggAAgWgXgAcjw0IAAgHICLAAIAAAHg");
	this.shape_9.setTransform(26.325,-15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204,-206.6,447.1,383.6);


(lib.cage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// claws
	this.instance = new lib.claws();
	this.instance.setTransform(-168.45,616.4,1,1,0,0,0,-87.3,351.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:676.4},0).wait(1).to({y:736.4},0).wait(1).to({y:796.4},0).wait(1).to({y:856.4},0).wait(1).to({y:916.45},0).wait(1).to({y:899.75},0).wait(1).to({y:883.1},0).wait(1).to({y:866.4},0).wait(1).to({y:849.75},0).wait(1).to({y:833.1},0).wait(1).to({y:816.4},0).wait(1).to({y:799.75},0).wait(1).to({y:783.05},0).wait(1).to({y:766.4},0).wait(1).to({y:749.75},0).wait(1).to({y:733.05},0).wait(1).to({y:716.4},0).wait(1).to({y:699.7},0).wait(1).to({y:683.05},0).wait(1).to({y:666.4},0).wait(1).to({y:649.7},0).wait(1).to({y:633.05},0).wait(1).to({y:616.4},0).wait(1));

	// dungeon
	this.instance_1 = new lib.eyes();
	this.instance_1.setTransform(-20.5,-273.6,4.8213,4.8213,0,0,0,-14.5,-10.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EBMBiGJQALgBALAAQALAAALABEACNhBJMAp+gMiID4r7Mgp+AMigEh0sgfRUAvGhJaBCHgB6IE2gCUBDfAAwAv3BKmUAskBFcADfBgAMlJfAAAUADfhgAAskhFcgEgyzhZmMAp+AMiID5L7Mgp+gMig");
	this.shape.setTransform(-0.525,-97.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHeAUMAp9gMhIj4L7Mgp+AMggEgtigATIj5r6MAp/AMgID4L7g");
	this.shape_1.setTransform(-9.35,-592.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EikvCGLUADfhgAAskhFcUAvGhJaBCHgB6IE2gCUBDfAAwAv3BKmUAskBFcADfBgAgEAGFhNEIj4L7MAp+gMiID4r7gEgu6hNrMAp+AMiIj5r7Mgp+gMigEBMBiGKIAWAAIAWAAg");
	this.shape_2.setTransform(-0.525,-97.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1055.9,-957.2,2110.8,2173.1000000000004);


(lib.brokentorch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// lights
	this.instance = new lib.shine();
	this.instance.setTransform(-23.1,-77.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-121.9245,y:130.733},0).wait(1).to({x:-147.853,y:170.153},0).wait(1).to({x:-158.623,y:292.98},0).wait(1).to({x:-189.722,y:436.623},0).wait(1).to({x:-221.199,y:509.153},0).wait(1).to({x:-245.001,y:583.598},0).wait(1).to({x:-267.07,y:724.515},0).wait(1).to({x:-283.863,y:875.213},0).wait(1).to({x:-308.485,y:1200.1969},0).wait(1).to({x:-333.107,y:1525.1807},0).wait(1).to({x:-357.729,y:1850.1646},0).wait(1).to({x:-382.351,y:2175.1484},0).wait(1).to({x:-406.973,y:2500.1323},0).wait(1).to({x:-431.595,y:2825.1161},0).wait(1).to({x:-456.217,y:3150.1},0).wait(1).to({x:-455.7274,y:3147.9},0).wait(1).to({x:-455.2377,y:3145.7},0).wait(1).to({x:-454.7481,y:3143.5},0).wait(1).to({x:-454.2585,y:3141.3},0).wait(1).to({x:-453.7689,y:3139.1},0).wait(1).to({x:-453.2792,y:3136.9},0).wait(1).to({x:-452.7896,y:3134.7},0).wait(1).to({x:-452.3,y:3132.5},0).wait(1));

	// top_half
	this.instance_1 = new lib.tophalf();
	this.instance_1.setTransform(-13.65,0.9,1,1,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.3,regY:0.3,rotation:-16.9235,x:-113.35,y:84.75},0).wait(1).to({rotation:-33.8471,x:-176.15,y:185.9},0).wait(1).to({rotation:-50.7707,x:-206.65,y:317.5},0).wait(1).to({rotation:-67.6942,x:-204.7,y:448.05},0).wait(1).to({rotation:-77.1912,x:-225.2,y:519.95},0).wait(1).to({rotation:-82.1093,x:-245.65,y:591.8},0).wait(1).to({rotation:-86.5996,x:-230.4,y:731.2},0).wait(1).to({rotation:-94.1777,x:-260.55,y:857.95},0).wait(1).to({rotation:-87.474,x:-289,y:1184.75},0).wait(1).to({rotation:-80.7704,x:-317.4,y:1511.6},0).wait(1).to({rotation:-74.0667,x:-345.8,y:1838.5},0).wait(1).to({rotation:-67.363,x:-374.25,y:2165.3},0).wait(1).to({rotation:-60.6594,x:-402.7,y:2492.2},0).wait(1).to({rotation:-53.9557,x:-431.05,y:2819.05},0).wait(1).to({rotation:-47.2521,x:-459.55,y:3145.9},0).wait(1).to({rotation:-40.5484,x:-461.95,y:3145.6},0).wait(1).to({rotation:-35.7198,x:-464.4,y:3145.25},0).wait(1).to({rotation:-30.8913,x:-466.9,y:3144.95},0).wait(1).to({rotation:-30.5621,x:-469.35,y:3144.65},0).wait(1).to({rotation:-30.2329,x:-471.8,y:3144.35},0).wait(1).to({rotation:-29.9038,x:-474.25,y:3144},0).wait(1).to({rotation:-29.5746,x:-476.7,y:3143.7},0).wait(1).to({rotation:-29.2454,x:-479.15,y:3143.4},0).wait(1));

	// torch
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AKTlhQAUARAUATQADACACACIAAAAQAFAFAFAEQABAAAAABIALAJQADADAEAEQAxAtAyAtIinAeIhTAPIAlAPIDQBUAJujzIhjhPAGKh2IhRBQICcAAICWhjIAugeAGKh2IhoASIiBAXIhyBnAJGiYIhUAPIAqgkAHVgmICeAAAHyiJIhoATAGSiuICKABIBShGIBShGAKTlhIi1hQAIUnSQAKAJALAJQAxAsA5AzAr2DnIgBAAAr2DnIAuAfQAXAPAZAQQAAABABAAIADACQAEADADACQAEACAEADQAeATAhAVAs/C2QANAJAOAJIAuAfIDIizIAaBsIhABEIhABEAh9gZIgfAhIgQASIhdBmIhcBnIjvgDAh9gZIAAAAICCBkIhVAiIgVAIIh0AsAChhNIjkAqAlvhgIgZAIAmUAYIAAAAIhNAOAjegIIAAAAIi2AgICLBoAjegIIgWggAi/gNIgfAFAkaDnIhLAAIAAAAAl1FdIgRB2QhqhChWg3AltEiIB7ChAltEiIgIA7IjRgDAllDnIgIA7ABHB+IBWhVABHB+IBCAyAhQBtIgMAbIgjBQIC4AAAh/DYIgjBQAAFBLIBCAzAmUAYIiACIAE5gmIhRBPADqiwIA4BM");
	this.shape.setTransform(299.95,342.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AS6XtIAUgfIo+mAQhphHgxgjQhVg9g+g2Qg1gug8g+IhrhyIipi7IgLgLQkskZkbkgQgggggPgTQgZgegNgcQghgPgZgYIgNgIIADgCQgQgRgNgVQAZgKAcAFIAJADQAHgBAKACIAIgGIF5kuIC7iXIgbghQAJgCACgKIAZAFQADAMAGANQB5hlBphZIAMgJQALgHAJgBQAFAAAFACIgUggQAogMAqBAQDZFKD8EmQAWAZAFAcQAEAWgJALQAeAnApAvIBxCAIAXAdIJ7K4QCbCqBKBgQAPAUAHANQAJATAAARQgCAagYAXQgPAOgjAWQhYA4iCCUQiICbhOA3QgSANgUABIgDAAQgUAAgDgQgAEgLwIgZgPQAOAOALABgAC7KOIAMAMIAFgFIgigjIgGgFIgHAAgAWTJ3IAZAZIgTgVIgUgWIAOASgAkEBxQAEAHANAIIAeASIgzgsQACAHACAEgANMgLIACAFIBvCGIAKAFIgGgHQgbgagUggIg1hCIgggnIAPAagAo5jRIASAFIgMgHIgGACgAq5kjIAEgBIgBgBIgDACgAGgosIAjAxIANAIIgxg+IABAFgAGGpQIAAgCIgdgnIAdApgAB7u1IAYAaIgRggIgHAGgAvGodQgogvgMg6QgEgUgEg/QgIhigjg5QgnhDhOgfQhNgfhNASQgHgFABgKQACgJAHgFQAKgHAXACQBTAGA/AdQBKAiAjA8QAXAnAKA+QAGAkAHBIQAJA+AXArQAcA1AuATQAVAKAFAEQAFAFAAAIQABAIgGAFQg3gVgogugApDpYQgQgfgFgqIgEhLQgEgsgMgdQgQgngqgjQgZgVg4gjQheg7hWg+Qg0gngagjQgjgwAIguQAHgtAsgeQAngbA0gHQAagDBHAAQA9AAAigIQgHgEgBgJQgCgJAFgHIAZAFQAIAOgIAQQgHAQgQAHQgMAGgTAAIgggBQhhgEhYAgQguAQgOAaQgUAnAnA3QAuBDBrBBQCgBgARANQBDA0AOA1QAGAUAAAeIAAA0QADBaA2BKQgggNgTglgAkCvjIAJggQhdgqgugdQhJgugmg5QgXgjgXg6QgYhCAEgnIASgFQgEAbAMAkQAHAUASApIAQArQAJAZAKAQQAdAtBNAnQBmAzAWARQAXATgBASQAAAMgNAFQgFABgDAAQgHAAgDgGgA26zkQgGgZgJgWIAMgbIgMAbIgJgUIAUgIIgUAIQgQgfgVgYQgPgSgUgRQgWgSgcgRIABAAIgWggIAWAgIgBAAIgBgBQgigUhEgeIhCgeIAZgHQBOAiAtAWIAEACQAcANAVAMIASALIARALIgRASIARgSQAYASAQAUQASAXAPAhIACAGIABABIATA2QADAHgFAHQgFAGgHAAIgCAAgA5L2kIAfgFgA5M2kg");
	this.shape_1.setTransform(438.8763,486.5311);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("As+C3Ig2giIgQgKIAQh2IAJg6IB6CgIh6igIAIg8IgIA8IgJA6IjRgDIg/goIgHgEIgIgFIAAAAIBAhFIBBhDIB/iIIhNANIBNgNIh/CIIgahsIjJCzIgugfIgbgSIESiCIBMgPIBah/IBCAeQBDAeAjAUIABABQAcARAWASQAUARAPASQAVAYAPAfIAJAUQAKAWAGAYQAIABAGgGQAFgHgDgIIgTg1IgBgBIBWghIBCAyIhCgyIiChlIAAAAIAAAAIggAiIgQgLIgTgMIBDgLIA6gLIA3hPID2g+ICoACIB4iTIhjhPIA3ghIA2ghIAUATIBqBeIi0hQIC0BQIApAlIAFAEIAAAAIAKAJIAAAAIALAKIAHAHIBjBaIimAdICmgdQFVE5E6FVIgMAJQhqBZh6BlQgFgNgEgMIgYgFQgCAKgKACIAbAhIi6CXIl5EugAk0B8QBPAgAnBCQAiA5AIBjQAFA/AEAUQAMA5AoAvQAoAvA2AVQAFgFAAgIQAAgIgGgFQgEgEgUgKQgugUgcg1QgXgqgJg+QgHhJgHgjQgKg/gXgnQgig7hLgiQg+gdhTgHQgXgCgKAIQgIAEgBAKQgBAKAGAFQAdgHAcAAQAxAAAwATgACfkJQACAJAHAEQgjAIg8AAQhHAAgZADQg0AHgnAbQgsAegHAtQgJAuAkAwQAaAjA0AlQBVA/BeA7QA4AjAZAUQApAkARAnQAMAdAEArIAEBMQAEAqARAfQASAlAhANQg2hKgDhaIAAg0QAAgfgGgTQgPg1hDg1QgQgMighhQhqhBguhBQgng3AUgnQANgaAvgRQBXgfBhAEIAgABQASAAANgGQAPgIAIgPQAIgRgJgNIgYgGQgGAIACAJgAE4kkQgEAoAZBCQAXA6AXAiQAmA6BJAtQAuAdBdAqIgKAgQAGAKAMgGQANgEABgMQABgSgYgTQgVgRhmgyQhOgngcgtQgKgRgJgZIgQgrQgSgogHgVQgMgjADgbgAqhgfIAjhQIC5AAIi5AAIAjhQIgjBQgAtjhhIAAAAIBKABIhKgBIAAAAIBchmIiLhoIC1ghIi1AhIgBAAIABAAICLBoIhcBmIjwgDgAm3jKIBCAzIhCgzIBWhUIhWBUgArYimIB0gtgAsHjHIBchmgAkWkeIBRhQICdAAICcAAIicAAICVhjIgmgPIBUgQIguAfIDPBUIjPhUIAugfIhUAQIhTAPIAqgkIBShGIhkhPIBkBPIhSBGIiKgCICKACIgqAkIhoASIBogSIBTgPIAmAPIiVBjIidAAIBRhRIhnATIg5hNIA5BNIiCAXICCgXIBngTIhRBRgAnPktIByhoIjkApIDkgpgABwo7IBShGgAUyJYIgkgxIAAgGIAxA/gATYHZIAdAnIgBADIgcgqgAxFASIDRADIgQB2IjBh5gAxFASgAyTgfIgDgCIgBgBIgvgfIgvgfIDJizIAaBsIhBBDIhABFIAAAAgAtrglgAz1hgIAAAAIAvAfIgvgfgA0IhtIgbgSIAuAfIAAAAIgTgNgAz1hggAsHjHgApPjbIgDgHQgOghgSgWQgRgUgYgSIAggiICCBlIhWAhgAuSkvgAp7lhgAttmoIBHgVIA0BMQgugVhNgigAjbmsgABtnRgAAen1gADXpugADMp4IAEAEIAHAGg");
	this.shape_2.setTransform(351,375.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,0,0.098)").s().p("ApsajIAkggIgIAVIAAAAQgGAEgFAHIgRAcQABgQgBgMgEgteAAvIgSgBIAIgBQAsgEA5gHIAWgDIAWAPQg9gBhCADgEArjgEDQAigtApg5IhKBtIgBgHgEAstgRkIANgnIA3g0IhIBnIAEgMgAZczGIAlglIAZgZIgZBGQgVgCgQgGgEAhzgYvIABgBQgjBWgsBnIgQAmIgwBAIhTAagAba1EIBfhiIAEgDIgSAZQg3BOgkA3IgPAXIAZhQgEAhegV6QAYgqATgcIgbA5IgXAbIAHgOgAS446IgtiEQAYBCAWBCg");
	this.shape_3.setTransform(-18.05,-77.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC0000").s().p("Ao6U7IADABIgZANIAWgOgAv1TLIACAAIgIAEIAGgEgAPz1DIAAgBIAGgEIADAQIgJgLg");
	this.shape_4.setTransform(-66.275,-60.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1064.3,-587.3,1681.4,4247.8);


(lib.background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tex
	this.text = new cjs.Text("\nEXIT", "normal 400 96px 'Uncial Antiqua'", "#990000");
	this.text.textAlign = "center";
	this.text.lineHeight = 128;
	this.text.lineWidth = 398;
	this.text.parent = this;
	this.text.setTransform(5443.25,-1010.3,1.7297,1.4398,0,2.7913,-12.5141);
	if(!lib.properties.webfonts['Uncial Antiqua']) {
		lib.webFontTxtInst['Uncial Antiqua'] = lib.webFontTxtInst['Uncial Antiqua'] || [];
		lib.webFontTxtInst['Uncial Antiqua'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// accessorries
	this.instance = new lib.waterdrop();
	this.instance.setTransform(330.45,-1153.45,0.3961,0.4313,0,0,0,-51.2,-636.1);

	this.door_mc = new lib.exitdoor();
	this.door_mc.name = "door_mc";
	this.door_mc.setTransform(4823.2,-565.6,1.405,1.405,0,0,0,23.6,-14.6);

	this.torch_mc = new lib.brokentorch();
	this.torch_mc.name = "torch_mc";
	this.torch_mc.setTransform(1714.5,-736.6,0.2165,0.2165,0,0,0,617.2,639.9);

	this.monster_mc = new lib.cage();
	this.monster_mc.name = "monster_mc";
	this.monster_mc.setTransform(2839.7,-561.65,0.35,0.35,0,0,0,-0.6,-20.7);

	this.instance_1 = new lib.torchlight();
	this.instance_1.setTransform(3403.5,-870.2,0.2103,0.2103);

	this.instance_2 = new lib.torchlight();
	this.instance_2.setTransform(4160.65,-864,0.2103,0.2103,0,0,0,9.5,29.5);

	this.instance_3 = new lib.torchlight();
	this.instance_3.setTransform(2241.1,-864,0.2103,0.2103,0,0,0,9.5,29.5);

	this.instance_4 = new lib.torchlight();
	this.instance_4.setTransform(331.95,-864,0.2103,0.2103,0,0,0,9.5,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.monster_mc},{t:this.torch_mc},{t:this.door_mc},{t:this.instance}]}).wait(1));

	// dungeon
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("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");
	this.shape.setTransform(2879.775,-548.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("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j8hggqgEkKlggqgEkkgggqgEk8QggqgElV3ggqgEllfggqgEl0KggqgEmwdggqgEm8VggqgEGzZgpagEFtNgpagECR4gpaIqbAAIAAn0IKbAAIqbAAIulAAIAAnMIOlAAIKbAAIAAHMIEKAAIAAH0gECHdgpagEB44gpagEBR1gpagEAHfgpagEhUXgpaIu/AAIszAAIAAn0IMzAAIgBnMIPBAAIMMAAIAAHMIsNAAIu/AAIO/AAIAAH0gEhwJgpagEiV9gpagEjaKgpagEmwegpagEDycgxOIusAAIAAnMIOsAAIPoAAIAAHMgEDycgxOgEAvegxOgEgQQgxOgEgQQgxOIwjAAIpEAAIAAnMIJEAAIQjAAIAAHMgEgp3gxOgEhwJgxOIpYAAIAAnMIJYAAIMyAAIABHMgEiQVgxOgEiV9gxOgEiaHgxOIAAnMIEKAAIAAHMgEizHgxOgEjBegxOgEkXsgxOgEmAXgxOgEmwdgxOgEm8VgxOgEGzZg4agEGk0g4agEFNWg4agEDIkg4agECWCg4agECR4g4aIqbAAIAAoIIKbAAIEKAAIAAIIgEBa5g4agEBR1g4agEAHfg4agEggzg4agEh5hg4agEiV9g4agEjRGg4agEj8hg4agEkKlg4aItHAAIAAoIINHAAIOEAAIAAIIgEkkgg4agEkyQg4agEk8Qg4aIwjAAIAAoIIQjAAIKAAAIAAIIgEmlhg4agEG9zhAiIAAn0IELAAIAAH0gEGk0hAigEF9xhAigEDychAiIusAAIAAn0IOsAAIPoAAIAAH0gECR4hAiIAAn0IEKAAIAAH0gECR4hAigECHdhAigEBBShAigEAUThAigEAHfhAigEhIKhAigEiV9hAigEjaKhAigEjqthAigEkXshAigEkkghAigElMzhAigElV3hAigEmwdhAigEFtNhIWgEC7xhIWIpYAAIq8AAIABnMIK7AAIJYAAIAAHMgECndhIWgECWChIWgECHdhIWgEB44hIWgEBBShIWgEhUWhIWIvAAAIszAAIAAnMIMzAAIPAAAIAAHMgEhwJhIWgEiV9hIWgEiV9hIWgEikihIWgEizHhIWgEjqthIWgEmlhhIWgEGzZhPigEFbZhPigEFNWhPigEELHhPigEDXlhPigECWChPigEBR1hPigEBBShPigEhwJhPigEiV9hPigEjBehPigEmcJhPigEm8VhPig");
	this.shape_1.setTransform(2879.775,-548.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("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");
	this.shape_2.setTransform(5759.55,-1097.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("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");
	this.shape_3.setTransform(5759.55,-1097.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-1,-2178.1,11521.1,2170.6), null);


// stage content:
(lib.Xiong_finale = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		document.addEventListener("keydown",handleKeyDown);
		document.addEventListener("keyup",handleKeyUp);
		
		this.trial.addEventListener("click",handleStartButton);
		this.background.torch_mc.addEventListener("click",handleClickTorch);
		this.background.monster_mc.addEventListener("click",handleClickCave);
		this.background.door_mc.addEventListener("click",handleClickDoor);
		
		var root = this
		var speed = 10
		
		function handleStartButton(event){
			var ambience_Snd = createjs.Sound.play("ambience");
			root.play();
			console.log("this will start screen two")
		}
		
		function handleClickTorch(event){
			var torch_snd = createjs.Sound.play("torch");
			console.log("it will play once only");
			root.background.torch_mc.play();
			root.background.torch_mc.removeEventListener("click",handleClickTorch);
		}
		
		function handleClickCave(event){
			var monter_Snd = createjs.Sound.play("monter");
			console.log("it will play 1 only");
			root.background.monster_mc.gotoAndPlay(2);
		}
		
		function handleClickDoor(event){
			var door_snd = createjs.Sound.play("door");
			console.log("it will play only");
			root.background.door_mc.gotoAndPlay(2);
		}
		
		function handleKeyDown(event){
			//console.log(root.background.x);
			if (root.slime.currentFrame == 9){
				root.slime.gotoAndPlay("walking");
			}
			if (event.keyCode == 39 && root.background.x > -920.19){
				root.slime.scaleX = 1;
				root.background.x = root.background.x - speed;
			}
			if (event.keyCode == 37 && root.background.x < 2879.8){
				root.slime.scaleX = -1
				root.background.x = root.background.x + speed;
			}
		}
		
		function handleKeyUp(event){
			root.slime.gotoAndPlay("standing")
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// button
	this.trial = new lib.lever();
	this.trial.name = "trial";
	this.trial.setTransform(1793.05,544.7);
	new cjs.ButtonHelper(this.trial, 0, 1, 2, false, new lib.lever(), 3);

	this.timeline.addTween(cjs.Tween.get(this.trial).to({_off:true},1).wait(1));

	// title
	this.title = new cjs.Text("\n\nLEVEL     1\n\n\ndunGeon", "normal 400 96px 'Uncial Antiqua'");
	this.title.name = "title";
	this.title.textAlign = "center";
	this.title.lineHeight = 128;
	this.title.lineWidth = 1736;
	this.title.parent = this;
	this.title.setTransform(966.25,70.7);
	if(!lib.properties.webfonts['Uncial Antiqua']) {
		lib.webFontTxtInst['Uncial Antiqua'] = lib.webFontTxtInst['Uncial Antiqua'] || [];
		lib.webFontTxtInst['Uncial Antiqua'].push(this.title);
	}

	this.timeline.addTween(cjs.Tween.get(this.title).to({_off:true},1).wait(1));

	// character
	this.slime = new lib.Slime();
	this.slime.name = "slime";
	this.slime.setTransform(773.9,871.05,1,1,0,0,0,34,-1.2);
	this.slime._off = true;

	this.timeline.addTween(cjs.Tween.get(this.slime).wait(1).to({_off:false},0).wait(1));

	// background
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-0.5,-0.35,0.5,0.5);

	this.background = new lib.background();
	this.background.name = "background";
	this.background.setTransform(2879.8,539.95,1,1,0,0,0,2879.8,-548.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.background}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(959,-549.5,10561.1,1630.2);
// library properties:
lib.properties = {
	id: '616190FBCB4EB748A84F9C203B6A9860',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_7.png?1746754257477", id:"CachedBmp_7"},
		{src:"images/Xiong_finale_atlas_1.png?1746754257433", id:"Xiong_finale_atlas_1"},
		{src:"images/Xiong_finale_atlas_2.png?1746754257433", id:"Xiong_finale_atlas_2"},
		{src:"images/Xiong_finale_atlas_3.png?1746754257433", id:"Xiong_finale_atlas_3"},
		{src:"images/Xiong_finale_atlas_4.png?1746754257433", id:"Xiong_finale_atlas_4"},
		{src:"sounds/ambience.mp3?1746754257477", id:"ambience"},
		{src:"sounds/monter.mp3?1746754257477", id:"monter"},
		{src:"sounds/door.mp3?1746754257477", id:"door"},
		{src:"sounds/torch.mp3?1746754257477", id:"torch"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['616190FBCB4EB748A84F9C203B6A9860'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;