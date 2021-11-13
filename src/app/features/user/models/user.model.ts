export interface User{
    id: number;
    isAdmin: boolean;
    name: string;
    email: string;
    password: string;
    cpf: string;
    birthDate: string | Date;
}