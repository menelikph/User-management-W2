import { User } from "@/interfaces/user";

const users: User[] = [];

export class UserStore {
    public list(): User[]{
        console.log('[HTTP] GET /api - listando');
        return users
    }

    public findByName(username: string): User | undefined{
        console.log(`[HTTP] GET /api/users?name=${username} - buscando`);
        return users.find(u => u.username === username);
    }
}