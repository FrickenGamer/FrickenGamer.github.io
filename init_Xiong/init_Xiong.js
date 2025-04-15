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


(lib.paper = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("A9hzDIAAfNIAAEwIAACKAW+RpIAABbAp/RkIAABgAw3zDMAAAAmHAp/zDIAAejAj5zDMAAAAmHAC0zDMAAAAmHAJYzDMAAAAmHAQazDMAAAAmHAW+zDIAAeeAdizDMAAAAmHA3lzDMAAAAmH");
	this.shape.setTransform(64,4.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0000FF").ss(1,1,1).p("AAAzDMAAAAmH");
	this.shape_1.setTransform(-166,4.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EgvQgTDIUeAAIGaAAIF8AAIGuAAIG4AAIGFAAIGuAAIGkAAIHCAAIGkAAIGkAAIImAAMAAAAmHIomAAImkAAImkAAInCAAImkAAImuAAImFAAIm4AAImuAAIl8AAImaAAI0eAAgABfOiQAABTg6A6QgoAogzANQgYAGgaAAQhTAAg7g7Qg6g6AAhTQAAhTA6g7QA7g6BTAAQAaAAAYAGQAzAMAoAoQA6A7AABTgA7QOiQAABTg7A6Qg6A7hTAAQhTAAg7g7Qg6g6AAhTQAAhTA6g7QA7g6BTAAQBTAAA6A6QA7A7AABTgEAi7AOiQAABTg6A6Qg0A0hGAGQgKABgKAAQhTAAg6g7Qg7g6AAhTQAAhTA7g7QA6g6BTAAQAKAAAKABQBGAGA0AzQA6A7AABTg");
	this.shape_2.setTransform(5.5,4.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EAmrATEMAAAgmHMAAAAmHImkAAIAAhbIAABbImkAAMAAAgmHMAAAAmHInCAAMAAAgmHMAAAAmHImkAAMAAAgmHMAAAAmHImuAAMAAAgmHMAAAAmHImFAAIAAhgIAABgIm4AAMAAAgmHMAAAAmHImuAAMAAAgmHMAAAAmHIl8AAIAAiKIAACKImaAAMAAAgmHMAAAAmHI0eAAMAAAgmHIUeAAIGaAAIF8AAIGuAAIG4AAIGFAAIGuAAIGkAAIHCAAIGkAAIGkAAIImAAMAAAAmHgAcrOiQAABTA6A6QA7A7BTAAIAUgBQBGgGAzg0QA7g6AAhTQAAhTg7g7QgzgzhGgGIAA+eIAAeeIgUgBQhTAAg7A6Qg6A7AABTIAAAAgAkwOiQAABTA6A6QA7A7BTAAQAaAAAYgGQAzgNAogoQA6g6AAhTQAAhTg6g7QgogogzgNIAA+iIAAeiQgYgFgaAAQhTAAg7A6Qg6A7AABTIAAAAgA4oMUQg6A7AABTQAABTA6A6QA7A7BTAAQBLAAA3gwIAMgLQA6g6AAhTQAAhTg6g7IgMgLIAA/MIAAfMQg3gvhLAAQhTAAg7A6gEghgAOiQAABTA7A6QA6A7BTAAQBTAAA6g7QA7g6AAhTQAAhTg7g7Qg6g6hTAAQhTAAg6A6Qg7A7AABTIAAAAgAdlQvQg6g6AAhTQAAhTA6g7QA7g6BTAAIAUABQBGAGAzAzQA7A7AABTQAABTg7A6QgzA0hGAGIgUABQhTAAg7g7gAj2QvQg6g6AAhTQAAhTA6g7QA7g6BTAAQAaAAAYAFQAzANAoAoQA6A7AABTQAABTg6A6QgoAogzANQgYAGgaAAQhTAAg7g7gEgglAQvQg7g6AAhTQAAhTA7g7QA6g6BTAAQBTAAA6A6QA7A7AABTQAABTg7A6Qg6A7hTAAQhTAAg6g7gEAi7AOiIAAAAgABfOiIAAAAgA7QOiIAAAAgAg2LfIAAAAgEAgHALbIAAAAg");
	this.shape_3.setTransform(5.5,4.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.paper, new cjs.Rectangle(-298,-118.9,607,245.9), null);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pupils
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnHBWQgSgSAAgZQAAgaASgSQATgRAZgBQAaABASARQASASAAAaQAAAZgSASQgSATgaAAQgZAAgTgTgAFwABQgSgRAAgaQAAgZASgSQASgTAaABQAZgBASATQATASAAAZQAAAagTARQgSASgZAAQgaAAgSgSg");
	this.shape.setTransform(5.125,1.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({_off:true},1).wait(5).to({_off:false},0).wait(11));

	// eyes
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoUCfQgxgxAAhDQAAhDAxgxQAvgwBFABQBEgBAvAwQAxAxAABDQAABDgxAxQgvAvhEAAQhFAAgvgvgAEtBJQgvgvgBhEQABhEAvgvQAwgxBEAAQBFAAAvAxQAxAvAABEQAABEgxAvQgvAxhFAAQhEAAgwgxg");
	this.shape_1.setTransform(4.9,2.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AoUBvQgxgeAAgqQAAgpAxgeQAvgdBFAAQBEAAAvAdQAxAeAAApQAAAqgxAeQgvAdhEAAQhFAAgvgdgAEtAUQgvgbgBgnQABgmAvgcQAwgbBEgBQBFABAvAbQAxAcAAAmQAAAngxAbQgvAbhFABQhEgBgwgbg");
	this.shape_2.setTransform(4.9,3.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AoUBHQgxgMAAgRQAAgRAxgMQAvgNBFAAQBEAAAvANQAxAMAAARQAAARgxAMQgvAMhEAAQhFAAgvgMgAEtgPQgvgMgBgQQABgQAvgMQAwgLBEAAQBFAAAvALQAxAMAAAQQAAAQgxAMQgvALhFAAQhEAAgwgLg");
	this.shape_3.setTransform(4.9,2.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AEFg3QACAAAYAMQAeAQAOAHQAbAMAUABQAMABAcgCQAqAAApgQQAAAABQgnApEAZQATAdAzAHQASADBEAAQBOAAAKgCQAcgMA0gT");
	this.shape_4.setTransform(4.6625,3.625);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},6).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(9).to({_off:false},0).wait(3).to({_off:true},2).wait(11));

	// head
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AlCMJQgIgEgGgHQgNgOAEgUQABgIAIgTQAHgQAAgKQgBgJgEgQIgBgVIgEgRQgIgegKgTQgFgNgBgFQgCgLAGgKQAGgLALgDQAQgGAJALIAFAIIAEAJQADAFAHAIQAHAJACAFIAHATIAGAPQAFALAFAVQAIgCAKgCQA6gKBSgDICZgFQBegDA7gFIAFAAQACgQAHgNQAFgJAIgLIAWgbQAOgPAJgEQAHgEAIABQAIAAAGAFQAIAHgCAKQAAAGgHAMIgXAlQgHALgCAIQgEAQAMAZQAPAeAUAaQALAPADAIQADAKgDAMQgEALgJAHQgJAHgLABQgMAAgKgFQgMgHgNgXQgcgvgIgeIgCgLQgaAJghAEQgXADgwADIj2APQghACgRAEIgVAGIgQAEQgBATgJAYQgGASgGAJQgLANgNADIgGABQgGAAgGgCgABcHaQgXgCguAAIjegBQgWAAgLgCQgSgEgMgJQgTgQADgYQABgLAFgKQAGgKAKgFQAOgJAjgBIEfgFIgIgxQgJg0gMgbIgQgfQgKgTgEgNIgEgRQgCgKgDgGQgDgFgHgJIgJgOQgKgQAHgVQAHgUAQgJQAQgJAVAEQAUAEANAPQAJAKAHAPIAKAcQANAoASAnQARAjADAPQAEAQAEAhQADAQALAaQANAeADAMQAHAYgDAVQgDAYgQAOQgPAOgbADIgIAAQgOAAgbgCgAiWjxQgzgEgpgTQgZgMgvgfIgqgWIgrgXQgTgKg4gnQgugggUgUIgOgOQgJgIgIgEQgOgGgggCQgjgHgWghQgWgfABgmQABgXAKgdQAGgRAPggQAOgfALgOQAQgSAXgJQAWgJAZAAQAlAAAeAWQAgAWAFAiIABAXQABAOADAIQAFANAQAQQAnAnA6AnQAkAYBHAoQAsAYAUAHIAqANQAZAIAPAKQAYAPAMAaQANAagDAbQgCAXgMAVQgNAUgUALQgYANgkAAIgRgBgACEkmQgagMgOgXQgPgXAAgdQgBgcAOgYQANgWAagSQAQgLAigRIB/hAQAsgWAWgMQAbgQANgPQALgNASgcQAWggAjgSQAlgSAlACQAnACAhAYQAhAYALAkQAIAXgBAhQgBAwgPAhQgTAqglAPQgqASgugWQgvAkhVAoQh0A2gXANIgmAUQgWALgTACIgLABQgVAAgVgKg");
	this.shape_5.setTransform(0.4533,18.7114);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AogMtQjhlRAAncQAAnbDhlSQDilQE+AAQE/AADiFQQDhFSAAHbQAAHcjhFRQjiFRk/AAQk+AAjilRgAlRK9QgMAEgGAKQgGALADAKQAAAGAGAMQAJAUAJAeIAEAQIABAVQAEARAAAIQABAKgHARQgJATAAAHQgEAUANAOQAFAIAJADQAJADAJgBQANgDALgOQAFgJAHgRQAIgZABgTIARgDIAVgHQAQgDAigDID2gOQAvgDAYgEQAggEAbgIIACALQAIAeAcAuQANAXAMAHQAKAGALgBQAMgBAJgHQAJgHAEgLQADgMgDgKQgDgHgMgQQgTgagPgeQgNgZAFgPQABgJAIgKIAXgmQAGgMABgGQACgJgJgHQgGgGgHAAQgIAAgHADQgKAEgOAPIgWAbQgIALgEAJQgHANgCAQIgFABQg7AFhfADIiYAEQhSADg7ALQgJABgIACQgFgUgFgMIgGgPIgHgTQgDgFgGgJQgIgIgCgFIgEgIIgFgIQgGgIgKAAQgEAAgFACgAARDrQgQAIgGAVQgHAUAJARIAJANQAIAKACAEQAEAGACALIAEAQQADAOALASIAQAgQAMAbAJAzIAIAyIkfAEQgjABgPAJQgJAFgGAKQgFALgCALQgCAXATAQQAMAKARADQAMACAWAAIDeABQAuAAAWACQAkADAOgBQAbgDAPgOQAQgOADgYQACgVgGgYQgEgMgMgeQgLgagDgQQgFghgDgQQgDgOgRgkQgSgngOgoIgKgbQgGgQgJgKQgNgPgUgEIgNgBQgNAAgMAHgApSpGQgYAJgPATQgMANgOAfQgOAggGARQgKAdgBAXQgBAmAVAfQAXAhAiAHQAhACAOAGQAIAEAIAIIAPAPQATATAuAhQA5AmATAKIAqAXIAqAWQAvAfAaAMQApATAyAEQAxADAdgPQATgLANgUQANgVACgWQACgcgMgZQgMgbgYgPQgPgJgZgJIgqgMQgUgIgsgYQhIgogjgYQg7gngngnQgPgQgFgNQgEgIAAgOIgCgXQgEgigggWQgfgWgkAAQgZAAgWAJgAH3oWQgjASgXAgQgRAcgLANQgOAPgbAQQgVANgsAVIh/BAQgiARgQAMQgaARgOAWQgOAYACAdQAAAcAOAXQAPAXAaAMQAaAMAbgDQASgCAWgLIAngUQAXgNB0g2QBUgoAwgkQAtAXArgTQAkgPAUgqQAPghABgwQABgggIgYQgMgkgggYQgigYgmgCIgHAAQgiAAghAQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(25));

	// body
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1,1,1).p("AC5tOQgCAEgCADQgCACgBACQAKAEAKAEQBDAfArBSQAXArAsCHQhLAZgmANQhDAWgoAVQhPApggBEQgEAGgCAHQACgdAAgeQgDhYgihaQgEgOgLgbACytDIAAABQgDADgCAEQg3BWgeBdQgFAPgFAOQgBAFgBAEQgcBlgEB1QgBAWABAYQAAAZABAZIAKAAQAAgKACgFQACgIAGgHAARkUQgRA1gDBqQgBAjAACLQAABNgBCKQACB2ASBmQALA6AKCHQANBwAkAZIAAAdQAAgGAFgIQAFgKAAgFAhyswQAAgGAAgFQABgQADgHQgMAKgQANQgQAMgTANQhFAxgRANQhqBRgJBJIAAAUQCdAhBeBIQBXBDA1B2QAEAKAEAKQADgPAEgPQAAgCAAgCIgFgHQgBAFgBAGIAHAAIADAAIgDgEQAEgVACgWQgHARgEATAgNplQgPgjgZg2QgehEgQgwQgBgEAAgDQgBgBAAgBQgCgEgBgFQAFAGAFADQAEADACACQAKAGAOAA");
	this.shape_7.setTransform(-7.5,209.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ALXryIACAAIAAABQA/AiBGAaQArAQBbAcQAAABACABQABABAAADQgjCXgIAmQgGgCh7gmQhGgXgugCIgBAAIgBAAQgDAAgDAAQgCAAgCAAIiyVUIw3AAIij0YIglkiIJAhfIAZAAIAMAAIAHAAIAHAAICgAAQACAIANAaQAMAZAAAIQAAANgZARQgMAHgJAGQgOAKgJAFQgGgGgMgRIAAgBQgLgPgQgYQALgKALgRQAFgJALgRALXryQABABABAAIgeDpIAAABAAdtMIBkAAIAZAAII9BaAAOrZIAFAAQAEAnADATQADAUAFAPQAEAMAGAKAr4rtQgrANhSASQhKARgiAMQAAAFgBALQgCAMgCACIAAC+QAfACBmAAQAaAAAwAEQAvAEAXAAAgfrmQABABAAAGQAAAEgNAvQgLArgDALQAAABABAB");
	this.shape_8.setTransform(-3.125,211.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABMLYQgOgGgFgKQgHgMAFgRQAEgNAMgLQAMgLAKABQAGABAAgDQASAEAGAFQAEAFAFAJQAFANAAAMQgBAPgIAJQgIALgQADIgHAAQgLAAgKgFgAA8I+QgOgDgJgKQgMgPAEgVQACgLAIgIQAIgJAKgBQAKgBACgCQAOAAAMAKQALAJADAOQADAOgHANQgHANgNAGQgHADgIAAIgKgBgABUFxQgRgEgIgEQgLgGgGgMQgHgNADgNQACgNALgJQAKgJANgBIAFgCQANABAKAHQAKAIAFALQAEALgCANQgDAMgJAIIgHAHQgEAEgBADIgBAIQgBAFgEABQgHgFACgIgABNCtQgNAAgKgIQgGgFgEgHQgHgMADgOQADgMAKgIQAKgIAMgBQAFAAgBgDQANABAKAIQAKAIAEAMQADALgEANQgFAMgKAHQgJAGgMAAIgCAAgABCg4IgIgCIgGgFQgQgVAGgWQADgLAKgIQAJgHAMAAQABAAABAAQAAAAABAAQAAgBAAAAQABAAgBgBQAPABAMAMQALALAAAPQAAAPgLAMQgLAMgOABIgDAAIgMgBgAhYpfQgfhEgPgwIgCgHIAGgCIAHAFQAKAGANAAQgNAAgKgGIAAgFICgAAQACAIANAaQAMAZAAAIQAAANgZARIgVANIAVgNQAZgRAAgNQAAgIgMgZQgNgagCgIIBkAAQg3BWgeBdIgKAdQgFgPgDgUIgHg6IgFAAIgEgFIgXAPQgGgGgMgRIAAgBIgbgnQALgKALgRIAQgaIgQAaQgLARgLAKIAbAnIAAABIABAHQAAAEgNAvIgOA2IgnhZg");
	this.shape_9.setTransform(-3.9479,200.2985);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AouNNIij0YIglkiIJAhfIAZAAIAMAAIAHAAIAHAAIAAAFIgHgFIgGACIACAHQAPAwAfBEIAnBZIAOg2QANgvAAgEIgBgHQAMARAGAGIAXgPIAEAFIAFAAIAHA6QADAUAFAPIgCAJQgcBlgEB1IAAAeIAAAQQAghEBPgpQAogVBDgWIBxgmQgsiHgXgrQgrhShDgfII9BaIACABIgCgBIACAAIAAABQA/AiBGAaQArAQBbAcIACACQAAAAAAAAQAAABABAAQAAABAAABQAAAAAAABQgjCXgIAmIiBgoQhGgXgugCIgBAAIgBAAIgKgBIAejpIgeDpIAAABIiyVUgAApNCQAAgGAFgIQAFgKAAgFQAAAFgFAKQgFAIAAAGIAAgdQgkgZgMhwQgKiHgLg6QgThmgCh2IABjXQAAiLABgjQAEhqARg1Qg1h2hYhDQhdhIieghIAAgUQAJhJBqhRIBWg+IAjgZIgjAZIhWA+QhqBRgJBJIAAAUQCeAhBdBIQBYBDA1B2QgRA1gEBqQgBAjAACLIgBDXQACB2ATBmQALA6AKCHQAMBwAkAZgAA/IjQgMALgEANQgFARAHAMQAFAKAOAGQANAHAPgCQAQgDAIgLQAIgJABgPQAAgMgFgNQgFgJgEgFQgGgFgSgEQAAADgGgBIgCAAQgKAAgKAKgAAxGAQgKABgIAJQgIAIgCALQgEAVAMAPQAJAKAOADQANAEAMgGQANgGAHgNQAHgNgDgOQgDgOgLgJQgMgKgOAAQgCACgKABgABCCtQgNABgKAJQgLAJgCANQgDANAHANQAGAMALAGQAIAEARAEQgCAIAHAFQAEgBABgFIABgIQABgDAEgEIAHgHQAJgIADgMQACgNgEgLQgFgLgKgIQgKgHgNgBIgFACgABDgNQgMABgKAIQgKAHgDAMQgDAOAHAMQAEAHAGAFQAKAIANAAQANABAKgHQAKgHAFgMQAEgNgDgLQgEgMgKgHQgKgIgNgBQABADgFAAgAAvjtQgKAIgDALQgGAWAQAVIAGAFIAIACQAIACAHgBQAOgBALgMQALgMAAgPQAAgPgLgLQgMgMgPgBQAAABAAAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgCAAQgKAAgJAHgAgSkRIAHgeIADAAIgDgEIAGgrIgGArIADAEIgDAAIAAgEIgFgHIgCALIAHAAIgHAeIgIgUIAIAUgAALk5QAAgKACgFQACgIAGgHQgGAHgCAIQgCAFAAAKIgKAAIgBgyIABAyIAKAAgAgQk6QAEgTAHgRIAFgNIgFANQACgZAAgZIAAgJQgDhYgihaIgQgpIAQApQAiBaADBYIAAAJQAAAZgCAZQgHARgEATgAg4p0IgBgCIABACgAietBIABgLIgBALgAiQtKIgBgCIABACgAgLkvgAgSkvIACgLIAFAHIAAAEgAAAl7IAAgeQAEh1AchlIACgJIAKgdQAehdA3hWIAZAAQBDAfArBSQAXArAsCHIhxAmQhDAWgoAVQhPApggBEIAAgQgAAspmQgGgKgEgMQAEAMAGAKgAsXnPQgwgEgaAAQhmAAgfgCIAAi+QACgCACgMIABgQQAigMBKgRQBSgSArgNIACAAIAlEiQgXAAgvgEgACatMg");
	this.shape_10.setTransform(-3.125,211.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(25));

	// neck
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00CCFF").s().p("AiCCDIAAkFIEFAAIAAEFg");
	this.shape_11.setTransform(-4.925,115.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104,-115,201.8,412);


(lib.button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("As4sQIAA20IZ7AAIAAW0IbCAAIAAWzI7CAAIAAYiI57AAIAA4iI7MAAIAA2zIbMAAIZ7AAANDKjI57AA");
	this.shape.setTransform(7.5,25.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgM4AjFIAA4iI7MAAIAA2zIbMAAIZ7AAI57AAIAA20IZ7AAIAAW0IbCAAIAAWzI7CAAI57AAIZ7AAIAAYigANDKjg");
	this.shape_1.setTransform(7.5,25.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(1,1,1).p("AuJtcIAA5CIcdAAIAAZCIdrAAIAAZAI9rAAIAAa7I8dAAIAA67I91AAIAA5AId1AAIcdAAAOULkI8dAA");
	this.shape_2.setTransform(7.55,25.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EgOIAmfIAA66I91AAIAA5BId1AAIccAAI8cAAIAA5CIccAAIAAZCIdqAAIAAZBI9qAAI8cAAIccAAIAAa6gAOULlg");
	this.shape_3.setTransform(7.55,25.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0000FF").ss(1,1,1).p("AuJtcIAA5CIcdAAIAAZCIdrAAIAAZAI9rAAIAAa7I8dAAIAA67I91AAIAA5AId1AAIcdAAAOULkI8dAA");
	this.shape_4.setTransform(7.55,25.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgOIAmfIAA66I91AAIAA5BId1AAIccAAI8cAAIAA5CIccAAIAAZCIdqAAIAAZBI9qAAI8cAAIccAAIAAa6gAOULlg");
	this.shape_5.setTransform(7.55,25.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(1,1,1).p("ANDsQIbCAAIAAWzI7CAAIAAYiI57AAIAA4iI7MAAIAA2zIbMAAIAA20IZ7AAgAs4sQIZ7AAANDKjI57AA");
	this.shape_6.setTransform(7.5,25.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("EgM4AjFIAA4iIZ7AAIAAYigANDKjI57AAI7MAAIAA2zIbMAAIAA20IZ7AAIAAW0I57AAIZ7AAIbCAAIAAWzg");
	this.shape_7.setTransform(7.5,25.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274.9,-221.7,564.9,494.59999999999997);


(lib.walking = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {walking:0,standing:8};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		// this.stop();
		
		this.gotoAndPlay("walking");
	}
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(1));

	// Front_ARMS
	this.text = new cjs.Text("ARM", "bold 42px 'Tahoma'", "#33CCFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 53;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-40.95,-130.35,0.9999,0.9999,59.9991);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2).to({rotation:90.0017,x:-57.9,y:-94.95},0).wait(2).to({rotation:120.0002,x:-78.8,y:-101},0).wait(2).to({rotation:90,x:-54.3,y:-116.4},0).wait(4));

	// heads
	this.instance = new lib.head();
	this.instance.setTransform(1,-325.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:-311.9},0).wait(2).to({regY:-0.1,y:-325},0).wait(2).to({x:3.3,y:-335.05},0).wait(4));

	// Back_ARMS
	this.text_1 = new cjs.Text("ARM", "bold 42px 'Tahoma'", "#0000FF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 53;
	this.text_1.lineWidth = 100;
	this.text_1.parent = this;
	this.text_1.setTransform(79.15,-105.05,1,1,119.9989);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(2).to({rotation:90,x:107.35,y:-106.75},0).wait(2).to({scaleX:0.9999,scaleY:0.9999,rotation:59.9998,x:125.85,y:-126.3},0).wait(2).to({rotation:83.9743,x:106.55,y:-132.6},0).wait(4));

	// leg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgZI9QgSgGgQgOQgagYgcgsIgwhJQgSgZgFgJQgMgUACgSQAAgRAOgSQAHgKAUgUQAxgwBZhyQBVhvA1gxQhjjYhVjgQgLgdAAgQQAAgMAFgKQAFgLAKgFQAQgJAPAKQANAJAJAeQAcBbA7CEIBiDcQAKAYgBAQQgBATgXAbIkEE/QgLAOAAAIQgBAKANAQIBTBiQAaAgAFAUQAFAPgFAPQgEAQgMAIQgJAFgKAAQgHAAgJgCg");
	this.shape.setTransform(-27.6497,10.5868);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglHSQgNgLgLgcQgyh+gcinQgRhkgTjKIgRi2QgFg6ADgZQACgSAJgMQAJgPAOAAQASAAALAUQAFANABAXIAFBOQAHB0AGArIAHA9IAOBhQASCGANBCQAWBvAhBUQAFAQAIAFQALAGAWgLQAlgQAegIQAegJASAEQAMACAKAIQAKAJACALQADAPgKANQgKANgPAGQgLAFgSADIgfAGQgMAEgXAJQgYALgLADQgRAGgPAAQgWAAgQgNg");
	this.shape_1.setTransform(27.0029,1.8374);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AizFgQgTgEgMgOQgSgVgDguQgEgyAEhiQABgdALgLQAKgKAeAAIEqAFQhUh9gxiQQgRgzgKgRIgNgWQgHgMgCgKQgDgNAEgLQAEgNALgFQAPgHARALQALAHAKARQAQAZAQAmIAaBDQA2CHBXBwQAWAcAEAOQAEANgCAMQgCAOgJAIQgIAHgNACQgHACgQAAQjbAEhugGQgFA8AOA4QAHAaAAANQAAAWgMAMQgJAKgPAAIgIgBg");
	this.shape_2.setTransform(-24.7417,-12.736);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA4ITQgOgBgOgHQgfgPgrguQgVgWgKgNQgPgVgEgUQgFgVAHgmQAZiVAxiXQAPgsALgVIAKgRQAFgKACgIQADgMgEgYQgViOgZiLQgLg7gJgdQgHgYAEgLQAFgNARgDQAPgCAMAIQASANALAlQAJAgAJA2IArDuQAIAqgBATQgBAcgMAjIgZA8QgZA+gUBRQgMAzgSBgQgEAWABALQACAfAeAYQAHAGAYAOQAUANAKAKQAOAOADAUQADAVgOAMQgKAIgPAAIgBAAg");
	this.shape_3.setTransform(13.2767,4.048);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("ACGIKQgMgCgKgIQgOgJgSgcIhRh/QgYgjgBgWQgCgUAOgiIB8k8QAKgcgDgOQgCgJgLgNIgJgJIgwgwIjTjTQgRgRgIgLQgMgQgDgQQgCgTAMgRQANgRARAEQAMACAQAQIDXDQIA4A3IAVAVQAdAcALAUQANAcgFAnQgDAagOAqQgwCPg/CSQgLAZADANQADAJAMAQQAtA2AgA6QAQAdABARQABANgEAMQgGAMgKAGQgIAEgKAAIgGAAg");
	this.shape_4.setTransform(-4.154,5.5451);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ai6I9QgSgEgMgOQgKgMgGgSIgJgjQgLgygUgwQgMgcACgPQABgQAVgbID/k+QAmgxARgYQAegpASgkQAQghAUg4IAxAwIAJAKQgMAegMAZQgVAtgkAyQgXAfguA5Ij4E3IA1CMQATAxgUAUQgJAJgOAAIgJgBgACnlZIBGjOQAHgTAJgCQAIgCAHAGQAHAFADAJQAHASgCAYQgCAPgIAbIgtChIgGATIg3g3g");
	this.shape_5.setTransform(-12.9254,10.5811);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AFTFqQgHgEgOgKQgOgKgHgEQgJgFgPgCIgDAHQgxgBgsAMQgaAHgNAAQgWABgKgNQgHgJgDgVIgKg0IgQhwIgPh6QgMhbAFgxQgggKgqgcIhCgrIgFgEQgSgKgYgKQgpgTg9gTIhogjQgugPABgaQAAgOAOgJQANgJAQACQAMABAQAHIAaANQAdAPA4ANQA/APAYAKIARAIQATAJAYAPIAZAQQA3AlAbANIAdAOQAQAIAIALQAKAOADAVQACALAAAdQgBA7AQB1IAJBFQAIBCAMAmQAHgGAKgCQAIgBALABIASACIAgACIAgADQAvAHAoAdQASAOAFALQAKASgKANQgHAKgOACIgEAAQgLAAgLgFg");
	this.shape_6.setTransform(15.9561,-8.0041);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AAAgCIADABIgFAEIACgFg");
	this.shape_7.setTransform(27.975,-105.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjHIUQgOgEgIgNQgHgKgDgPQgCgIgCgUQgGg6gUgxIgLgeQgFgRAAgOQAAgWAOgXQAIgQAUgZQBbhxBkiYQA7haBzi7IAnhCQAZALARAKIAGADIggA5QgWAngcAsIg3BbQhUCLgsBBQhLBxhGBSQgQAUgCANQgCANAOAcQAQAgAJAqQAFAbAHAzQAEAlgQAMQgHAFgIAAQgFAAgFgCgADNnOIATglQAKgWAKgHQAIgFAKAAQAJABAFAIQAGAJgJAUIgZA6QgZgPgSgKg");
	this.shape_8.setTransform(-14.9759,9.8439);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAwIWIhXgDQglgBgMgPQgHgIgBgPQgBgIABgSIgBhXQAAg2AIghQAMglAEgUIAGghQADgUAGgMQAOgeAGgPQAHgTgDgnQgEgoAGgSQAEgKAKgRQAMgTADgIQAIgWgBgsIgDl1QgBgWAGgLQADgIAHgEQAIgFAIABQAVAEAAAnIAAGAQAAAdgBAPQgDAYgHASIgOAZQgKAQgDALQgFATACAlQADAmgFARQgEARgPAfQgHAPgJAnIgKAjQgGAVgCAOQgGAeACA1QADA9gCAWQA5gCA3AHQAYACAGAMQADAHgEAJQgEAJgIAEQgKAFgSAAIgHAAg");
	this.shape_9.setTransform(5.2052,9.9154);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgeI9QgbgHgNgQQgPgTABgtQABibAAibQAAhJgGgjIgJgkIgIgjQgHgggBgpQgBgYAAgxIADkeQAAgfgBgQQgDgagHgTIgIgWQgDgNAFgIQAFgHAKgCQAJgBAIAEQANAGAKAVQAHATADAZQABAPAAAeIgBFKQAABAAEAfQAEAYAKAwQARBbgDCVQgEC8AEA1QAWAGAMACQAUACAPgFQAJgCARgKQARgKAJgCQAPgFAOAHQAPAHAAAOQABAPgVAOQggAVgmAGQgOACgNAAQgXAAgXgHg");
	this.shape_10.setTransform(-18.0661,7.4521);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_7},{t:this.shape_10},{t:this.shape_9}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-449.9,304,518);


(lib.printer = function(mode,startPosition,loop,reversed) {
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

	// printer
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AvnldIAA5oMAktAAAIAABsIAAMTIAAN/IYsAAMAAAAiNI4sAAMAAAgiNAvnfGI+KAAMAAAg4jIM0AAIFUDwIAAQQIMCAAgAlTzBIB9AAIAAAtIh9AAgAoMzBIB9AAIAAAtIh9AAgAq+zBIB9AAIAAAtIh9AAgAVGxGI2BAAIAAn5IkMkaIaNAAAuI5RILhAAIAAIBIrhAAgAtb4fIKFAAIAAElIqFAAgAtgzBIB9AAIAAAtIh9AAgAVGfGMgktAAA");
	this.shape.setTransform(-21.975,-15.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlCCSIAAkjIKFAAIAAEjg");
	this.shape_1.setTransform(-75.75,-158.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AlwEAIAAn/ILhAAIAAH/gADEC9IB9AAIAAgtIh9AAgAALC9IB9AAIAAgtIh9AAgAilC9IB9AAIAAgtIh9AAgAlIC9IB9AAIAAgtIh9AAgAlDBWIKEAAIAAkjIqEAAg");
	this.shape_2.setTransform(-75.625,-152.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("Ao6GKIAAn4IkMkaIaNgBIAAMTg");
	this.shape_3.setTransform(29.1125,-164.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AVGfGMAAAgiNMAAAAiNMgktAAAMAAAgkjMAAAAkjI+KAAMAAAg4jIM0AAIFUDwIAAQQIMCAAIAA5oMAktAAAIAABsI6NAAIEMEaIAAH5IWBAAIAAN/IYsAAMAAAAiNgAuIxQILhAAIAAoBIrhAAgAlTyUIAAgtIB9AAIAAAtgAoMyUIAAgtIB9AAIAAAtgAq+yUIAAgtIB9AAIAAAtgAtgyUIAAgtIB9AAIAAAtg");
	this.shape_4.setTransform(-21.975,-15.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AvnldIAA5oMAktAAAIAABsIAAMTIAAN/IYsAAMAAAAiNI4sAAMgktAAAI+KAAMAAAg4jIM0AAIFUDwIAAQQIMCAAMAAAAkjAlTzBIB9AAIAAAtIh9AAgAoMzBIB9AAIAAAtIh9AAgAq+zBIB9AAIAAAtIh9AAgAVGxGI2BAAIAAn5IkMkaIaNAAAuI5RILhAAIAAIBIrhAAgAtb4fIKFAAIAAElIqFAAgAtgzBIB9AAIAAAtIh9AAgAVGfGMAAAgiN");
	this.shape_5.setTransform(-21.975,-15.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_5}]},23).wait(1));

	// paper
	this.instance = new lib.paper();
	this.instance.setTransform(57.4,-86.95,0.1537,0.2389,0,-15.9323,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:5.5,regY:4,skewX:-15.9352,x:23.8,y:-81.05},0).wait(1).to({x:-9.5,y:-76.35},0).wait(1).to({x:-40,y:-72.15},0).wait(1).to({x:-64.9,y:-62.85},0).wait(1).to({x:-35.65,y:-61.7},0).wait(1).to({x:-8.35,y:-61.5},0).wait(1).to({x:17.55,y:-61.45},0).wait(1).to({x:41.75,y:-61.5},0).wait(1).to({x:64.4,y:-61.6},0).wait(1).to({x:85.5,y:-61.7},0).wait(1).to({x:105.05,y:-61.85},0).wait(1).to({x:123.05,y:-62},0).wait(1).to({x:139.45,y:-62.15},0).wait(1).to({x:154.35,y:-62.3},0).wait(1).to({x:167.6,y:-62.4},0).wait(1).to({x:179.25,y:-62.55},0).wait(1).to({x:189.65,y:-62.7},0).wait(1).to({x:198,y:-62.8},0).wait(1).to({x:205.55,y:-62.9},0).wait(1).to({x:211.1,y:-62.95},0).wait(1).to({x:214.7,y:-63.05},0).wait(1).to({x:216.75},0).wait(1).to({x:217.45,y:-63.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315.9,-215.9,588.9,399.9);


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

	// Layer_1
	this.printer_mc = new lib.printer();
	this.printer_mc.name = "printer_mc";
	this.printer_mc.setTransform(2656.7,-336.05,1,1,0,0,0,-22,-16);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ECWBhUXMEsAAAAMAAACovMksAAAAMksAAAAECWBhUXMAAACovEnCAhUXMEsAAAAMAAACovMksAAAAgEiV/hUXMEsAAAA");
	this.shape.setTransform(2880.075,-539.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3C00F9","#FF0106"],[0,1],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_1.setTransform(4800.175,-539.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00CC23","#FF3232"],[0,1],-960,0,960.1,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_2.setTransform(2880.125,-539.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#000000"],[0,1],-960,0,960,0).s().p("EiV/BUYMAAAiovMEr/AAAMAAACovg");
	this.shape_3.setTransform(959.975,-539.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.printer_mc}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(-1,-1081,5762.2,1082.1), null);


// stage content:
(lib.init_Xiong = function(mode,startPosition,loop,reversed) {
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
		
		this.background_mc.printer_mc.addEventListener("click",handleClickPrinter);
		this.plus_btn.addEventListener("click",handleClickStartButton);
		
		var root = this;
		var speed = 100;
		
		function handleClickStartButton(event){
			var peak_snd = createjs.Sound.play("peak");
			root.play();
		}
		
		function handleClickPrinter(event){
			var whoosh_snd = createjs.Sound.play("whoosh");
			console.log("it will play once only");
			root.background_mc.printer_mc.play();
			root.background_mc.printer_mc.removeEventListener("click",handleClickPrinter);
		}
		
		function handleKeyDown(event){
			//console.log(root.background_mc.x);
			if (root.BlueGuy_mc.currentFrame == 9){
				root.BlueGuy_mc.gotoAndPlay("walking");
			}
			if (event.keyCode == 39 && root.background_mc.x > -3900.05){
				root.BlueGuy_mc.scaleX = 1;
				root.background_mc.x = root.background_mc.x - speed;
			}
			if (event.keyCode == 37 && root.background_mc.x < -0.05){
				root.BlueGuy_mc.scaleX = -1
				root.background_mc.x = root.background_mc.x + speed;
			}
		}
		
		function handleKeyUp(event){
			root.BlueGuy_mc.gotoAndPlay("standing")
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.title_txt = new cjs.Text("This is my Final Project", "bold 42px 'Tahoma'");
	this.title_txt.name = "title_txt";
	this.title_txt.textAlign = "center";
	this.title_txt.lineHeight = 53;
	this.title_txt.lineWidth = 1544;
	this.title_txt.parent = this;
	this.title_txt.setTransform(908.25,178.1);

	this.timeline.addTween(cjs.Tween.get(this.title_txt).to({_off:true},1).wait(1));

	// buttons
	this.plus_btn = new lib.button();
	this.plus_btn.name = "plus_btn";
	this.plus_btn.setTransform(1395,760.25,0.3328,0.3638);
	new cjs.ButtonHelper(this.plus_btn, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.plus_btn).to({_off:true},1).wait(1));

	// walking
	this.BlueGuy_mc = new lib.walking();
	this.BlueGuy_mc.name = "BlueGuy_mc";
	this.BlueGuy_mc.setTransform(716.75,690.75,1,1,0,0,0,-2.9,-186.4);
	this.BlueGuy_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.BlueGuy_mc).wait(1).to({_off:false},0).wait(1));

	// background
	this.background_mc = new lib.background();
	this.background_mc.name = "background_mc";
	this.background_mc.setTransform(-0.05,-0.05,1,1,0,0,0,-0.1,-1080);
	this.background_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.background_mc).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(959.5,539.5,4801.3,541);
// library properties:
lib.properties = {
	id: '03B1B45FE414FE41B49234C0CE0F7F48',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/whoosh.mp3?1744331613789", id:"whoosh"},
		{src:"sounds/peak.mp3?1744331613789", id:"peak"}
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
an.compositions['03B1B45FE414FE41B49234C0CE0F7F48'] = {
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