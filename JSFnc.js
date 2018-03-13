function sharp() {}
sharp.prototype.x = 0;
sharp.prototype.y = 0;

sharp.prototype.setCoord(x, y) {
    this.x = x;
    this.y = y;
}
sharp.prototype.area = function() {
    throw new Error('still don\'t have a form')
}

function square() {

}

square.prototype = new sharp();
square.prototype._proto_ = sharp.prototype;
square.prototype.area = function() {
    return this.x * this.y;
}

var sq = new square();
sg.setCoord(5, 5);
console.log(sq.area());