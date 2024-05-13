import { useQuery } from "@tanstack/react-query";


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
    if(isPending)
        {return <div>loading</div>}
    return (
        <div>
            {users.length}
        </div>
    );
};

export default AllJobs;