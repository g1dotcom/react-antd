import { Button } from 'antd';
import React, { useState } from 'react';

const Home = () => {
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchCharacter = async () => {
        setLoading(true);
        // await new Promise(resolve => setTimeout(resolve, 2000)); // 2 saniye bekle
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacter(data.results);
        setLoading(false);
    };

    return (
        <div>
            <Button className='bg-green-500 font-bold text-yellow-400' loading={loading}  onClick={fetchCharacter}>
                Load Characters
            </Button>
            <h1>Characters</h1>
            <ul>
                {character.map((character) => (
                    <h4 key={character.id}>{character.name}</h4>
                ))}
            </ul>
        </div>
    );
};

export default Home;
