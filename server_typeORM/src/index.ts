import "reflect-metadata";
import {createConnection} from "typeorm";







import {User} from "./entity/User";
import * as express from "express";
import rutas from './rutas/index'; //falta
import * as cors from "cors";
//import * as from "helmet";

const app = express();

    const PORT = process.env.PORT || 9004 //creo que esta funcion dice que si la primera variable es undefined, se toma la segunda opcion, se ve util


    app.use(express.json()); // con esto se añdade el traductor de json en el programa
    app.use(express.urlencoded({extended: true}));
    app.use(cors()); //sin esto los frontend no pueden acceder a tus apis

    app.use("/",rutas);
    
    app.listen(PORT)
    console.log("Corriendo en el puerto: "+PORT);
    console.log("");
    console.log("");
    

//dentro de esta funcion es que se ejecuta la conexion con el typeORM
createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
