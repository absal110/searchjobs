import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { JobCard } from "./JobCard"

export const JobList = () => {
    const [jobs, setJobs] = useState([])
    const [page,setPage] = useState(0)

    const fetchJobs = () => {
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

        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .then((result) => setJobs(prev => [...prev, ...result.jdList]))
        .catch((error) => console.error(error));
    }

    const infiniteScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop +1 >= document.documentElement.offsetHeight){
            setPage(prev => prev + 12)
        }
    }

    useEffect(() => {
        fetchJobs()
    },[page])

    useEffect(() => {
        window.addEventListener("scroll",infiniteScroll)
    },[])


    return <JobCard jobs = {jobs}/>
}