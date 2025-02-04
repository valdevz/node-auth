import jwt from 'jsonwebtoken';
const TOKEN_KEY: string = 'your-secret-key';

export class JwtAdapter {
    static async generateToken( payload: Object, duration: number = 1800): Promise<string|null> {
        return new Promise( (resolve ) => {
            jwt.sign( payload, TOKEN_KEY, { expiresIn: duration }, (err, token) => {
                if (err) return resolve(null)
                
                resolve(token!);
            })


            // })
        })
    }

    static validateToken<T>( token:string): Promise<T | null> {
        return new Promise( (resolve) => {
            jwt.verify(token, TOKEN_KEY, (err, decoded) => {
                if (err) return resolve(null);

                resolve(decoded as T);
            })
        })
    }

}