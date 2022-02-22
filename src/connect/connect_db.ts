import { createConnection } from "typeorm";
import {config} from "../config";
import "reflect-metadata";

 var connectToDB=createConnection({
  type: "mysql",
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.password,
  database: config.database.database,
  synchronize: false,
  logging: true,
  entities: ["src/entity/*.ts"],
  migrations: ["src/migration/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
});

export{
  connectToDB
}