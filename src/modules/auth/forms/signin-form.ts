import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class signinForm {
    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsString()
    @MinLength(6)
    senha:string
}