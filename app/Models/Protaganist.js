import { generateId } from "../Utils/generateId.js"




export class Protaganist {
    constructor(data) {
        this.id = data.id || generateId()
        this.health = data.health
        this.isDead = data.isDead
        this.imgUrl = "https://gamepedia.cursecdn.com/wizardoflegend_gamepedia_en/thumb/6/6b/Master_Sura.png/192px-Master_Sura.png?version=cb9ebaa6a7f1f19fbdbc15b5049d0f2e"
    }
}