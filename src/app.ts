import express from "express";
import routes from "./routes";


class App{
    public express: any;

    constructor(){
        this.express = express();
        this.middleWare();
        this.routes();
    }

    public middleWare(): void{
        this.express.use(express.json());
    }

    public routes(): void{
        this.express.use(routes);
    }

}

export default new App().express