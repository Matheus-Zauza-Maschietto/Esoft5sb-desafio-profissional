import express from 'express'
import mongoose from 'mongoose'

class App{
    public express: express.Application

    constructor() {
        this.express = express()
        this.middleware()
        this.database()
    }

    public middleware(){
        this.express.use(express.json)
    }

    public async database(){
        try {
            await mongoose.connect("mongodb://127.0.0.1:27017/test")
            console.log("Conectoooooo")
        } catch (error) {
            console.log("Deu ruim:"+error)
            throw "deu ruim";
        }
    }
}


export default new App().express;