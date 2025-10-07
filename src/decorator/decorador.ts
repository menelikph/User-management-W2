import { NewUser, User } from "@/interfaces/user";


/**
 * Decorador: Añade propiedades por defecto (id, role='user', createdAt) a un nuevo usuario.
 */
export function DefaultUserProps(target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value; // Guardamos la función 'create' original

    descriptor.value = function (newUser: NewUser): User {
        console.log(`[DECORATOR 🛡️] Añadiendo metadata a ${newUser.username}...`);
        
        // 1. Inyectamos los valores automáticos
        const decoratedUser: User = {
            ...newUser,
            id: Date.now(),
            role: 'user',
            createdAt: new Date(),
            lastUpdate: new Date(),
        };

        // 2. Ejecutamos el método original (la función create) con el objeto modificado
        return originalMethod.call(this, decoratedUser);
    };

    return descriptor; // Devolvemos el método modificado
}