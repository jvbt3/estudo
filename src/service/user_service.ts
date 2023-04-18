import fs from "fs";


export class UserService{
    public writeUser(usuario: any) {
        fs.writeFile('usuario.json', JSON.stringify(usuario), () => {
            console.log('ok!')
        })
    }
    public async readUser() {
        return fs.readFileSync('usuario.json');
    }
}

export default new UserService();