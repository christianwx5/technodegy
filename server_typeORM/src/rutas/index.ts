









import CategoryControl from "../controles/CategoryControl"
import * as express from "express";

import { createLogicalNot } from 'typescript';

// import auth from './auth';
// import user from  './user';

const routes = express.Router();

routes.get("/", (req,res) => {
    res.status(200).send({message : "Hola mundo"})
});

routes.get("/get_category", CategoryControl.getAllCategory);

routes.post("/new_category", CategoryControl.registrarCategory);

routes.put("/updete_category/:id", CategoryControl.editUser);

routes.delete("/delete_category/:id",CategoryControl.deleteUser);


export default routes;
