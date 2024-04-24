import PocketBase from 'pocketbase';
import { Key } from 'react';

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCacher = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getNews(){
    const pb = new PocketBase('http://3.145.157.159:8090');
    try {
        const res = await pb.collection('news').getFullList({sort: '-date'});
        return res as any[];  
    } catch (error) {
        console.error("Failed to fetch people:", error);
        throw error;  // Re-throw the error after logging it
    }
}

export default async function NewsPage(){
    const notes = await getNews();

    return(
        <div className="w-1/2 mx-auto">
            <h1 className="text-center text-2xl py-2">News</h1>
            <br></br>
            <div className='newsContainer'>
                {notes?.map((note) => {
                return <Note key={note.id} note={note} />;
            })}
            </div>
        </div>
    );
}

function Note({ note}: any) {
    const { date, event, image } = note || {};
    const event_items = event ? event.split(';').map((item: string) => item.trim()) : [];
    const [year, month] = date ? date.split('-') : [];
    const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    if (!month || month < 1 || month > 12){
        console.warn('Invalid or missing month');
        const monthName = ''
    }

    const monthIndex = parseInt(month, 10) - 1;
    const monthName = months[monthIndex];

    return (
            <div className='note'>
                <h1 className='text-xl'><b>{monthName} {year}</b></h1>
                <ul>
                    {event_items.map((item: string, index: Key | null | undefined) => {
                        return (
                            <li key={index}>- {item}</li>
                        );
                    })}
                </ul>
            </div>
    )
}

