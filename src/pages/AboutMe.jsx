import { useState, useEffect } from "react";

const AboutMe = () => {

    const [color, setColor] = useState([]);
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 10000);
    }, []);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    const addNew = () => {
        setColor(arr => [...arr, `${arr.length}`]);
    };

    const remove = key => {
        const temp = [...color];
        temp.splice(key, 1);
        setColor(temp);
    };

    return (
        <>
            <h3>Rendered { count }</h3>
            {
                color.map(e => (
                    <h3>{ e }</h3>
                ))
            }
            <br />
            <button type="button" onClick={ addNew }>Add</button>
            <button type="button" onClick={() => remove(4) }>Remove</button>
            <br /><br /><br />
            {
                data && data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })
            }
        </>
    )
}

export default AboutMe;