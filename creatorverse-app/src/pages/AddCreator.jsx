import React, { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

const AddCreator = () => {
    const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => ({ ...prev, [name]: value }));
    };

    const addCreator = async (event) => {
        event.preventDefault();
        
        await supabase
            .from('creators')
            .insert({ name: creator.name, url: creator.url, description: creator.description, imageURL: creator.imageURL })
            .select();

        navigate('/');
    };

    return (
        <div>
            <h2>Add a New Content Creator</h2>
            <form onSubmit={addCreator}>
                <label>Name</label>
                <input type="text" id="name" name="name" value={creator.name} onChange={handleChange} required />
                
                <label>Channel URL</label>
                <input type="url" id="url" name="url" value={creator.url} onChange={handleChange} required />
                
                <label>Description</label>
                <textarea id="description" name="description" value={creator.description} onChange={handleChange} rows="5" required></textarea>
                
                <label>Image URL (Optional)</label>
                <input type="url" id="imageURL" name="imageURL" value={creator.imageURL} onChange={handleChange} />
                
                <button type="submit">Add Creator</button>
            </form>
        </div>
    );
};

export default AddCreator;