import express from 'express';
import * as mongoose from "mongoose";
import cors from "cors"
import winston from 'winston'
import 'winston-mongodb'

import {ErrorMiddleware} from './middlewares/Error'
import router from "./routes/contactRoutes";
import * as path from "path";

let logger: winston.Logger;

class App {
    private readonly port: number
    static logger: winston.Logger

    constructor() {
        this.port = 3000

        this.setupDatabase().then()
        this.setupExpressServer()
    }

    async setupDatabase() {
        mongoose
            .connect('mongodb://localhost:27017/contactManager')
            .then(() => {
                console.log('db connection established!')
                console.log('_________________________________________')
            }).catch(err => {
            console.log(err.stack)
            winston.error(err.stack)
        })

        logger = winston.createLogger({
            transports: [
                new winston.transports.File({filename: 'log-error.log'}),
                new winston.transports.MongoDB({db: 'mongodb://localhost:27017/contactManager'})
            ]
        })

        process.on('uncaughtException', (err: Error) => {
            console.log(err.stack)
            logger.error(err.stack)
        })

        process.on('unhandledRejection', (err: Error) => {
            console.log(err.stack)
            logger.error(err.stack)
        })
    }

    setupExpressServer() {
        const app = express()

        app.use(express.json())
        app.use(express.urlencoded({extended: true}))

        app.use(cors())

        app.use("/api", router)

        app.use(ErrorMiddleware)

        app.listen(this.port, () => {
            console.log(`Server is listening on port: ${this.port}`)
        })
    }
}

export {logger}
export default App