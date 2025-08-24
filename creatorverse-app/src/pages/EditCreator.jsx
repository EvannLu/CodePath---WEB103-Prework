import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' });

    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();
            
            if (data) {
                setCreator(data);
            }
        };
        fetchCreator();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => ({ ...prev, [name]: value }));
    };

    const updateCreator = async (event) => {
        event.preventDefault();
        
        await supabase
            .from('creators')
            .update({ name: creator.name, url: creator.url, description: creator.description, imageURL: creator.imageURL })
            .eq('id', id);

        navigate('/');
    };

    const deleteCreator = async (event) => {
        event.preventDefault();
        
        if (window.confirm(`Are you sure you want to delete ${creator.name}?`)) {
            await supabase
                .from('creators')
                .delete()
                .eq('id', id);
    
            navigate('/');
        }
    };

    return (
        <div>
            <h2>Edit Content Creator</h2>
            <form onSubmit={updateCreator}>
                <label>Name</label>
                <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} required />
                
                <label>Channel URL</label>
                <input type="url" id="url" name="url" value={creator.url} onChange={handleChange} required />
                
                <label>Description</label>
                <textarea id="description" name="description" value={creator.description} onChange={handleChange} rows="5" required></textarea>
                
                <label>Image URL (Optional)</label>
                <input type="url" id="imageURL" name="imageURL" value={creator.imageURL} onChange={handleChange} />
                
                <div className="grid">
                    <button type="submit">Update Creator</button>
                    <button onClick={deleteCreator} className="secondary">Delete Creator</button>
                </div>
            </form>
        </div>
    );
};

export default EditCreator;