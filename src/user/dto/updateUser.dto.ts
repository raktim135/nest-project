import { IsEmail, IsNotEmpty, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @MaxLength(15)
    readonly username: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;
}