import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
const JobPage = () => {

    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            try{
                const res = await fetch(`/api/jobs/${id}`);
                const data = await res.json();
                setJob(data);
            } catch(error) {
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        }
        fetchJob();
    }, [])
    
    return isLoading ? <Spinner /> : (
        <div className="container mx-auto p-4 mt-5">
            <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
            <p className="text-gray-600 mb-4">{job.location}</p>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <p className="text-gray-600 mb-4">{job.type}</p>
            <p className="text-gray-600 mb-4">{job.salary}</p>
            <p className="text-gray-600 mb-4">{job.company.name}</p>
            <p className="text-gray-600 mb-4">{job.company.description}</p>
            <p className="text-gray-600 mb-4">{job.company.contactEmail}</p>
            <p className="text-gray-600 mb-4">{job.company.contactPhone}</p>

        </div>)
    }

export default JobPage
