import { Layout, Menu, theme, Breadcrumb } from "antd";
import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
} from "@ant-design/icons";
import React, { lazy, Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Route, Routes } from "react-router";
import { LoadingSpin } from "../../entities";
import { LeftMenuManager, NavbarAskueFeaters } from "../../features";
import { configNav } from "../../shared/config";
import type { MenuProps } from "antd";
const ManagerPanelIndex = lazy(() => import("./ManagerPanel"));
const ObjectsMain = lazy(() => import("./objects"));

const { Header, Content, Footer, Sider } = Layout;
const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
].map((icon, index) => {
    const key = String(index + 1);

    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,

        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});
const CountingRoute = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            {/* <NavbarAskueFeaters configData={configNav} />
            <Container fluid>
                <Row className="m-1">
                    <Col>
                        <LeftMenuManager />
                    </Col>
                    <Col className="col-12 col-xl-9 justify-content-center mt-3">
                        <Row>
                            <Routes>
                                <Route
                                    index
                                    element={
                                        <Suspense
                                            fallback={
                                                <LoadingSpin variant="secondary" />
                                            }
                                        >
                                            <ManagerPanelIndex />
                                        </Suspense>
                                    }
                                />
                                <Route
                                    path="objects"
                                    element={
                                        <Suspense
                                            fallback={
                                                <LoadingSpin variant="secondary" />
                                            }
                                        >
                                            <ObjectsMain />
                                        </Suspense>
                                    }
                                />
                            </Routes>
                        </Row>
                    </Col>
                </Row>
            </Container> */}
            <Layout>
                {/* <Header style={{ display: "flex", alignItems: "center" }}>
                    
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        items={new Array(4).fill(null).map((_, index) => {
                            const key = index + 1;
                            return {
                                key,
                                label: `nav ${key}`,
                            };
                        })}
                    />
                </Header> */}
                <Header style={{ display: "flex", alignItems: "center" }}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        items={new Array(10).fill(null).map((_, index) => {
                            const key = index + 1;
                            return {
                                key,
                                label: `nav ${key}`,
                            };
                        })}
                    />
                </Header>

                <Layout>
                    <Sider
                        width={200}
                        style={{ background: colorBgContainer }}
                        collapsible
                        breakpoint="md"
                    >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                            style={{ height: "100%", borderRight: 0 }}
                            items={items2}
                        />
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: "90vh",
                                background: colorBgContainer,
                            }}
                        >
                            <Routes>
                                <Route
                                    index
                                    element={
                                        <Suspense
                                            fallback={
                                                <LoadingSpin variant="secondary" />
                                            }
                                        >
                                            <ManagerPanelIndex />
                                        </Suspense>
                                    }
                                />
                                <Route
                                    path="objects"
                                    element={
                                        <Suspense
                                            fallback={
                                                <LoadingSpin variant="secondary" />
                                            }
                                        >
                                            <ObjectsMain />
                                        </Suspense>
                                    }
                                />
                            </Routes>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
};

export default CountingRoute;
