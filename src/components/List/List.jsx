import styles from './List.module.css';

function List ({ count, str, arr, ...props }) {
    const { list } = styles;
    console.log(styles, 'styles');
    // console.log(count, '<<<<');
    // console.log(props);
    return <ul className={list}>
        {arr.map(i => {
            return <li>
                <p>{i}</p>
                <div>{count}</div>
            </li>
        })}
    </ul>
}

export default List;