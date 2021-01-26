import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(0);
    const [data, refreshData] = useState([{name: 'Igor', sex: 'male'}]);

    useEffect(() => {
        updateChar();
        let timerId = setInterval(updateChar, 15000);
        return () => {
            clearInterval(timerId);
        }
    });

    return (
        <div>
            <p>Вы кликнули {count}</p>
            <button
            onClick={() => setCount(count +1)}>Кликни меня</button>
            
            {data.map(item => {
                return (
                    <div>Name: {item.name}, sex: {item.sex}</div>
                );
            })}
            <button 
            onClick={() => refreshData(data => ([...data, {name: 'Alex', sex: 'female'}]))}>
                Добавить данные
                </button>
        </div>
    );
}

export default App;