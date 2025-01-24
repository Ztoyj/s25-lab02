import { Shape } from './shape'

class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public getRadius(): number {
        return this.radius;
    }
}

export { Circle };