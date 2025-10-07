import { User } from "@/interfaces/user";


export const dataUsers: User[] = [
    { username: 'admin', password: '123', id: 1, role: 'admin', createdAt: new Date() },
    { username: 'maria', password: 'abc', id: 2, role: 'user', createdAt: new Date() },
];