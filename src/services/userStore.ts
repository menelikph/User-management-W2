import type { User, NewUser } from '../interfaces/user';
import { DefaultUserProps } from '../decorator/decorador';

// Base de datos simple en memoria (fuera de la clase)
let users: User[] = [];

export class UserStore {

    public list(): User[] {
        console.log('[HTTP SIM] GET /api/users - Listando');
        return users;
    }

    public findByName(username: string): User | undefined {
        console.log(`[HTTP SIM] GET /api/users?name=${username} - Buscando`);
        return users.find(u => u.username === username);
    }
    
    // Aplicamos el decorador justo encima del método 'create'
    @DefaultUserProps
    public create(user: NewUser): User {
        // Cuando esta línea se ejecuta, el decorador ya le ha añadido 'id', 'role', etc.
        console.log(`[HTTP SIM] POST /api/users - CREANDO: ${user.username}`);
        
        users.push(user as User);
        return user as User;
    }
    
    public update(id: number, newUsername: string): User | undefined {
        console.log(`[HTTP SIM] PATCH /api/users/${id} - Actualizando`);
        const userIndex = users.findIndex(u => u.id === id);
        
        if (userIndex !== -1) {
            users[userIndex].username = newUsername;
            users[userIndex].lastUpdate = new Date();
            return users[userIndex];
        }
        return undefined;
    }

    public remove(id: number): boolean {
        console.log(`[HTTP SIM] DELETE /api/users/${id} - Eliminando`);
        const initialLength = users.length;
        users = users.filter(u => u.id !== id);
        return users.length < initialLength;
    }
}