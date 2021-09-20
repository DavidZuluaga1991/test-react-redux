// import { useEffect } from 'react';
import "./home.scss";
import { connect } from 'react-redux';
import { loadUsersAction } from '../../redux/actions/users.actions';
import Table from '../../components/Table/Table';

const Users = ({ loadUsersAction, usersReducers }) => {
    // const { users, error, loadding } = usersReducers;
    // const { users } = usersReducers;
    // const getUsers = (user) => {
    //     console.log(user);
    // };
    // console.log(users);
    // useEffect(() => {
    //     getUsers();
    //     loadUsersAction(1);
    // }, [loadUsersAction]);
    // console.log(users);
    const u = [
        {
            Nombre: 'Hola',
            Apellidos: 'Hola'
        },
        {
            Nombre: 'Hola',
            Apellidos: 'Hola'
        }
    ]
    return (
        <div>
            <Table data={u} />
        </div>
    );
};


const mapStateToProps = ({ usersReducer }) => {
	return { usersReducer };
};

const mapDispatchToProps = { loadUsersAction };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
