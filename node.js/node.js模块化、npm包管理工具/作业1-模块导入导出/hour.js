import Pointer from "./pointer.js";

export class Hour extends Pointer {
    constructor(time = 0) {
        super(24, time);
    }
}