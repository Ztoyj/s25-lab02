import { Shape } from './shape'

class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }

    public getArea(): number {
        return this.height * this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public getWidth(): number {
        return this.width;
    }
}

export { Rectangle };