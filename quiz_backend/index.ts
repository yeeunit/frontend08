// 여기가  API 메인 소스코드


import { DataSource } from "typeorm"
import { Product } from "./Product.postgres"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "34.64.240.160",
    port: 5022,
    username: "postgres",
    password: "postgres2022",
    database: "postgres",
    synchronize: true,
    logging: true,
    entities: [Product],
});

AppDataSource.initialize().then(() => {
    console.log("퀴즈연결성공!!!")
})