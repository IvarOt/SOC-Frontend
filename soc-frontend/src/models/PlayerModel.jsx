export class Player {
    constructor (id, username, email, password, role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

export class RegisterPlayerRequest {
    constructor (username, email, password, confirmPassword) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}