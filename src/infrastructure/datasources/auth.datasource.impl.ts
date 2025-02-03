import { AuthDataSource, CustomError, RegisterUserDto, UserEntity } from "../../domain";

export class AuthDataSourceImpl implements AuthDataSource{
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password } = registerUserDto;

        try {
            // 1. verify if email exist


            // 2. password hashed

            // Map the response to our entity

            return new UserEntity(
                '1',
                name,
                email, 
                password, 
                ['ADMIN_ROLE']
            )
        } catch (error) {
            if(error instanceof CustomError) {
                throw error;
            }

            throw CustomError.internalServer();
        }
    }
    
}