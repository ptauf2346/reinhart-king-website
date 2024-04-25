import PocketBase from 'pocketbase';
import Image from 'next/image'

async function getResearch(){
    const pb = new PocketBase(process.env.POCKETBASE_URL);
    try {
        const res = await pb.collection('research').getFullList({sort: 'order'});
        return res as any[];  
    } catch (error) {
        console.error("Failed to fetch people:", error);
        throw error;  // Re-throw the error after logging it
    }
}

export default async function ResearchPage(){
    const notes = await getResearch();

    return(
        <div className="w-full">
            <h1 className="text-center text-2xl py-2">Research</h1>
            <br></br>
            <div className="flex justify-center">
                <p className="text-justify w-1/2">The Reinhart-King lab uses tissue engineering, microfabrication, novel biomaterials, model organisms, and tools from cell and molecular biology to study the effects of mechanical and chemical changes in tissues during disease progression. We have projects focused on cancer, diabetes, cardiovascular disease, and ocular diseases.</p>
            </div>
            <br></br>
            <div className="flex justify-center">
                <p className="text-justify w-1/2">We work with scientists and engineers across campus, and we collaborate with clinicians in the world-class Vanderbilt University Medical Center.</p>
            </div>
    
            <div className='notesContainer py-6'>
                {notes?.map((note) => {
                return <Note key={note.id} note={note} />;
            })}
            </div>
        </div>
    );
}

function Note({ note}: any) {
    const { id, title, description, image } = note || {};
    const ImageURL = `${process.env.POCKETBASE_URL}/api/files/v6121ckigj324uv/${id}/${image}`;

    return (
            <div className='note'>
                <h5 className="text-3xl">{title}</h5>
                <h5 className="text-justify">{description}</h5>
                <Image className="mx-auto p-4" src={ImageURL} width={200} height={200} alt="research pic"/>
            </div>
    )
}

