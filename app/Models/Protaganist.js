import { generateId } from "../Utils/generateId.js"




export class Protaganist {
    constructor(data) {
        this.id = data.id || generateId()
        this.health = data.health
        this.isDead = data.isDead
        this.imgUrl = ""
    }
}