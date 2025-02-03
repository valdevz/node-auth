import { AuthDataSource, AuthRepository, RegisterUserDto, UserEntity } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private readonly AuthDatasource: AuthDataSource,
    ){}
    
    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.AuthDatasource.register(registerUserDto);
    }

}