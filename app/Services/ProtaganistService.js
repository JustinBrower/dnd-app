import { ProxyState } from "../AppState.js";


let transformedX = 0



class ProtaganistService {

    async drawProtaganist() {
        let protagImage = `<img id="protag-elem" src="${ProxyState.protagObject.imgUrl}" alt="Protaganist">`
        document.getElementById('protag-origin').innerHTML = protagImage
    }
    async moveUp() {
        console.log("just pretend you moved Up");
    }
    async moveDown() {
        console.log("just pretend you moved Down");
    }
    async moveLeft() {
        console.log("just pretend you moved Left");
    }
    /// doesnt work
    async moveRight() {
        console.log("Atempt move Right");
        let protagStyle = ''
        console.log("protagStyle is...", protagStyle);
        console.log("x coord is...", transformedX);
        transformedX = transformedX + 15
        console.log("x coord is NOW...", transformedX);
        protagStyle = `style="transform: translateX(${transformedX}px);"`
        document.getElementById('protag-elem').innerText += protagStyle
        console.log("protagStyle is NOW...", protagStyle);
        // let template = `style="transform: translateX(${transformedX}px);"`
        // document.getElementById('protag-elem').innerText = template
    }
}

export const protaganistService = new ProtaganistService()