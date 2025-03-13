(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
// helper functions:

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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgOgTQgQACgMARQgKAPAAASQAAAJAOgCQAHAAAFgIQACgCAEgJQADgGAGgFQAIgFAFgEQAQgJAMgDQALgCAJAAQADgBAAgJQAAgNgEgDQgBgBgKAAQgRAAgYAOQgEADgEADQgBAAgCABQgMAJgNAK");
	this.shape.setTransform(0,0.0107);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0AhQAAgSAKgPQAMgRARgCQgNAJgMAKQAMgKANgJIACgBIAJgGQAXgOARAAQAKAAACABQADADAAANQAAAJgDABQgJAAgKACQgMADgRAJIgMAJQgGAFgEAGIgGALQgFAIgGAAIgEABQgLAAAAgIg");
	this.shape_1.setTransform(0,0.0107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shine, new cjs.Rectangle(-6.3,-5,12.6,10.1), null);


(lib.shadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AIIAAQAAAliYAbQiYAajYAAQjXAAiYgaQiYgbAAglQAAglCYgaQCYgaDXAAQDYAACYAaQCYAaAAAlg");
	this.shape.setTransform(0,2.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlvA/QiYgZAAgmQAAgkCYgbQCYgaDXAAQDYAACXAaQCZAbAAAkQAAAmiZAZQiXAbjYAAQjXAAiYgbg");
	this.shape_1.setTransform(0,2.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(-54.5,-9.4,109,23), null);


(lib.Prod = function(mode,startPosition,loop,reversed) {
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
	this.prod = new cjs.Text("Productions", "bold 42px 'Tahoma'", "#FFFFFF");
	this.prod.name = "prod";
	this.prod.textAlign = "center";
	this.prod.lineHeight = 53;
	this.prod.lineWidth = 289;
	this.prod.parent = this;
	this.prod.setTransform(0,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.prod).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Prod, new cjs.Rectangle(-146.5,-27.5,293,55), null);


(lib.paperPlane_mt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Aat01IgKgUQgDADgDADQgCABgCACIAAgTQgBAAgBAAQgvAFklCdQjGBqsgG6Qo6E7kTCQQj0CAlyC0QhdAuisA9QgFACgFABQgIADgIADAaZ02IAAgKQgCACgCADQgDACgCACQjwDcl5ElQi6CRoAF9QlHDzi7CVQgQAMgPANQgBABgBABQg/A5h1CQQieDCAAApQAAAVAHALAaj0rQAHAMAFAIQABADABACQACADABAEQADAKAAANQAAASp2OVQhGBUg1BuQggBAg3CDQhpDthMC5QhFCqhGC6QgRASgIAFQgNAHgRAAQgGAAn2iKIAAgBQgNgDgNgEQiRgoh4ggQgCAAgBAAQgOgEgNgDQhLgUhBgQQgLgDgLgDQgKgCgJgDQgCAAgBAAQgCABgCgCA1ODqIAAgKIgbAAIgXAAQgSASh9A3Qh9A4gMALA62F2QAMgBARACQAtADBSAXQBqAdBTAEQADAAADAAQAKAAAJAAAqWIrQgPgDgNgDQgQgDgPgDQgbgFgWgEQgzgIhVgMQAAAAgBAAQgsgGg1gHQiQgShGgNQhRgPhEgVAqTJWQgEABgEACQgFABgEACIgBAAQgdAJgfAIQhpAbhEgMQgFgBgFgBAqrJIIA7AAQgRAHgSAHQAXAJAgAEQBDABAaABQAHABAEAAAqrJIQAGAEAHAEQAFADAGADAn9JQIAAAAQgCgBgCAAApYI+QgMAFgMAFIAsAAAqyIqIgUAAQAKASARAMAtwJIIDFAAAnRJbQgIgGgJgHQgEgDgEgDAkpKPQgSADgRAKQgkAAgagQQgUgMgzglAksKYQgRAEgPAAQhhA1ihDgQgxBEhkCUQgZAlgUAeQCoiRC8hvQBMgsCOhKQCIhHBAgnAuOVUIgUAAQANgMAMgNQA7g6A+g1QgzBKgZAgAuOJ8IAAK6AuOIWIAABm");
	this.shape.setTransform(171.925,136.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AucVCIAAq5IADAAQATADAXAAIAAAAIAAAAQAxAAA/gPIAAAAIABAAIACAAIABgBIAKgCIACgBQAegHAegKIAAAAIAJgDIAJgDIAjgOIg7AAQgRgMgKgRIAUAAIgUAAQAKARARAMIjFAAIDFAAIAMAJIAMAFIgJADIgJADIAAAAQgeAKgeAHIgCABIgKACIgBABIgCAAIgBAAIAAAAQg/APgxAAIAAAAIAAAAQgXAAgTgDIgDAAIAAhnIAEgUQBVAMAzAIIAxAJIAeAGIAcAHIgcgHIgegGIgxgJQgzgIhVgMIgBAAIhhgMQiRgThFgNQhSgOhDgWIASAAIgSAAIgGAAQhTgEhrgdQhSgXgtgDIABgKQAMgMB9g4QB9g3ASgSIAYAAIAaAAIAAAKIAAgKIgaAAIAKgDQCsg9BdgtQFyi1DziAQEUiQI6k7QMfm6DHhqQEkidAvgEIADATIADgEIAJAWIgCACIALAUIADAGIAGAdQAAATp2OUQhHBUg1BvQgfA/g3CDQhpDuhMC4QhGCqhFC7QgSARgIAFQgMAHgRAAQgGAAn2iKIgBAAIgagHQiRgph3gfQB3AfCRApIAaAHIABAAIgGATQhAAmiIBHQiOBKhMAsQi9BvioCRIAuhDQBjiUAxhEQCijgBgg1QAQAAARgDIACgJIADgJIgDgBIgbgHIiMgkIgRgMIgIgHIAIAHIARAMIgWgGIgTgEIgDgBIgBAAIgDgBIAAAAIACABIAAAAIAAAAIACAAIADABIATAEIAWAGQAzAlATAMQAaAQAkAAQhgA1iiDgQgxBEhjCUIguBDQg+A2g6A6gAprJvQBDABAbABIALABIgLgBQgbgBhDgBQgfgDgXgKQAXAKAfADgAoWI7QAAAVAHALQgHgLAAgVQAAgpCejCQB1iQA+g5IADgCIAfgZQC7iUFHj0QH/l9C6iQQF6kmDvjbIAFgFIAFgEIAAAKIAAgKIgFAEIgFAFQjvDbl6EmQi6CQn/F9QlHD0i7CUIgfAZIgDACQg+A5h1CQQieDCAAApIAAAAgAp+JUIAsAAIgsAAIAYgJIgYAJIAAAAgA2HDzIAQgHIgQAHgAnfJnIAAAAgAoNJcIgCgBIAAAAIADABIABAAIgCAAIAAAAIAAAAgAoLJcg");
	this.shape_1.setTransform(173.375,135.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paperPlane_mt, new cjs.Rectangle(-2.5,-2.5,348.9,277.9), null);


(lib.name = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// actions
	this.name_mc = new cjs.Text("YX", "bold 42px 'Tahoma'", "#FFFFFF");
	this.name_mc.name = "name_mc";
	this.name_mc.textAlign = "center";
	this.name_mc.lineHeight = 53;
	this.name_mc.lineWidth = 100;
	this.name_mc.parent = this;
	this.name_mc.setTransform(0,-25.35);

	this.timeline.addTween(cjs.Tween.get(this.name_mc).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.name, new cjs.Rectangle(-52,-27.3,104,54.6), null);


(lib.gs = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA7lgNHIDcAAIAANHIrzNIIvPAAIvAAAItwAAIv7AAIwaAAIx+AAIxCAAIi0AAIAAtIIgRAUEA/MgAMIgLAMIAANIIrzAAAe1tHINwAAI3maPAO5tHIP8AAI3maPAzetHIR+AAI3maPEgkggNHIRCAAI3maPAhgtHIQZAAI3laPEAslgNHIPAAAI3maPEgzHgNHIrzNHIAAtHILzAAIOnAAI3maP");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("EAzLANIILztIIAANIgEAzLANIIvPAAIXm6PI3maPIvAAAIXm6PIPAAAIDcAAIAANHIrzNIgAHMNIIXm6PINwAAI3maPgAovNIIXl6PIP8AAI3maPgA5JNIIXm6PIQZAAI3laPgA5JNIIx+AAIXm6PIR+AAI3maPgEg8JANIIXm6PIRCAAI3maPgEg+9ANIIAAtIIAAtHILzAAIrzNHILztHIOnAAI3maPgEA++AAAgAO2tHg");
	this.shape_1.setTransform(0.325,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gs, new cjs.Rectangle(-405.4,-84.9,810.9,169.9), null);


(lib.eye = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhQisQAlgRArAAQBPAAA3A3QA4A4AABOQAABPg4A3Qg3A4hPAAQhOAAg4g4Qg3g3AAhPQAAhOA3g4QAOgNAOgKAhQisQAJgCAJAAQAbAAAUATQASATAAAbQAAAbgSATQgUATgbAAQgbAAgTgTQgTgTAAgbQAAgbATgTQABgBABgBQAMgIAOgHg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990099").s().p("AgtAuQgTgTAAgbQAAgaATgTIACgCQAMgIANgHQAJgCAJAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");
	this.shape_1.setTransform(-6.25,-11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AiGCGQg3g3AAhPQAAhOA3g3QAOgOAOgKIgBACQgUATABAbQgBAbAUATQASATAbAAQAcAAASgTQATgTgBgbQABgbgTgTQgSgTgcAAQgJAAgJACQAlgRArAAQBOAAA4A4QA4A3AABOQAABPg4A3Qg4A4hOAAQhNAAg5g4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(-20,-20,40,40), null);


(lib.ball_mt = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#339900").s().p("AhvBvQgtgugBhBQABhAAtgvQAvgtBAgBQBBABAuAtQAvAvAABAQAABBgvAuQguAvhBAAQhAAAgvgvg");
	this.shape.setTransform(15.75,15.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ball_mt, new cjs.Rectangle(0,0,31.5,31.5), null);


(lib.paperPlane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// plane
	this.instance = new lib.paperPlane_mt();
	this.instance.setTransform(-99.4,354.45,1,1,-14.9992,0,0,171.7,136.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:171.9,regY:136.4,rotation:-5.01,x:-54.15,y:295.75},0).wait(1).to({rotation:3.3976,x:4.5,y:240.4},0).wait(1).to({rotation:10.0333,x:76.95,y:188.1},0).wait(1).to({rotation:15.1621,x:163,y:138.4},0).wait(1).to({rotation:19.0924,x:262.85,y:90.8},0).wait(1).to({rotation:22.0946,x:376.35,y:44.7},0).wait(1).to({rotation:24.3821,x:503.55,y:-0.35},0).wait(1).to({rotation:26.1165,x:644.45,y:-44.8},0).wait(1).to({rotation:27.4187,x:799.1,y:-89.05},0).wait(1).to({rotation:28.3794,x:967.35,y:-133.75},0).wait(1).to({rotation:29.0668,x:1149.4,y:-179.35},0).wait(1).to({rotation:29.533,x:1345,y:-226.2},0).wait(1).to({rotation:29.8182,x:1554.5,y:-275.05},0).wait(1).to({rotation:29.6209,x:1777.6,y:-327.1},0).wait(1).to({rotation:29.6809,x:2014.4,y:-382.55},0).wait(1).to({rotation:29.9623,x:2264.95,y:-440.4},0).wait(1).to({rotation:30.4327,x:2529.15,y:-499.6},0).wait(1).to({rotation:31.0669,x:2807.2,y:-559},0).wait(1).to({rotation:31.8447,x:3098.95,y:-617.6},0).wait(1).to({rotation:32.7496,x:3404.45,y:-674.3},0).wait(1).to({rotation:33.7677,x:3723.8,y:-728},0).wait(1).to({rotation:34.8873,x:4056.9,y:-777.7},0).wait(1).to({rotation:36.0983,x:4403.9,y:-822.2},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.5,-895.7,4926.9,1429.7);


(lib.easteregg = function(mode,startPosition,loop,reversed) {
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
	this.eye5 = new lib.eye();
	this.eye5.name = "eye5";
	this.eye5.setTransform(1,26.3,0.5053,0.5053);

	this.eye6 = new lib.eye();
	this.eye6.name = "eye6";
	this.eye6.setTransform(1,-16.5,0.5053,0.5053);

	this.eye3 = new lib.eye();
	this.eye3.name = "eye3";
	this.eye3.setTransform(37.3,27.6);

	this.eye2 = new lib.eye();
	this.eye2.name = "eye2";
	this.eye2.setTransform(37.3,-14.5);

	this.eye1 = new lib.eye();
	this.eye1.name = "eye1";
	this.eye1.setTransform(3.65,-62.9);

	this.eye7 = new lib.eye();
	this.eye7.name = "eye7";
	this.eye7.setTransform(-34.35,-14.5);

	this.eye4 = new lib.eye();
	this.eye4.name = "eye4";
	this.eye4.setTransform(3.65,85.25);

	this.eye8 = new lib.eye();
	this.eye8.name = "eye8";
	this.eye8.setTransform(-34.35,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eye8},{t:this.eye4},{t:this.eye7},{t:this.eye1},{t:this.eye2},{t:this.eye3},{t:this.eye6},{t:this.eye5}]}).wait(1));

	// spider_head
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIVFXQhVBGh7A/QmLDHovAAQovAAmLjHQmMjIAAkZQAAkaGMjIQGLjHIvAAQIvAAGLDHQB9A/BVBHQA0j1CBjFQDZlJEzAAQEyAADZFJQDZFKAAHRQAAHSjZFKQjZFJkyAAQkzAAjZlJQiEjJgzj8QghihAAi2QAAi7Ajim");
	this.shape.setTransform(-125.975,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252525").s().p("ALMMbQiEjIgzj8QghihAAi2QAAi7AjilQA0j2CBjEQDZlKEzAAQEyAADZFKQDZFJAAHRQAAHSjZFJQjZFKkyAAQkzAAjZlKgA4vHcQmMjIAAkZQAAkaGMjHQGLjIIvAAQIvAAGLDIQB9A+BVBIQgjClAAC7QAAC2AhChQhVBGh7A/QmLDHovAAQovAAmLjHgAIXlgIAAAAg");
	this.shape_1.setTransform(-125.975,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.easteregg, new cjs.Rectangle(-324.9,-105,397.9,227), null);


(lib.ball = function(mode,startPosition,loop,reversed) {
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
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// shine
	this.shine_mc = new lib.shine();
	this.shine_mc.name = "shine_mc";
	this.shine_mc.setTransform(5.3,-9.15,1,1,59.9996);

	this.timeline.addTween(cjs.Tween.get(this.shine_mc).wait(1).to({rotation:52.5,x:17.25,y:-11.65},0).wait(1).to({rotation:45.0004,x:27.6,y:-14.2},0).wait(1).to({x:41.6,y:-12.8},0).wait(1).to({rotation:41.2506,x:57.05,y:-11.4},0).wait(1).to({rotation:37.5008,x:73,y:-8.55},0).wait(1).to({rotation:33.751,x:86.7,y:-4.2},0).wait(1).to({rotation:30.0012,x:100.55,y:1.4},0).wait(1).to({rotation:22.5013,x:115.5,y:10},0).wait(1).to({rotation:15.0014,x:128.9,y:18.4},0).wait(1).to({rotation:7.5007,x:143.65,y:29.85},0).wait(1).to({rotation:0,x:158.45,y:45.75},0).wait(1).to({rotation:-14.9989,x:170.55,y:32.25},0).wait(1).to({rotation:0,x:189.65,y:23.35},0).wait(1).to({rotation:14.9989,x:211.8,y:18.4},0).wait(1).to({rotation:29.9959,x:245.55,y:21.9},0).wait(1).to({rotation:44.9939,x:270,y:31.65},0).wait(1).to({rotation:59.9936,x:289.4,y:46.45},0).wait(1).to({rotation:74.9929,x:307.4,y:42.55},0).wait(1).to({rotation:59.9942,x:322.65,y:37.35},0).wait(1).to({rotation:44.9956,x:339,y:34.45},0).wait(1).to({rotation:29.9966,x:359.05},0).wait(1).to({rotation:14.9965,x:372.9,y:37.7},0).wait(1).to({rotation:0,x:381.8,y:46.6},0).wait(1));

	// motion_tween
	this.ball_mt = new lib.ball_mt();
	this.ball_mt.name = "ball_mt";
	this.ball_mt.setTransform(0.05,0.05,1,1,0,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.ball_mt).wait(1).to({x:14,y:-2.45},0).wait(1).to({x:27.9,y:-3.7},0).wait(1).to({x:41.9,y:-3.65},0).wait(1).to({x:56.1,y:-2.25},0).wait(1).to({x:70.45,y:0.65},0).wait(1).to({x:85.1,y:5},0).wait(1).to({x:100,y:11},0).wait(1).to({x:115.25,y:18.55},0).wait(1).to({x:130.95,y:27.95},0).wait(1).to({x:147.1,y:39.1},0).wait(1).to({x:163.8,y:52.15},0).wait(1).to({x:177.45,y:38.55},0).wait(1).to({x:195.6,y:31.55},0).wait(1).to({x:215.8,y:27.7},0).wait(1).to({x:245.8,y:32.35},0).wait(1).to({x:269.1,y:40.75},0).wait(1).to({x:285.7,y:55.5},0).wait(1).to({x:300.1,y:49.2},0).wait(1).to({x:317.2,y:46.35},0).wait(1).to({x:337.2,y:44.55},0).wait(1).to({x:359.85,y:44.4},0).wait(1).to({x:376.25,y:47.2},0).wait(1).to({x:386.4,y:55.5},0).wait(1));

	// shadow
	this.shade = new lib.shadow();
	this.shade.name = "shade";
	this.shade.setTransform(3.8,67.8,0.3759,0.3759,0,0,0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.shade).wait(1).to({regY:2.1,scaleX:0.2254,scaleY:0.376,x:17.2,y:67.85},0).wait(1).to({scaleX:0.0749,x:30.65},0).wait(1).to({scaleX:0.0529,x:44.05},0).wait(1).to({scaleX:0.0836,x:57.5},0).wait(1).to({scaleX:0.0874,x:70.95},0).wait(1).to({scaleX:0.0954,x:84.35},0).wait(1).to({scaleX:0.0915,x:97.8},0).wait(1).to({scaleX:0.128,x:113.05},0).wait(1).to({scaleX:0.1727,x:129.55},0).wait(1).to({scaleX:0.2249,x:147.45},0).wait(1).to({scaleX:0.3042,x:163.7},0).wait(1).to({scaleX:0.2262,x:177.85},0).wait(1).to({scaleX:0.1804,x:195.9},0).wait(1).to({scaleX:0.1385,x:217.8},0).wait(1).to({scaleX:0.1939,x:245.65,y:69},0).wait(1).to({scaleX:0.2341,x:267.9,y:70.1},0).wait(1).to({scaleX:0.2599,x:285.6,y:71.2},0).wait(1).to({scaleX:0.2856,x:299.15},0).wait(1).to({scaleX:0.1831,x:317.95},0).wait(1).to({scaleX:0.1213,x:336.8},0).wait(1).to({scaleX:0.1923,x:359.7},0).wait(1).to({scaleX:0.248,x:377.15},0).wait(1).to({scaleX:0.3038,x:386.35},0).wait(1));

	// ball
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#330000").ss(1,1,1).p("ACeAAQAABBgvAuQguAvhBAAQhAAAgvgvQguguAAhBQAAhAAugvQAvguBAAAQBBAAAuAuQAvAvAABAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-19.5,419.9,95.1);


// stage content:
(lib.Xiong_midTermBanner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [71];
	// timeline functions:
	this.frame_71 = function() {
		this.stop();
		
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		
		var root = this
		var midpoint = this.stage.canvas.width / 2;
		var ballRestX = this.ball_mc.x;
		var prodRestX = this.prod.x;
		var prodRestY = this.prod.y;
		var spiderRestX = this.head.x;
		var spiderRestY = this.head.y;
		
		this.prod.on("click", function(e) {
			createjs.Tween.get(root.prod, {override:false}).to({y: prodRestY-35}, 1000, createjs.Ease.quintOut).call(emerge);
		});
		
		function emerge() {
			createjs.Tween.get(root.prod, {override:false}).to({y: prodRestY}, 2000, createjs.Ease.quintIn);
		};
		
		this.name_mc.addEventListener("click",link.bind(this));
		
		function link(e){
			
		var url = "https://yuesiaxiong.wixsite.com/yuesia-xiong";
			
		var win = window.open(url,"_blank");
		
		win.focus();
		}
			
		this.stage.on("stagemousemove", function(e) {
		    var newX = 0;
			if (e.stageX < midpoint) {
				newX = (midpoint - e.stageX) / 20;
			} else if (e.stageX > midpoint) {
				newX = (e.stageX - midpoint) / 20;
				newX *= -1;
			}
			createjs.Tween.get(root.ball_mc, {override:true}).to({x: ballRestX + newX}, 1000, createjs.Ease.quintOut);
			createjs.Tween.get(root.gs_mc, {override:true}).to({x: ballRestX + (newX / 0.5)}, 1000, createjs.Ease.quintOut);
		
		
			var l2gL = root.head.eye1.localToGlobal(0, 0);
			var calcL = Math.atan2(e.stageY - l2gL.y, e.stageX - l2gL.x);
			var angleL = calcL * (180 / Math.PI);
			root.head.eye1.rotation = angleL;
		
			var l2gR = root.head.eye2.localToGlobal(0, 0);
			var calcR = Math.atan2(e.stageY - l2gR.y, e.stageX - l2gR.x);
			var angleR = calcR * (180 / Math.PI);
			root.head.eye2.rotation = angleR;
			
			var l2gL = root.head.eye3.localToGlobal(0, 0);
			var calcL = Math.atan2(e.stageY - l2gL.y, e.stageX - l2gL.x);
			var angleL = calcL * (180 / Math.PI);
			root.head.eye3.rotation = angleL;
		
			var l2gR = root.head.eye4.localToGlobal(0, 0);
			var calcR = Math.atan2(e.stageY - l2gR.y, e.stageX - l2gR.x);
			var angleR = calcR * (180 / Math.PI);
			root.head.eye4.rotation = angleR;
			
			var l2gL = root.head.eye5.localToGlobal(0, 0);
			var calcL = Math.atan2(e.stageY - l2gL.y, e.stageX - l2gL.x);
			var angleL = calcL * (180 / Math.PI);
			root.head.eye5.rotation = angleL;
		
			var l2gR = root.head.eye6.localToGlobal(0, 0);
			var calcR = Math.atan2(e.stageY - l2gR.y, e.stageX - l2gR.x);
			var angleR = calcR * (180 / Math.PI);
			root.head.eye6.rotation = angleR;
			
			var l2gL = root.head.eye7.localToGlobal(0, 0);
			var calcL = Math.atan2(e.stageY - l2gL.y, e.stageX - l2gL.x);
			var angleL = calcL * (180 / Math.PI);
			root.head.eye7.rotation = angleL;
		
			var l2gR = root.head.eye8.localToGlobal(0, 0);
			var calcR = Math.atan2(e.stageY - l2gR.y, e.stageX - l2gR.x);
			var angleR = calcR * (180 / Math.PI);
			root.head.eye8.rotation = angleR;
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// productins
	this.prod = new lib.Prod();
	this.prod.name = "prod";
	this.prod.setTransform(376.5,-31.45);

	this.timeline.addTween(cjs.Tween.get(this.prod).wait(1).to({y:-28.1067},0).wait(1).to({y:-24.8089},0).wait(1).to({y:-21.5582},0).wait(1).to({y:-18.3564},0).wait(1).to({y:-15.2017},0).wait(1).to({y:-12.0942},0).wait(1).to({y:-9.0338},0).wait(1).to({y:-6.0207},0).wait(1).to({y:-3.0546},0).wait(1).to({y:-0.1374},0).wait(1).to({y:2.7326},0).wait(1).to({y:5.5554},0).wait(1).to({y:8.3311},0).wait(1).to({y:11.0597},0).wait(1).to({y:13.7394},0).wait(1).to({y:16.3736},0).wait(1).to({y:18.959},0).wait(1).to({y:21.4972},0).wait(1).to({y:23.9883},0).wait(1).to({y:26.4322},0).wait(1).to({y:25.9634},0).wait(1).to({y:23.2432},0).wait(1).to({y:20.5795},0).wait(1).to({y:17.9704},0).wait(1).to({y:15.4159},0).wait(1).to({y:12.9179},0).wait(1).to({y:10.4726},0).wait(1).to({y:8.0839},0).wait(1).to({y:5.7497},0).wait(1).to({y:4.7581},0).wait(1).to({y:7.0829},0).wait(1).to({y:9.3506},0).wait(1).to({y:11.5593},0).wait(1).to({y:13.7129},0).wait(1).to({y:15.8075},0).wait(1).to({y:17.845},0).wait(1).to({y:19.8254},0).wait(1).to({y:21.7468},0).wait(1).to({y:23.6131},0).wait(1).to({y:25.4204},0).wait(1).to({y:27.1706},0).wait(1).to({y:28.088},0).wait(1).to({y:25.679},0).wait(1).to({y:23.354},0).wait(1).to({y:21.116},0).wait(1).to({y:18.959},0).wait(1).to({y:16.889},0).wait(1).to({y:17.9774},0).wait(1).to({y:19.6258},0).wait(1).to({y:21.1988},0).wait(1).to({y:22.7016},0).wait(1).to({y:24.129},0).wait(1).to({y:25.4836},0).wait(1).to({y:26.7654},0).wait(1).to({y:26.9796},0).wait(1).to({y:27.0123},0).wait(1).to({y:27.0429},0).wait(1).to({y:27.0714},0).wait(1).to({y:27.0978},0).wait(1).to({y:27.1},0).wait(12));

	// text
	this.name_mc = new lib.name();
	this.name_mc.name = "name_mc";
	this.name_mc.setTransform(69,-22.6);
	this.name_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.name_mc).wait(1).to({x:70.7054,y:-21.2035,alpha:0.0284},0).wait(1).to({x:72.3876,y:-19.826,alpha:0.0563},0).wait(1).to({x:74.0458,y:-18.4682,alpha:0.0839},0).wait(1).to({x:75.6791,y:-17.1308,alpha:0.1111},0).wait(1).to({x:77.2883,y:-15.8131,alpha:0.1378},0).wait(1).to({x:78.8734,y:-14.5151,alpha:0.1642},0).wait(1).to({x:80.4345,y:-13.2368,alpha:0.1901},0).wait(1).to({x:81.9715,y:-11.9782,alpha:0.2157},0).wait(1).to({x:83.4845,y:-10.7393,alpha:0.2408},0).wait(1).to({x:84.9725,y:-9.5208,alpha:0.2656},0).wait(1).to({x:86.4365,y:-8.322,alpha:0.2899},0).wait(1).to({x:87.8765,y:-7.1429,alpha:0.3139},0).wait(1).to({x:89.2924,y:-5.9835,alpha:0.3374},0).wait(1).to({x:90.6842,y:-4.8438,alpha:0.3606},0).wait(1).to({x:92.0511,y:-3.7245,alpha:0.3833},0).wait(1).to({x:93.3948,y:-2.6242,alpha:0.4056},0).wait(1).to({x:94.7136,y:-1.5443,alpha:0.4276},0).wait(1).to({x:96.0084,y:-0.4841,alpha:0.4491},0).wait(1).to({x:97.2791,y:0.5564,alpha:0.4702},0).wait(1).to({x:98.5257,y:1.5772,alpha:0.4909},0).wait(1).to({x:99.7474,y:2.5776,alpha:0.5109},0).wait(1).to({x:100.946,y:3.559,alpha:0.5303},0).wait(1).to({x:102.1196,y:4.52,alpha:0.5493},0).wait(1).to({x:103.2691,y:5.4613,alpha:0.5679},0).wait(1).to({x:104.3946,y:6.383,alpha:0.5861},0).wait(1).to({x:105.4952,y:7.2842,alpha:0.6039},0).wait(1).to({x:106.5726,y:8.1664,alpha:0.6213},0).wait(1).to({x:107.625,y:9.0282,alpha:0.6383},0).wait(1).to({x:108.6534,y:9.8703,alpha:0.6549},0).wait(1).to({x:109.6578,y:10.6927,alpha:0.6712},0).wait(1).to({x:110.6381,y:11.4954,alpha:0.687},0).wait(1).to({x:111.5943,y:12.2785,alpha:0.7025},0).wait(1).to({x:112.5257,y:13.0411,alpha:0.7175},0).wait(1).to({x:113.4338,y:13.7847,alpha:0.7322},0).wait(1).to({x:114.317,y:14.5079,alpha:0.7465},0).wait(1).to({x:115.1761,y:15.2114,alpha:0.7604},0).wait(1).to({x:116.0112,y:15.8953,alpha:0.7739},0).wait(1).to({x:116.8214,y:16.5587,alpha:0.787},0).wait(1).to({x:117.6084,y:17.2031,alpha:0.7997},0).wait(1).to({x:118.3705,y:17.8271,alpha:0.812},0).wait(1).to({x:119.1085,y:18.4315,alpha:0.8239},0).wait(1).to({x:119.8225,y:19.0161,alpha:0.8355},0).wait(1).to({x:120.5124,y:19.581,alpha:0.8466},0).wait(1).to({x:121.1782,y:20.1262,alpha:0.8574},0).wait(1).to({x:121.8191,y:20.6511,alpha:0.8677},0).wait(1).to({x:122.4369,y:21.1569,alpha:0.8777},0).wait(1).to({x:123.0297,y:21.6423,alpha:0.8873},0).wait(1).to({x:123.5984,y:22.1081,alpha:0.8965},0).wait(1).to({x:124.1431,y:22.5541,alpha:0.9053},0).wait(1).to({x:124.6629,y:22.9797,alpha:0.9137},0).wait(1).to({x:125.1595,y:23.3864,alpha:0.9218},0).wait(1).to({x:125.6312,y:23.7726,alpha:0.9294},0).wait(1).to({x:126.0788,y:24.1391,alpha:0.9366},0).wait(1).to({x:126.5024,y:24.486,alpha:0.9435},0).wait(1).to({x:126.9019,y:24.8131,alpha:0.9499},0).wait(1).to({x:127.2765,y:25.1198,alpha:0.956},0).wait(1).to({x:127.6279,y:25.4076,alpha:0.9617},0).wait(1).to({x:127.9544,y:25.6749,alpha:0.9669},0).wait(1).to({x:128.2568,y:25.9226,alpha:0.9718},0).wait(1).to({x:128.5351,y:26.1505,alpha:0.9763},0).wait(1).to({x:128.7894,y:26.3587,alpha:0.9804},0).wait(1).to({x:129.0197,y:26.5473,alpha:0.9842},0).wait(1).to({x:129.225,y:26.7154,alpha:0.9875},0).wait(1).to({x:129.4063,y:26.8639,alpha:0.9904},0).wait(1).to({x:129.5636,y:26.9926,alpha:0.9929},0).wait(1).to({x:129.6967,y:27.1017,alpha:0.9951},0).wait(1).to({x:129.8058,y:27.191,alpha:0.9969},0).wait(1).to({x:129.8909,y:27.2607,alpha:0.9982},0).wait(1).to({x:129.951,y:27.3099,alpha:0.9992},0).wait(1).to({x:129.9871,y:27.3394,alpha:0.9998},0).wait(1).to({x:130,y:27.35,alpha:1},0).wait(1));

	// plane
	this.plane_mc = new lib.paperPlane();
	this.plane_mc.name = "plane_mc";
	this.plane_mc.setTransform(741.05,68.65,0.1695,0.1695,0,-14.9936,165.0064,-170.5,131.2);

	this.timeline.addTween(cjs.Tween.get(this.plane_mc).wait(72));

	// ball
	this.ball_mc = new lib.ball();
	this.ball_mc.name = "ball_mc";
	this.ball_mc.setTransform(-56.2,80.95,1.5714,1.5714,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.ball_mc).wait(72));

	// green_screen
	this.gs_mc = new lib.gs();
	this.gs_mc.name = "gs_mc";
	this.gs_mc.setTransform(-479.9,99.95,1.1891,1.1891,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.gs_mc).wait(1).to({regX:0,regY:0,scaleX:1.1973,scaleY:1.1894,x:-462.8019,y:99.8021},0).wait(1).to({scaleX:1.2055,scaleY:1.1897,x:-445.6037,y:99.7543},0).wait(1).to({scaleX:1.2137,scaleY:1.19,x:-428.4056,y:99.7064},0).wait(1).to({scaleX:1.2219,scaleY:1.1903,x:-411.2074,y:99.6585},0).wait(1).to({scaleX:1.23,scaleY:1.1906,x:-394.0093,y:99.6107},0).wait(1).to({scaleX:1.2382,scaleY:1.1909,x:-376.8111,y:99.5628},0).wait(1).to({scaleX:1.2464,scaleY:1.1912,x:-359.613,y:99.5149},0).wait(1).to({scaleX:1.2546,scaleY:1.1914,x:-342.4149,y:99.467},0).wait(1).to({scaleX:1.2627,scaleY:1.1917,x:-325.2167,y:99.4192},0).wait(1).to({scaleX:1.2709,scaleY:1.192,x:-308.0186,y:99.3713},0).wait(1).to({scaleX:1.2791,scaleY:1.1923,x:-290.8204,y:99.3234},0).wait(1).to({scaleX:1.2873,scaleY:1.1926,x:-273.6223,y:99.2756},0).wait(1).to({scaleX:1.2954,scaleY:1.1929,x:-256.4242,y:99.2277},0).wait(1).to({scaleX:1.3036,scaleY:1.1932,x:-239.226,y:99.1798},0).wait(1).to({scaleX:1.3118,scaleY:1.1934,x:-222.0279,y:99.132},0).wait(1).to({scaleX:1.32,scaleY:1.1937,x:-204.8297,y:99.0841},0).wait(1).to({scaleX:1.3281,scaleY:1.194,x:-187.6316,y:99.0362},0).wait(1).to({scaleX:1.3363,scaleY:1.1943,x:-170.4334,y:98.9884},0).wait(1).to({scaleX:1.3445,scaleY:1.1946,x:-153.2353,y:98.9405},0).wait(1).to({scaleX:1.3527,scaleY:1.1949,x:-136.0372,y:98.8926},0).wait(1).to({scaleX:1.3608,scaleY:1.1952,x:-118.839,y:98.8447},0).wait(1).to({scaleX:1.369,scaleY:1.1955,x:-101.6409,y:98.7969},0).wait(1).to({scaleX:1.3772,scaleY:1.1957,x:-84.4427,y:98.749},0).wait(1).to({scaleX:1.3854,scaleY:1.196,x:-67.2446,y:98.7011},0).wait(1).to({scaleX:1.3935,scaleY:1.1963,x:-50.0465,y:98.6533},0).wait(1).to({scaleX:1.4017,scaleY:1.1966,x:-32.8483,y:98.6054},0).wait(1).to({scaleX:1.4099,scaleY:1.1969,x:-15.6502,y:98.5575},0).wait(1).to({scaleX:1.4181,scaleY:1.1972,x:1.548,y:98.5097},0).wait(1).to({scaleX:1.4262,scaleY:1.1975,x:18.7461,y:98.4618},0).wait(1).to({scaleX:1.4344,scaleY:1.1977,x:35.9443,y:98.4139},0).wait(1).to({scaleX:1.4426,scaleY:1.198,x:53.1424,y:98.3661},0).wait(1).to({scaleX:1.4508,scaleY:1.1983,x:70.3405,y:98.3182},0).wait(1).to({scaleX:1.4589,scaleY:1.1986,x:87.5387,y:98.2703},0).wait(1).to({scaleX:1.4671,scaleY:1.1989,x:104.7368,y:98.2225},0).wait(1).to({scaleX:1.4753,scaleY:1.1992,x:121.935,y:98.1746},0).wait(1).to({scaleX:1.4835,scaleY:1.1995,x:139.1331,y:98.1267},0).wait(1).to({scaleX:1.4916,scaleY:1.1997,x:156.3313,y:98.0788},0).wait(1).to({scaleX:1.4998,scaleY:1.2,x:173.5294,y:98.031},0).wait(1).to({scaleX:1.508,scaleY:1.2003,x:190.7275,y:97.9831},0).wait(1).to({scaleX:1.5162,scaleY:1.2006,x:207.9257,y:97.9352},0).wait(1).to({scaleX:1.5243,scaleY:1.2009,x:225.1238,y:97.8874},0).wait(1).to({scaleX:1.5325,scaleY:1.2012,x:242.322,y:97.8395},0).wait(1).to({scaleX:1.5407,scaleY:1.2015,x:259.5201,y:97.7916},0).wait(1).to({scaleX:1.5489,scaleY:1.2017,x:276.7182,y:97.7438},0).wait(1).to({scaleX:1.557,scaleY:1.202,x:293.9164,y:97.6959},0).wait(1).to({scaleX:1.5652,scaleY:1.2023,x:311.1145,y:97.648},0).wait(1).to({scaleX:1.5734,scaleY:1.2026,x:328.3127,y:97.6002},0).wait(1).to({scaleX:1.5816,scaleY:1.2029,x:345.5108,y:97.5523},0).wait(1).to({scaleX:1.5897,scaleY:1.2032,x:362.709,y:97.5044},0).wait(1).to({scaleX:1.5979,scaleY:1.2035,x:379.9071,y:97.4565},0).wait(1).to({scaleX:1.6061,scaleY:1.2037,x:397.1052,y:97.4087},0).wait(1).to({scaleX:1.6143,scaleY:1.204,x:414.3034,y:97.3608},0).wait(1).to({scaleX:1.6224,scaleY:1.2043,x:431.5015,y:97.3129},0).wait(1).to({scaleX:1.6306,scaleY:1.2046,x:448.6997,y:97.2651},0).wait(1).to({scaleX:1.6388,scaleY:1.2049,x:465.8978,y:97.2172},0).wait(1).to({scaleX:1.647,scaleY:1.2052,x:483.0959,y:97.1693},0).wait(1).to({scaleX:1.6551,scaleY:1.2055,x:500.2941,y:97.1215},0).wait(1).to({scaleX:1.6633,scaleY:1.2057,x:517.4922,y:97.0736},0).wait(1).to({scaleX:1.6715,scaleY:1.206,x:534.6904,y:97.0257},0).wait(1).to({scaleX:1.6797,scaleY:1.2063,x:551.8885,y:96.9779},0).wait(1).to({scaleX:1.6878,scaleY:1.2066,x:569.0867,y:96.93},0).wait(1).to({scaleX:1.696,scaleY:1.2069,x:586.2848,y:96.8821},0).wait(1).to({scaleX:1.7042,scaleY:1.2072,x:603.4829,y:96.8343},0).wait(1).to({scaleX:1.7124,scaleY:1.2075,x:620.6811,y:96.7864},0).wait(1).to({scaleX:1.7205,scaleY:1.2077,x:637.8792,y:96.7385},0).wait(1).to({scaleX:1.7287,scaleY:1.208,x:655.0774,y:96.6906},0).wait(1).to({scaleX:1.7369,scaleY:1.2083,x:672.2755,y:96.6428},0).wait(1).to({scaleX:1.7451,scaleY:1.2086,x:689.4737,y:96.5949},0).wait(1).to({scaleX:1.7533,scaleY:1.2089,x:706.6718,y:96.547},0).wait(3));

	// easter_egg
	this.head = new lib.easteregg();
	this.head.name = "head";
	this.head.setTransform(-88,90.05,0.4,0.4,0,0,0,-125.9,8.5);

	this.timeline.addTween(cjs.Tween.get(this.head).wait(1).to({regX:-126,x:-78.95,y:90.2},0).wait(1).to({x:-69.85,y:90.35},0).wait(1).to({x:-60.75,y:90.5},0).wait(1).to({x:-51.65,y:90.65},0).wait(1).to({x:-42.6,y:90.8},0).wait(1).to({x:-33.5,y:90.95},0).wait(1).to({x:-24.4,y:91.1},0).wait(1).to({x:-15.3,y:91.25},0).wait(1).to({x:-6.2,y:91.45},0).wait(1).to({x:2.9,y:91.6},0).wait(1).to({x:12,y:91.75},0).wait(1).to({x:21.1,y:91.9},0).wait(1).to({x:30.2,y:92.05},0).wait(1).to({x:39.3,y:92.2},0).wait(1).to({x:48.4,y:92.35},0).wait(1).to({x:57.5,y:92.5},0).wait(1).to({x:66.6,y:92.65},0).wait(1).to({x:75.7,y:92.85},0).wait(1).to({x:84.8,y:93},0).wait(1).to({x:93.9,y:93.15},0).wait(1).to({x:103,y:93.3},0).wait(1).to({x:112.1,y:93.45},0).wait(1).to({x:121.2,y:93.6},0).wait(1).to({x:130.25,y:93.75},0).wait(1).to({x:139.35,y:93.9},0).wait(1).to({x:148.45,y:94.05},0).wait(1).to({x:157.55,y:94.25},0).wait(1).to({x:166.65,y:94.4},0).wait(1).to({x:175.75,y:94.55},0).wait(1).to({x:184.85,y:94.7},0).wait(1).to({x:193.95,y:94.85},0).wait(1).to({x:203.05,y:95},0).wait(1).to({x:212.15,y:95.15},0).wait(1).to({x:221.25,y:95.3},0).wait(1).to({x:230.35,y:95.45},0).wait(1).to({x:239.45,y:95.65},0).wait(1).to({x:248.55,y:95.8},0).wait(1).to({x:257.65,y:95.95},0).wait(1).to({x:266.75,y:96.1},0).wait(1).to({x:275.85,y:96.25},0).wait(1).to({x:284.95,y:96.4},0).wait(1).to({x:294.05,y:96.55},0).wait(1).to({x:303.15,y:96.7},0).wait(1).to({x:312.25,y:96.85},0).wait(1).to({x:321.35,y:97.05},0).wait(1).to({x:330.45,y:97.2},0).wait(1).to({x:339.55,y:97.35},0).wait(1).to({x:348.6,y:97.5},0).wait(1).to({x:357.7,y:97.65},0).wait(1).to({x:366.8,y:97.8},0).wait(1).to({x:375.9,y:97.95},0).wait(1).to({x:385,y:98.1},0).wait(1).to({x:394.1,y:98.25},0).wait(1).to({x:403.2,y:98.45},0).wait(1).to({x:412.3,y:98.6},0).wait(1).to({x:421.4,y:98.75},0).wait(1).to({x:430.5,y:98.9},0).wait(1).to({x:439.6,y:99.05},0).wait(1).to({x:448.7,y:99.2},0).wait(1).to({x:457.8,y:99.35},0).wait(1).to({x:466.9,y:99.5},0).wait(1).to({x:476,y:99.65},0).wait(1).to({x:485.1,y:99.85},0).wait(1).to({x:494.2,y:100},0).wait(1).to({x:503.3,y:100.15},0).wait(1).to({x:512.4,y:100.3},0).wait(1).to({x:521.5,y:100.45},0).wait(1).to({x:530.6,y:100.6},0).wait(1).to({x:539.7,y:100.75},0).wait(1).to({x:548.8,y:100.9},0).wait(1).to({x:557.9,y:101.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-611.5,41.1,2028.2,159.70000000000002);
// library properties:
lib.properties = {
	id: 'BCF0A9D5051CFC438EF55EE4D75FC5CD',
	width: 700,
	height: 200,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [],
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
an.compositions['BCF0A9D5051CFC438EF55EE4D75FC5CD'] = {
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