import {ErrorRequestHandler} from "express";
import {logger} from "../index";

export const ErrorMiddleware:ErrorRequestHandler=(err,req, res,next)=>{
    console.log(err.stack)
    logger.error(err.stack)
    next()
}