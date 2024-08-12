import {useState, useEffect} from 'react';
import JobListing from './JobListing'
import Spinner from './Spinner'
const JobListings = ({isHomePage = false}) => {
    const [listOfJobs, setListOfJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = isHomePage ? 'http://localhost:8000/jobs?_limit=3' : 'http://localhost:8000/jobs';
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setListOfJobs(data);
            } catch(error){
                console.log(error);            
            } finally{
                setIsLoading(false);
            }
        }

        fetchJobs();
    }, []);

    return (
        <section className='bg-blue-50 px-4 py-10'>
            <div className="container-xl lg:container m-auto">
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                    {isHomePage ? 'Recent Jobs' : 'All Jobs'}
                </h2>             
                    {isLoading ? (<Spinner isLoading={isLoading}/>) : (
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {listOfJobs.map((job) => (
                            <JobListing key={job.id} job={job}/>
                        ))}
                    </div>
                )}             
            </div>
        </section>
    )
}

export default JobListings
