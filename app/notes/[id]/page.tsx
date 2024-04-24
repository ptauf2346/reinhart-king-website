import PocketBase from 'pocketbase';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCacher = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getNote(noteId: string){
    const pb = new PocketBase('http://127.0.0.1:8090');
    try {
        const res = await pb.collection('notes').getOne(noteId);
        return res;  
    } catch (error) {
        console.error("Failed to fetch notes:", error);
        throw error;  // Re-throw the error after logging it
    }
}


export default async function NotePage( {params}: any){
const note = await getNote(params.id)
    return(
        <div>
            <h1>notes/{note.id}</h1>
            <div className="note">
                    <h2>{note.title}</h2>
                    <h5>{note.content}</h5>
                    <p>{note.created}</p>
            </div>
        </div>
    )
}