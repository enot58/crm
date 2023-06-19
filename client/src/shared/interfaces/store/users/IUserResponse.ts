import IUser from "./IUser";
import { IUserDescription } from "./IUserDescription";

export interface IUsersResponse extends IUser {
    createdAt: string;
    updatedAt: string;
    userDescriptions: IUserDescription;
}
