import PocketBase from 'pocketbase';
import Link from 'next/link';
import CreateNote from './CreateNote';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCacher = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getNotes(){
    const pb = new PocketBase('http://127.0.0.1:8090');
    try {
        const res = await pb.collection('notes').getList(1, 30);
        const items = res.items;
        return items as any[];  
    } catch (error) {
        console.error("Failed to fetch notes:", error);
        throw error;  // Re-throw the error after logging it
    }
}


export default async function NotesPage(){
    const notes = await getNotes();

    return(
        <div>
            <h1>Notes</h1>
            <div className='notesContainer'>
                {notes?.map((note) => {
                return <Note key={note.id} note={note} />;
            })}
            </div>
            <CreateNote />
        </div>
    );
}

function Note({ note}: any) {
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div className='note'>
                <h2>{title}</h2>
                <h5>{content}</h5>
                <p>{created}</p>
            </div>
        </Link>
    )
}

