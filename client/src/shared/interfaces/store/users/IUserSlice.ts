import IUser from "./IUser";

interface IMessage {
    message: string;
}

interface IDataError {
    status: number;
    data: IMessage;
}

// Интерфейс для сосздания слайса
interface IUserSlice {
    user: IUser | null;
    isAuth: boolean;
    isLoading: boolean;
    isError: boolean;
    token: string | null;
    dataError?: IDataError | null;
}

export default IUserSlice;
