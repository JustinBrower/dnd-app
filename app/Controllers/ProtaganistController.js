import { ProxyState } from "../AppState.js";
import { protaganistService } from "../Services/ProtaganistService.js";

let inCombat = false


async function _drawProtaganist() {
    try {
        await protaganistService.drawProtaganist()
    } catch (error) {
        console.log(error);
    }
    document.body.style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ51K06rKPi2n9hcazYEdpMXk7zLN1gy6dslSAMMxg0K_8hMzUBFpMVJs7YfRspMBzUiw&usqp=CAU)`
}


export class ProtaganistController {
    constructor() {
        console.log("ProtaganistController Loaded...");
        _drawProtaganist()
    }
}

document.addEventListener("keydown", function (event) {
    if (inCombat == false) {
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
        if (event.code === 'KeyP') {
            protaganistService.drawSpellsList()
        }
    }
    _drawProtaganist()
});