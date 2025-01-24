import { Shape } from './shape'

class Square implements Shape {
    private sideLen: number;

    constructor(sideLen: number) {
        this.sideLen = sideLen;
    }

    public getArea(): number {
        return this.sideLen * this.sideLen;
    }

    public getSideLen(): number {
        return this.sideLen;
    }
}

export { Square };