import React from "react";
import NavLinkAskue from "./NavLinkAskue";
import { IRole, INavLinkAskueProps } from "../../../shared/interfaces";
import { Col } from "react-bootstrap";

interface INavAskue {
    configData: INavLinkAskueProps[];
    roles: IRole[];
}

const NavAskue: React.FC<INavAskue> = ({ configData, roles }) => {
    return (
        <>
            {configData.map((item, index) => (
                <Col md={"auto"} sm={6} key={item.to}>
                    <NavLinkAskue
                        {...item}
                        accessFor={item.accessFor}
                        roles={roles}
                    />
                </Col>
            ))}
        </>
    );
};

export default NavAskue;
