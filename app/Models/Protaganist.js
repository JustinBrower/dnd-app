import { generateId } from "../Utils/generateId.js"




export class Protaganist {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.health = data.health
        this.imgUrl = data.imgUrl
    }
}