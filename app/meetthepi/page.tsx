import PocketBase from 'pocketbase';
import Image from 'next/image'

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCacher = 'auto',
    runtime = 'nodejs',
    preferredRegion = 'auto'


async function getEducation(){
    const pb = new PocketBase(process.env.POCKETBASE_URL);
    try {
        const degrees = await pb.collection('cindy_education').getFullList();
        return degrees as any[];
    } catch (error) {
        console.error('Failed to fetch eductation:', error);
        throw error;
    }
}

async function getTitles(){
    const pb = new PocketBase(process.env.POCKETBASE_URL);
    try {
        const titles = await pb.collection('cindy_titles').getFullList({sort: 'order'});
        return titles as any[];
    } catch (error) {
        console.error('Failed to fetch titles', error);
        throw error;
    }
}

async function getCindyAbout(){
    const pb = new PocketBase(process.env.POCKETBASE_URL);
    try{
        const about = await pb.collection('cindy_about').getFullList({sort: 'order'});
        return about as any[];
    } catch (error) {
        console.error('failed to fetch cindy about', error);
        throw error;
    }
}


export default async function MeetThePIPage(){
    const education = await getEducation();
    const titles = await getTitles();
    const about = await getCindyAbout();

    return(
        <div className="w-full">
            <h1 className="text-center text-2xl py-2">Meet The PI</h1>
            <br></br>
            <div className="grid grid-cols-2 gap-4">
                <div className="mx-auto">
                    <Image src="/cindy-pi.jpg" width={300} height={300} alt="cindy photo"/>
                </div>
                <div className='my-auto text-left py-2 w-full'>
                    <h1 className="text-2xl py-2"><b><u>Cynthia A. Reinhart-King, PhD</u></b></h1>
                    <ul>
                        {titles?.map((item) => {
                            return <li key={item.id}>- {item.title}</li>
                        })}
                    </ul>
                    <h3 className="text-xl py-2"><u>Education:</u></h3>
                    <ul>
                        {education?.map((item) => {
                            return <li key={item.id}>- {item.degree}</li>
                        })}
                    </ul>

                </div>
            </div>
            <div className="py-4 w-3/4 mx-auto">
                {about?.map((item) => {
                    return <p className="text-justify py-2" key={item.id}> {item.paragraph} </p>
                })}
            </div>
        </div>
    );
}
