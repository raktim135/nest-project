import { Body, Controller, Get, Patch, Post, Req, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserService } from "@app/user/user.service";
import { CreateUserDto } from "@app/user/dto/createUser.dto";
import { UserResponseInterface } from "@app/user/userResponse.interface";
import { LoginUserDto } from "./dto/loginUser.dto";
import { ExpressRequest } from "@app/types/expressRequest.interface";
import { User } from "./decorators/user.decorator";
import { UserEntity } from "./user.entity";
import { AuthGuard } from "@app/guards/auth.guard";

@Controller({

})
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post('user')
    @UsePipes(new ValidationPipe())
    async createUser(@Body('user')createUserDto: CreateUserDto): Promise<UserResponseInterface>{
        const user = await this.userService.createUser(createUserDto);
        return this.userService.buildUserResponse(user)
    }

    @Patch('user')
    @UsePipes(new ValidationPipe())
    async updateUser(@Body('user')updateUserDto: CreateUserDto): Promise<UserResponseInterface>{
        const user = await this.userService.createUser(createUserDto);
        return this.userService.buildUserResponse(user)
    }

    @Post('user/login')
    @UsePipes(new ValidationPipe())
    async login(@Body('user')loginUserDto: LoginUserDto): Promise<UserResponseInterface>{
        const user = await this.userService.login(loginUserDto)
        return this.userService.buildUserResponse(user)
    }

    @Get('user')
    @UseGuards(AuthGuard)
    async currentUser(
        @User() user: UserEntity
    ): Promise<UserResponseInterface> {
        return this.userService.buildUserResponse(user);
    }
}