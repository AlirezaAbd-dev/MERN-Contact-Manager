import express from 'express';
// @ts-ignore
import mongoose from "mongoose";
import cors from "cors"
import winston from 'winston'
import 'winston-mongodb'
import "dotenv"

import {ErrorMiddleware} from './middlewares/Error'
import router from "./routes/contactRoutes";

let logger: winston.Logger;

class App {
    private readonly port: number
    private readonly DB_URI: string
    static logger: winston.Logger

    constructor() {
        this.port = process.env.PORT ? +process.env.PORT : 3000
        this.DB_URI = "mongodb+srv://0Alireza0:%40aliCR7reza@mernstacktodo.i9u0btt.mongodb.net/?retryWrites=true&w=majority" || "mongodb://localhost:27017/contactManager"

        this.setupDatabase().then()
        this.setupExpressServer()
    }

    async setupDatabase() {
        try {
            await mongoose
                .connect(this.DB_URI)
            console.log('db connection established!')
            console.log('_________________________________________')
        } catch (err: any) {
            console.log(err.stack)
            winston.error(err.stack)
        }

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