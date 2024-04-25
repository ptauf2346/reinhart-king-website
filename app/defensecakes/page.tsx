import PocketBase from 'pocketbase';
import Image from 'next/image'

async function getCakes(){
    const pb = new PocketBase(process.env.POCKETBASE_URL);
    try {
        const degrees = await pb.collection('defense_cakes').getFullList();
        return degrees as any[];
    } catch (error) {
        console.error('Failed to fetch eductation:', error);
        throw error;
    }
}

export default async function DefenseCakesPage(){
    const cakes = await getCakes();

    return(
        <div className="w-full">
            <h1 className="text-center text-2xl py-2">Defense Cakes</h1>
            <br></br>
            <h3 className="text-center w-3/4 mx-auto">For PhD dissertation defenses, Cindy makes a cake or cookies in the theme of the thesis research to celebrate!</h3>
            <div>
                {cakes?.map((item) => {
                    return <Cake key={item.id} cake={item}/>
                })}
            </div>
        </div>
    );
}

function Cake({ cake}: any) {
    const { id, student, description, image } = cake || {};
    const ImageURL = `${process.env.POCKETBASE_URL}/api/files/quhfgsxq9wltr4n/${id}/${image}`;

    return (
            <div className='note w-3/4 mx-auto'>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Image className="mx-auto p-1" src={ImageURL} width={260} height={260} alt="cake pic"/>
                    </div>
                    <div>
                        <h2 className="text-xl text-blue-800">{student}</h2>
                        <p className="text-med py-4">{description}</p>
                    </div>
                </div>
            </div>
    )
}

