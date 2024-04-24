'use client';

import PocketBase from 'pocketbase';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();

    const create = async() => {
        const pb = new PocketBase('http://127.0.0.1:8090');
        const data = {
            title,
            content
        };
        
        const record = await pb.collection('notes').create(data);
        setTitle('')
        setContent('')
        router.refresh();
    }

    return (
        <form onSubmit={create}>
            <h3>create a new note:</h3>
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">
                Create Note
            </button>
        </form>
    )
}