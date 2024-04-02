import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'
import { latestMovies,imageUrl } from '../Url'
import { Movie_Context } from '../App'

const Latest = () => {
  // const {searchdata,setsearchdata,filteredUsers,setFilteredUsers} = useContext(Movie_Context)

  const [latest, setlatest] = useState([])
  
  useEffect(() =>{axios.get(latestMovies).then((argument)=>setlatest(argument.data.results))
  
  }, [])
  console.log(latest);

  return (
    <div className='row m-5 d-flex justify-content-center'>
      <h1 style={{textAlign:"center"}}>LATEST MOVIES</h1>
      {latest.map((movie,index)=>{
        return(
          <Card key={index} style={{ width: '18rem', margin: '0 10px 20px 10px' }} className="mb-3">
          <Card.Img variant="top" src={imageUrl+movie.poster_path} style={{height:"250px",width:"250px",marginTop:"20px",marginLeft:"5px"}}/>
          <Card.Body>
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

export default Latest