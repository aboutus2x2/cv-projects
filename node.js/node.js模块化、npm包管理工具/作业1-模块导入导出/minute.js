import Pointer from "./pointer.js";

class Minute extends Pointer {
    constructor(time = 0) {
        super(60, time);
    }
}

export {
    Minute
}