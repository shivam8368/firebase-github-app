import React, { useState, useContext } from 'react';
import useFetchJobs from '../Hooks/useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from '../Components/Jobs';
import JobsPagination from '../Components/JobPagination';
import SearchForm from '../Components/SearchForm';
import { UserContext } from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import '../Layout/Layout.css'
import NavBar from '../Layout/NavBar';



const JobPage = () => {
   const context = useContext(UserContext);
   const [params, setParams] = useState({});
   const [page, setPage] =useState(1);
   const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page);

   function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }


  //  if (!context.user?.uid) {
  //       return <Redirect to="/SignIn" />
  //   }


  return (
    <div className="body-style job-style">
      <NavBar />
   <Container className = "my-4 ">
     <h1 className = "mb-4">Github Jobs</h1>
     <SearchForm params = {params} onParamChange = {handleParamChange} />
     <JobsPagination page = {page} setPage = {setPage} hasNextPage= {hasNextPage} />
     {loading && <h1>Loading...</h1>}
     {error && <h1>ERROR. Try Refreshing.</h1>}
     {jobs.map(job=> {
       return <Job key = {job.id} job = {job} />
     })}
     <JobsPagination page = {page} setPage = {setPage} hasNextPage= {hasNextPage} />
   </Container>
   </div>
  );
}

export default JobPage;


