export class EditCardRequest {
    constructor(id, name, hp, dmg, color) {
        this.id = id;
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.color = color;
    }
}

export class CreateCardRequest {
    constructor(name, hp, dmg, color) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.color = color;
    }
}

export const createEditCardRequest = (data) => {
    return new EditCardRequest(data.id, data.name, data.hp, data.dmg, data.color);
}
