import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();
            setCreator(data);
        };
        fetchCreator();
    }, [id]);

    if (!creator) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <article>
                <header>
                    <img src={creator.imageURL} alt={creator.name} style={{ maxHeight: '400px', objectFit: 'cover' }} onError={(e) => { e.target.onerror = null; e.target.src="https://i.imgur.com/xO432LC.png" }}/>
                    <h2>{creator.name}</h2>
                </header>
                <p>{creator.description}</p>
                <a href={creator.url} target="_blank" rel="noopener noreferrer" role="button">
                    Visit Channel 📺
                </a>
                <footer>
                    <Link to={`/edit/${id}`} role="button" className="contrast">Edit Creator</Link>
                </footer>
            </article>
        </div>
    );
};

export default ViewCreator;