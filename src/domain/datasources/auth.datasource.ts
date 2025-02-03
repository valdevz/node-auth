import { RegisterUserDto } from "../dtos/auth/reguster-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class AuthDataSource {
    //TODO: 

    // abstract login( loginUserDto): Promise<UserEntity>;
    abstract register( registerUserDto: RegisterUserDto): Promise<UserEntity>;
}