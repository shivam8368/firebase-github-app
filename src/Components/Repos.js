import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { ListGroup, ListGroupItem} from 'reactstrap';


const Repos = ({repos_url}) => {
    const [repos , setRepos] = useState([]);

    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }

    useEffect(() => {
        fetchRepos() 
    }, [repos_url] );


    return(
        <ListGroup>
            {repos.map(repo => (
                <ListGroupItem key = {repo.id}>
                    <div claaName = "text-primary">{repo.name}</div>
                    <div claaName = "text-secondary">{repo.language}</div>
                    <div claaName = "text-info">{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>

    )

}

export default Repos;