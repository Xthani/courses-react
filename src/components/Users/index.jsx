// import s from './users.module.css'
import s from './users.module.scss'
import {Wrapper, Item, Text} from './styled'
import CustomCard from '../Card';

const Users = ({ users }) => {
    return <div className={s.wrapper}>
        {users.map((i, index) => {
            return (
                <div className={s.wrapper_item2}>
                    <h2>{i.name}</h2>
                </div>
            );
        })}
    </div>

    // return <Wrapper>
    //     {users.map((i, index) => {
    //         return (
    //             <Item isItem={index % 2}>
    //                 <Text>{i.name}</Text>
    //             </Item>
    //         );
    //     })}
    // </Wrapper>
    // return <div className={s.wrapper}>
    //     {users.map((i, index) => {

    //         return (
    //             <div className={index % 2 ? s.item : s.item2}>
    //                 <h2>{i.name}</h2>
    //             </div>
    //         );
    //     })}
    // </div>
}

export default Users