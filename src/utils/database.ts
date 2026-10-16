import knex from "knex";
import "server-only";

import type { UserTable } from "@/utils/types";

const connection = knex({
  client: "mysql2",
  connection: {
    host: process.env.MARIADB_HOST || "localhost",
    port: Number(process.env.MARIADB_PORT) || 3306,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE || "eunwoodev",
  },
});

export const database = {
  user: () => connection<UserTable>("user"),
};

export default connection;
