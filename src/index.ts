import "reflect-metadata";
import * as cookieParser from 'cookie-parser';
import * as Express from "express";
import * as bodyParser from "body-parser";
import {config,logging} from "./config";
import {connectToDB as con} from "./connect/connect_db";
import {router} from "./routes";
import * as rTracer from 'cls-rtracer'
const NAMESPACE= 'SERVER'
con.then( (connection: any) => {
    const app = Express();

    app.use(rTracer.expressMiddleware());

    app.use((req, res, next) => {
     logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    
    res.on('finish', () => {
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
     });
     next();
    });
    app.use(cookieParser());
    app.use(
        bodyParser.urlencoded({
          extended: false
        })
      )
      app.use(Express.json())

      app.use(router);

app.listen(config.server.port, () =>{ 
    logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`)}

    )
}
)

