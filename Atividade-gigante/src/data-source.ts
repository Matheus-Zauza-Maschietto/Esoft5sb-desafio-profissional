import { DataSource } from "typeorm";
import { User } from "./Models/user";
import { Categoria } from "./Models/categoria";
import { Tarefa } from "./Models/tarefa";
import { Status } from "./Models/status";
import { Tipo } from "./Models/tipo";

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "Senha123@",
    database: "PROJETO_BUSSOLA",
    synchronize: true,
    logging: true,
    entities: [User, Categoria, Tarefa, Status, Tipo],
    subscribers: [],
    migrations: [],
    extra: {
        autoLoadEntities: true,
        trustServerCertificate: true,
    }
})