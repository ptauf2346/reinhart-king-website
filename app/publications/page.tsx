import PocketBase from 'pocketbase';

async function getPublications(){
    const pb = new PocketBase(process.env.POCKETBASE_URL);
    try {
        const publications = await pb.collection('publications').getFullList({sort: '-publication_year'});
        return publications;
    } catch (error) {
        console.error('Failed to fetch contact info:', error);
        throw error;
    }
}

export default async function PublicationsPage(){
    const publications = await getPublications();

    return(
        <div className="w-1/2 mx-auto">
            <h1 className="text-center text-2xl py-2">Publications</h1>
            <br></br>
            {publications?.map((item) => {
                return <Publication key={item.id} publication={item}/>
            })}
        </div>
    );
}


function Publication({ publication}: any) {
    const { pmid, title, authors, journal, publication_year, doi } = publication || {};

    return (
            <div className='py-2'>
                <h1 className="text-sm"><b>{title}</b></h1>
                <p className="text-xs">{authors}</p>
                <p className="text-xs"><i>{journal}</i>, {publication_year}, PMID: {pmid}</p>
                {doi && (<p className="text-xs">DOI: <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{doi}</a></p>)}
            </div>
    )
}
