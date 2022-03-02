import { ProxyState } from "../AppState.js";
import { protaganistService } from "../Services/ProtaganistService.js";




async function _drawProtaganist() {
    try {
        await protaganistService.drawProtaganist()
    } catch (error) {
        console.log(error);
    }
    console.log("we drew the protag");
}



export class ProtaganistController {
    constructor() {
        console.log("ProtaganistController Loaded...");
        console.log("On startup protagImage is...", ProxyState.protagObject.imgUrl);
        _drawProtaganist()
    }
}

document.addEventListener("keyup", function (event) {
    if (event.code === 'KeyW') {
        protaganistService.moveUp()
    }
    if (event.code === 'KeyS') {
        protaganistService.moveDown()
    }
    if (event.code === 'KeyA') {
        protaganistService.moveLeft()
    }
    if (event.code === 'KeyD') {
        protaganistService.moveRight()
    }
    _drawProtaganist()
});