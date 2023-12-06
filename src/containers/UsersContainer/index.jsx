import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Users from "../../components/Users"
import {getUsers} from '../../store/users/selectors'
import {fetchUsers} from '../../store/users/actions'

const UsersContainer = () => {
    const dispash = useDispatch();
    const { isLoad, error, users } = useSelector(getUsers);

    console.log({ isLoad, error, users })

    useEffect(() => {
        dispash(fetchUsers());
    }, [dispash]);

    return <Users users={users}/>
}

export default UsersContainer