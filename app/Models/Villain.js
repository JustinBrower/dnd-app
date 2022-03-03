import { generateId } from "../Utils/generateId.js"



export class Villain {
    constructor(data) {
        this.id = data.id || generateId()
        this.health = data.health
        this.isDead = data.isDead
        this.spells = data.spells
        this.imgUrl = data.imgUrl
    }
}