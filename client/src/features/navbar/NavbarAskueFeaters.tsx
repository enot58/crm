import React from "react";
import { useNavigate } from "react-router";
import { NavbarAskue } from "../../entities";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { INavLinkAskueProps } from "../../shared/interfaces";
import { logout } from "../../shared/models";
interface INavAskue {
    configData: INavLinkAskueProps[];
}

const NavbarAskueFeaters: React.FC<INavAskue> = ({ configData }) => {
    const { isAuth, user } = useAppSelector((store) => store.user);
    const { user: userStore } = useAppSelector((store) => store);
    console.log(userStore);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    if (!isAuth || user === null || !userStore) {
        return <></>;
    }
    const { roles } = user;
    const handleLogout = () => {
        //dispatch(logout());
        navigate("/login", { replace: true });
    };

    return (
        <NavbarAskue
            roles={roles}
            configData={configData}
            logout={handleLogout}
        />
    );
};

export default NavbarAskueFeaters;
