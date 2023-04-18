import { Request, Response } from "express";
import { UserService } from "../service/user_service";


class UserController {
    public async getUser(req: Request, res: Response) : Promise <Response> {
    
        try {
            const { nome, email, idade } = req.body;
            const user = new UserService();
            const retorno: any = await user.readUser();
            const arquivo = JSON.parse(retorno).toString("utf-8");
            const arrayArquivo = arquivo.filter((user: any) => user.nome === nome, (user: any) => user.email === email, (user: any) => user.idade === idade);
            console.log(arrayArquivo);

            return res.json(arrayArquivo);
        } catch (err) {
            return res.json('erro!');
        }
    }

    public postUser(req: Request, res: Response) {
        try {
            const { nome, email, idade } = req.body;
            const usuario = { nome, email, idade };
            const user = new UserService();
            user.writeUser(usuario);
        
            res.json(usuario);
        } catch (error) {
            res.json('erro!')
        }
    }
}

export default new UserController();