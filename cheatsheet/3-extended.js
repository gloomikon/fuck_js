'use strict';

const Point = class{
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
};

const serializable = Category => class extends Category {
	toString() {
		return `[${this.x}, ${this.y}]`;
	}
};

const movable = Category => class extends Category {
	move(x, y) {
		this.x += x;
		this.y += y;
	}
};

//Usage

const PointEx = serializable(movable(Point));

const point1 = new PointEx(6, 9);
console.log(point1.toString());
point1.move(4, 1);
const { x, y } = point1;
console.log(x, y);