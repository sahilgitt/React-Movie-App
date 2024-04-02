import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { comedyMovies,imageUrl } from '../Url';
import { Link } from 'react-router-dom';
import { Movie_Context } from '../App';

const Comedy = () => {
  // const {searchdata,setsearchdata,filteredUsers,setFilteredUsers} = useContext(Movie_Context)

  const [popular, setpopular] = useState([])
  useEffect(() => {axios.get(comedyMovies).then((argument)=>setpopular(argument.data.results))
    
  }, [])
  
  return (
    <div className='row m-5 d-flex justify-content-center'>
      <h1 style={{textAlign:"center"}}>COMEDY MOVIES</h1>
      {popular.map((movie,index)=>{
        
        return(
          
          <Card key={index} style={{ width: '18rem', margin: '0 10px 20px 10px' }} className="mb-3">
          <Card.Img variant="top" src={imageUrl+movie.poster_path} style={{height:"250px",width:"250px",marginTop:"20px",marginLeft:"5px"}} />
          <Card.Body >
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>rating:{movie.vote_average}</Card.Text>
            <Card.Text>{movie.release_date}</Card.Text>
            <Button className='btn' variant="primary">Watch Now</Button>
          </Card.Body>
        </Card>
        
          
        )
        
      })}

     
    </div>
     
   
  )
}


export default Comedy