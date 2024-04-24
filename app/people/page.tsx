import PocketBase from 'pocketbase';
import Image from 'next/image'

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCacher = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getPeople(){
    const pb = new PocketBase(process.env.POCKETBASE_URL);
    try {
        const res = await pb.collection('people').getFullList({sort: 'name'});
        return res as any[];  
    } catch (error) {
        console.error("Failed to fetch people:", error);
        throw error;  // Re-throw the error after logging it
    }
}

async function getAlumni(){
    const pb = new PocketBase(process.env.POCKETBASE_URL);
    try {
        const res = await pb.collection('people_alumni').getFullList({sort: '-year'});
        return res as any[];  
    } catch (error) {
        console.error("Failed to fetch people:", error);
        throw error;  // Re-throw the error after logging it
    }
}

export default async function PeoplePage(){
    const currentmembers = await getPeople();
    const alumni = await getAlumni();

    return(
        <div>
            <h1 className="text-center text-2xl py-2">People</h1>
            <br></br>
            <div className='notesContainer'>
                {currentmembers?.map((currentmember) => {
                return <CurrentMember key={currentmember.id} currentmember={currentmember} />;
            })}
            </div>
            <div className="alumniContainer py-12">
                <h1 className="text-2xl">Lab Alumni:</h1>
                {alumni?.map((person) => {
                    return <Alumni key={person.id} person={person} />
                })}
            </div>
        </div>
    );
}

function CurrentMember({ currentmember}: any) {
    const { id, name, degrees, bio, hometown, picture, position } = currentmember || {};
    const ImageURL = `${process.env.POCKETBASE_URL}/api/files/9t30nglpx788qy6/${id}/${picture}`;

    return (
            <div className='note'>
                <h1 className="text-center"><b>{name}</b></h1>
                <h2 className="text-center">{position}</h2>
                <div className="flex justify-center p-4 items-center">                
                    <Image className="w-48" src={ImageURL} width={600} height={600} alt="personnel photo"/>
                </div>
                <h5><u>Hometown:</u> {hometown}</h5>
                <h5><u>Degrees:</u> {degrees}</h5>
                <p><u>Bio:</u> {bio}</p>
            </div>
    )
}

function Alumni({ person}: any) {
    const { id, name, position, university, year, current_position } = person || {};

    return (
            <div className='text-md'>
                <span>{year} <b>{name}</b>: former {position} at {university}. {current_position ? ` Now ${current_position}` : ''}</span>
            </div>
    )
}