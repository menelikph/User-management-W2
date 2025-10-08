export interface User{
    username : string;
    password? : string | number;
    id : number;
    role : 'admin' | 'user' | 'viewer';
    createdAt? : Date;
    lastUpdate?: Date
}

export interface NewUser{
    username: string;
    password?: string | number;
}