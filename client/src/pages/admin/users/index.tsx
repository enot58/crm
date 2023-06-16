import React from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import { userApi } from "../../../shared/api";

// {
//     "id": 5,
//     "login": "user",
//     "password": "$2a$05$vZUXwVVIvdgnpqWq7sNcuO5qynumUU.KUG0SKXmDcBWQEsA86muIe",
//     "createdAt": "2023-04-17T06:15:57.000Z",
//     "updatedAt": "2023-04-17T06:15:57.000Z",
//     "roles": [
//       {
//         "id": 1,
//         "name": "user",
//         "description": "Пользователь",
//         "createdAt": "2023-04-17T03:37:14.000Z",
//         "updatedAt": "2023-04-17T03:37:14.000Z",
//         "UserRoles": {
//           "id": 5,
//           "roleId": 1,
//           "userId": 5
//         }
//       }
//     ],
//     "userDescriptions": {
//       "id": 4,
//       "name": "Иванj",
//       "lastName": "Иванов",
//       "image": "4d85c426-201a-4b55-89c1-e4aa90a358e5.jpg",
//       "post": "Мастер",
//       "email": "email@email.ru",
//       "userId": 5,
//       "createdAt": "2023-04-24T09:54:33.000Z",
//       "updatedAt": "2023-04-24T09:54:33.000Z"
//     }
//   }

//   {
//     "id": 7,
//     "login": "admin",
//     "password": "$2a$05$gGIK.ocZcxVuUTcUSk6yweR.iQ6OesNKd3w8oMpP.O98py2KH9FLe",
//     "createdAt": "2023-04-17T09:41:08.000Z",
//     "updatedAt": "2023-04-17T09:41:08.000Z",
//     "roles": [
//       {
//         "id": 2,
//         "name": "admin",
//         "description": "Администратор",
//         "createdAt": "2023-04-17T03:37:19.000Z",
//         "updatedAt": "2023-04-17T09:49:14.000Z",
//         "UserRoles": {
//           "id": 10,
//           "roleId": 2,
//           "userId": 7
//         }
//       }
//     ],
//     "userDescriptions": null
//   }

const Users = () => {
    const { isError, data, isSuccess } = userApi.useGetAllUsersQuery();
    console.log(isSuccess);

    return (
        <Row>
            <h4>Список пользователей</h4>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button variant="primary">Создать пользователя</Button>
                </Col>
            </Row>
            <Row className="mt-3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Логин</th>
                            <th>Пароль</th>
                            <th>Список ролей</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isSuccess ? (
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.login}</td>
                                    <td>Кнопка</td>
                                    <td>
                                        {item.roles.map((role, index) => {
                                            return (
                                                <li key={index}>{role.name}</li>
                                            );
                                        })}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <></>
                        )}
                    </tbody>
                </Table>
            </Row>
        </Row>
    );
};

export default Users;
