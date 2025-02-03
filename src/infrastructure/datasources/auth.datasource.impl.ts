import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import { AuthDataSource, CustomError, RegisterUserDto, UserEntity } from "../../domain";
import { UserMapper } from "../mappers/user.mapper";


type HashFunction = (password: string) => string;
type CompareFunction = (password: string, hashed: string) => boolean;
export class AuthDataSourceImpl implements AuthDataSource{

    constructor(
        private readonly hashPassword: HashFunction = BcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = BcryptAdapter.compare,
    ){}

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password } = registerUserDto;

        try {
            // 1. verify if email exist
            const exist = await UserModel.findOne({email});
            if(exist) throw CustomError.badRequest('User already exist.');

            // 2. password hashed


            const user = await UserModel.create({
                name,
                email,
                password: this.hashPassword(password)
            });

            await user.save();
            // Map the response to our entity
            return UserMapper.userEntityFromObject(user);
            
        } catch (error) {
            if(error instanceof CustomError) {
                throw error;
            }

            throw CustomError.internalServer();
        }
    }
    
}