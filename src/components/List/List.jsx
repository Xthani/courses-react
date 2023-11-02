import { useState } from 'react';
import styles from './List.module.css';



function List ({ count, str, arr, ...props }) {
    const [color, setColor] = useState('gray');
    const { list } = styles;
    // console.log(styles, 'styles');
    // console.log(count, '<<<<');
    // console.log(props);

    const divStyles = {
        backgroundColor: color,
        fontSize: '28px'
    }

    const handleColor = () => {
        setColor((prevState) => {
            
            if(prevState === 'gray') {
                return 'red';
            } else {
                return 'gray';
            }

        });

    }

    return <ul className={list}>
        {arr.map(i => {
            return <li>
                <p>{i}</p>
                <div style={divStyles}>{count}</div>
                <button onClick={handleColor}>CLICK</button>
            </li>
        })}
    </ul>
}

export default List;