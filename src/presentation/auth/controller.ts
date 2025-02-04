import { Request, Response } from "express";
import { AuthRepository, CustomError, RegisterUserDto } from "../../domain";
import { JwtAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";

export class AuthController {
    // DI
    constructor(
        private readonly authRepository: AuthRepository,
    ) {}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof CustomError) {
            return res.status(error.statusCode).json({error: error.message});
        }

        console.log(error) //Winston logger
        return res.status(500).json({error: 'Internal server error'})
    }

    // Defining main routes
    registerUser = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        
        // if(error) return res.status(400).json( {error} );

        this.authRepository.register(registerUserDto!)
        .then(async (user) => {
            res.json({
                user, 
                token: await JwtAdapter.generateToken({id: user.id})
            })
        })
        .catch( error => this.handleError(error, res));

    };

    loginUser = (req: Request, res: Response) => {
        res.json('Login user controller');
    };

    getUser = (req: Request, res: Response) => {
        UserModel.find()
        .then( users =>{ 
            res.json({
                users,
                token: req.body.token
            })
        })
        .catch( ()=> res.status(500).json({error: 'Internal server error.'}))
    };
}