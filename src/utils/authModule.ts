import { dataUsers } from "@/data/dataUsers";
import { User } from "@/interfaces/user";

export const authenticate = (username: string, password?: string | number): User | null => {
    const foundUser = dataUsers.find(
        user => user.username === username && user.password === password
    )
    if(foundUser){
        //uso la destructuracion para quitar la contraseña antes de devolver el objeto
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {password, ...userSafe} = foundUser;
        return userSafe as User
    }
    return null;
};

