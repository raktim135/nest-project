import { UserEntity } from "./user.entity";
import { UserType } from "./user.types";

export class UserResponseInterface {
    user: UserType & { token: string }
}