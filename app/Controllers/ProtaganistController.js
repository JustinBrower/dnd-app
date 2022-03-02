import { protaganistService } from "../Services/ProtaganistService.js";




async function _drawProtaganist() {
    try {
        await protaganistService.drawProtaganist()
    } catch (error) {
        console.log(error);
    }
}



export class ProtaganistController {
    constructor() {
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