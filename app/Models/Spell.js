


export class Spell {
    constructor(data) {
        // this.school = data.school
        // {
        //     this.schoolIndex = data.school.index
        //     this.schoolName = data.school.name
        //     this.schoolUrl = data.school.url
        // }
        this.higher_level = data.higher_level
        this.index = data.index
        this.name = data.name
        this.desc = data.desc
        this.range = data.range
        this.ritual = data.ritual || false
        this.duration = data.duration
        this.concentration = data.concentration
        this.casting_time = data.casting_time
        this.level = data.level
        this.attack_type = data.attack_type
        this.damage = data.damage

        this.damage_type = data.damage.damage_type

        this.damage_typeIndex = data.damage.damage_type.damage_typeIndex
        this.damage_typeName = data.damage.damage_type.name

        this.damage.damage_at_character_level = data.damage.damage_at_character_level

        /// NOTE Not sure how to grab a number this way.



    }
}