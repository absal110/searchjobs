import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { JobCard } from "./JobCard"

export const JobList = ({query}) => {
    const [jobs, setJobs] = useState([])
    const [filtered, setFiltered] = useState([])
    const [page,setPage] = useState(0)
    

    // Function to fetch job data from the API
    const fetchJobs = async() => {
        console.log("fetch")
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const body = JSON.stringify({
        "limit": 12,
        "offset": page
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
        };

        await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            setJobs(prev => page ? [...prev, ...result.jdList]: result.jdList)
            setPage(prev=>prev+12)
        })
        .catch((error) => console.error(error));
    }


    // Function to trigger fetching more jobs when user scrolls to the bottom
    const infiniteScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.offsetHeight){
            fetchJobs()
        }
    }

    useEffect(() => {
        fetchJobs()
    },[])

    useEffect(() => {
        window.addEventListener("scroll",infiniteScroll)
        return () => {
            window.removeEventListener("scroll", infiniteScroll);
          };
    },[])

    useEffect(()=>{
        setPage(0)
        setFiltered([])
        setFiltered(jobs.filter(job => {
            console.log(job.minExp)
            return ( !query.minExp || job.minExp<=query.minExp)&&
            ( !query.companyName || job.companyName.toLowerCase().includes(query.companyName.toLowerCase()))&&
            ( !query.location || job.location.toLowerCase().includes(query.location.toLowerCase()))&&
            ( !query.role || job.jobRole.toLowerCase().includes(query.role.toLowerCase()))
        }))
        console.log(filtered)
    },[query,jobs])


    return <JobCard jobs = {filtered}/>
}