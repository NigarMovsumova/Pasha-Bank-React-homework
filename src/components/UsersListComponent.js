import React from 'react';

const UsersListComponent = (props) => {
    let usersTableRowsArray = [];
    let users = props.children[1];
    for (let user of users) {
        usersTableRowsArray.push(
            <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            </tr>);
    }
    return (
        <div>
            <h2>Users List Component</h2>
            <table className="ui inverted grey table">
                <thead>
                <tr>
                    <th> Name</th>
                    <th> Username</th>
                    <th> Email</th>
                    <th> Phone</th>
                </tr>
                </thead>
                <tbody>
                {usersTableRowsArray}
                </tbody>
            </table>
            <br/>
            <br/>
        </div>

    );
}
export default UsersListComponent;



