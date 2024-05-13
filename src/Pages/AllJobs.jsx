import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loading from "../Components/Loading";


const AllJobs = () => {
    const {isPending,data:users}= useQuery(
        {
            queryKey:['all', 'jobs'],
            queryFn:async()=>{
                const res= await fetch('http://localhost:3000/all');
                return res.json();
            }
        }
        
    )
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowContent(true);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, []);
    if(isPending || !showContent)
        {return <Loading></Loading>}
    return (
        <div>
            {users.length}
        </div>
    );
};

export default AllJobs;