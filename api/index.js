import express from 'express';
import userRoutes from "./routes/users.js";
import cors from "cors";
import petRoutes from "./routes/pet.js"

const app = express();

app.use(cors());

app.use(express.json()); //utilizando o json parab posts e put onde está sendo habilitado pelo use

app.use("/", userRoutes); //app.use no cors para evitar conflitos localmente

app.use("/", petRoutes);

app.listen(8800); //o app vai escutar a porta 3000
