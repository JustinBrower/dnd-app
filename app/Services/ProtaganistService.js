import { ProxyState } from "../AppState.js";


let transformedX = 0
let transformedY = 0




class ProtaganistService {

    async drawProtaganist() {
        let protagImage = `<img id="protag-elem" style="transform: translate(${transformedX}px, ${transformedY}px)" src="${ProxyState.protagObject.imgUrl}" alt="Protaganist">`
        document.getElementById('protag-origin').innerHTML = protagImage
    }
    async moveUp() {
        transformedY = transformedY - 35
        if (transformedY <= -666) {
            transformedY = -665
        }
        return transformedY
    }
    async moveDown() {
        transformedY = transformedY + 35
        if (transformedY >= 1) {
            transformedY = 0
        }
        return transformedY
    }
    async moveLeft() {
        transformedX = transformedX - 35
        if (transformedX <= -526) {
            transformedX = -525
        }
        return transformedX
    }
    async moveRight() {
        transformedX = transformedX + 35
        if (transformedX >= 526) {
            transformedX = 525
        }
        return transformedX
    }

    async drawSpellsList() {
        console.log("Your known Spells are ", ProxyState.mySpells);
    }
}

export const protaganistService = new ProtaganistService()