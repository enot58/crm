import { INavLinkAskueProps } from "../interfaces";
import { EnRole } from "./enumRole";
const configNavAdmin: INavLinkAskueProps[] = [
    {
        title: "Вернуться",
        to: "/",
        accessFor: [EnRole.USER, EnRole.ADMIN],
    },
    {
        title: "Вторая",
        to: "/two",
        accessFor: [EnRole.USER, EnRole.ADMIN],
    },
    {
        title: "Администратор",
        to: "/admin",
        accessFor: [EnRole.ADMIN],
    },
];

export default configNavAdmin;
