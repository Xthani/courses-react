import { useEffect, useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const [color, setColor] = useState('gray');

    // useEffect(() => {
    //     console.log('11111');
    //     return () => {
    //         console.log('22222');
    //     }
    // });

    // useEffect(() => {
    //     console.log('11111');
    //     return () => {
    //         console.log('22222');
    //     }
    // }, []);

    useEffect(() => {
        setColor((prevColor  ) => prevColor === 'gray' ? 'red' : 'gray');
        return () => {
            console.log('22222');
        }
    }, [count]);

    const addCount = () => {
        setCount((prevCount) => prevCount + 1);
    }
    const removedCount = () => {
        setCount((prevCount) => prevCount - 1);
    }

    const addCount2 = () => {
        setCount2((prevCount) => prevCount + 1);
    }
    const removedCount2 = () => {
        setCount2((prevCount) => prevCount - 1);
    }

    return (
        <>
            <button onClick={addCount}>+</button>
            <button onClick={removedCount}>-</button>
            <div style={{
                backgroundColor: color
            }}>{count}</div>

            <button onClick={addCount2}>+</button>
            <button onClick={removedCount2}>-</button>
            <div>{count2}</div>
        </>
    );
}

export default Count;