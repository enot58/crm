import IUser from "./IUser";

interface IDataError {
    status: number;
    data: {
        message: string;
    };
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
