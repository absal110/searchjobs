import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { JobCard } from "./JobCard"

export const JobList = (query) => {
    const [jobs, setJobs] = useState([])
    const [filtered, setFiltered] = useState([])
    const [page,setPage] = useState(0)
    

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
            setJobs(prev => [...prev, ...result.jdList])
            setPage(prev=>prev+12)
            // setFilters()
        })
        // .then((result) => setJobs(result.jdList))
        .catch((error) => console.error(error));
    }


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
    },[])

    useEffect(()=>{
        setFiltered(jobs.filter(job => {
            console.log(job.minExp)
            return ( !query.query.minExp || job.minExp<=query.query.minExp)&&
            ( !query.query.companyName || job.companyName.toLowerCase().includes(query.query.companyName.toLowerCase()))&&
            ( !query.query.location || job.location.toLowerCase().includes(query.query.location.toLowerCase()))&&
            ( !query.query.role || job.jobRole.toLowerCase().includes(query.query.role.toLowerCase()))
        }))
        console.log(filtered)
    },[query,jobs])


    return <JobCard jobs = {filtered}/>
}