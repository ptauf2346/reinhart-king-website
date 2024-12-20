import PocketBase from 'pocketbase';

async function getContactInfo(){
    const pb = new PocketBase(process.env.POCKETBASE_URL);
    try {
        const contact_info = await pb.collection('contact').getOne('o7atddnuczbtt5f');
        return contact_info;
    } catch (error) {
        console.error('Failed to fetch contact info:', error);
        throw error;
    }
}

export default async function ContactPage(){
    const contact_info = await getContactInfo();

    return(
        <div className="w-3/4 mx-auto">
            <h1 className="text-center text-2xl py-2">Contact</h1>
            <div>
                <h1 className="text-xl text-blue-900 py-3">Cynthia A. Reinhart-King</h1>
                <h3 className="py-1"><u>Lab Address</u></h3>
                <p>{contact_info.address}</p>
                <h3 className="py-1"><u>Email</u></h3>
                <p>{contact_info.email}</p>
            </div>
            <div>
                <h1 className="text-xl text-blue-900 py-3">Prospective Applicants</h1>
                <h3 className="text-lg text-red-900 py-1">Undergraduate Students:</h3>
                <p>Undergraduates interested in working in the lab should send Dr. Reinhart-King a resume and a recent transcript.</p>
                <h3 className="text-lg text-red-900 py-1">Prospective Graduate Students:</h3>
                <p>Prior to joining the lab, all PhD students must be admitted through the Biomedical Engineering program. Please consult the BME departmental website for admissions information.</p>
                <h3 className="text-lg text-red-900 py-1">Prospective Postdoctoral Associates:</h3>
                <p>Interested applicants should send a CV and a brief description of their research interests and career goals to {contact_info.email}.</p>
            </div>
        </div>
    );
}


