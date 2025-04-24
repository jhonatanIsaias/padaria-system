import { Inject, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { usuarios } from 'generated/prisma';
import { Observable } from 'rxjs';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class AuthService {
   constructor(
    private readonly supabase: SupabaseService,
    private readonly prismaClient: PrismaClient
   ){}

 /*  signup(user : UsuarioForm):Observable<UsuarioDto>{
        const usuario: usuarios = {
            nome:user.nome

        }
   }*/
}
export interface UsuarioForm{
    id?:number,
    nome:string;
    permissao:number,
    login:string,
    email:string,
    senha:string,
    created_at?:Date
}
export interface UsuarioDto{
    nome:string,
    permissao:boolean,
    login:string,
    email:string,
    senha:string
}