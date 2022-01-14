









import { getRepository } from "typeorm";
import { json, Request, Response  } from "express";
import { Category } from "../entity/Category";
import { request } from "http";
import { resolveModuleName } from "typescript";
import { validate } from "class-validator";


class CategoryControl {
    
    static getAllCategory = async (req: Request, res:Response) => {
        const categoryRespository = getRepository(Category);
        let categorys;

        try {
            
            categorys = await categoryRespository.find();
        }catch (e) {
            res.status(400).json({ message: 'something goes wrog' });
        }

        if (categorys.length > 0) {
            return res.status(200).json(categorys);
        } else {
            res.status(404).json({message: ' Not result'});
        }
    };

    static registrarCategory = async (req: Request, res: Response) => {
        const { name ,description, numColor} = req.body; 

        const category = new Category();

        category.name = name;
        category.description = description;
        category.numColor = numColor;


        console.log("description: "+description);
        const categoryRespository = getRepository(Category);
        

        try{

            await categoryRespository.save(category);
        }
        catch (e) {
            return res.status(409).json({message: 'Category already exist'});
        }

        // All ok
        return res.status(409).json({message: 'Category created!'});
    }


    static editUser = async (req: Request, res: Response) => {
        let category;
        const {id} = req.params; // params nos devuelve el valor que recibe en la url, en este caso el id
        const { name ,description, numColor} = req.body;  //body nos devuelve lo que recibe por post, en este caso el json
        const categoryRespository = getRepository(Category);

        //try get user

        try {
            //Primero busca en la bd a ver si el usuario exite
            category = await categoryRespository.findOneOrFail(id);

            /*Luego los guarda en estas varibles que iran a la bd, pero ojo que aun no se esta guardando en la bd
            Solo se dejo alli como quien dice por si acaso se guardara, si en el proceso se deniega el proceso esto no afectara
            a la bd
            */
            category.name = name;
            category.description = description;
            category.numColor = numColor;
            
            
        }catch (e) {
            return res.status(404).json({message: 'User not found'});
        }


        // try to save user
        try {
            await categoryRespository.save(category);
        } catch (e) {
            return res.status(409).json({ msessage: 'Username already in use'});
        }

        res.status(201).json({message:'User update'});

    } 


    static deleteUser = async (req: Request, res: Response) => {
        const {id} = req.params;
        const categoryRespository = getRepository(Category);
        let category: Category;

        try {
            category = await categoryRespository.findOneOrFail(id);
        } catch (e) {
            return res.status(400).json({message: 'User not found'});
        }

        //remove

        categoryRespository.delete(id);
        res.status(201).json({message: 'User deleted'})
    };

    // static changePassword = async (req: Request, res: Response) => {

    //     const {name, description, numColor} = req.body;

    //     const categoryRespository = getRepository(User);
    //     let user: User;

    //     try {
    //         user = await userRespository.findOneOrFail(userId);

    //     }catch (e) {
    //         res.status(400).json({message: 'Something goes wrong'});

    //     }

    //     //return res.status(401).json({message: user.checkPassword2(oldPassword)});

    //     //despues averigua para que era esto
    //     //const validationOps = {validationError:{target:false, value: false}};
    //     // const errors = await validate (user, validationOps);

    //     // if (errors.length > 0){
    //     //     return res.status(400).json(errors);
    //     // };
    //     userRespository.save(user);

    //     res.json ({message: 'DSatos guardatos!'});
    // }; 
}

export default CategoryControl;
