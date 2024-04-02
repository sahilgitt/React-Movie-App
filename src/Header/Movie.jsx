import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'
import { imageUrl } from '../Url'
import { useNavigate } from 'react-router-dom'
import { Movie_Context } from '../App'

const Movie = ({ movieApi, title }) => {

  const [Movie, setMovie] = useState([])
  const { contextMovie, setcontextMovie, movieId, setmovieId, searchdata, 
  setsearchdata, filteredUsers, setFilteredUsers } = useContext(Movie_Context)

  // console.log(contextMovie);
  // useEffect(() => {
  //   setcontextMovie(Movie)
  // }, [])
 
  console.log(searchdata);

  useEffect(() => {
    axios.get(movieApi).then((response) => {
      setMovie(response.data.results)
      setcontextMovie(response.data.results) // Set contextMovie when data is fetched
    });
  }, [movieApi,Movie])
  console.log(Movie);
  // console.log(contextMovie);

  const Navigator = useNavigate();

  const NavigateToMovieDetails = (id) => {
    setmovieId(id);
    Navigator("/MovieDetails")
  }
  // console.log(movieId);

  // Filter movies based on search query
  const filteredMovies = Movie.filter(movie => {
    return (movie.original_title || movie.original_name).toLowerCase().includes(searchdata.toLowerCase());
  });

  return (
    <div className='row m-5 d-flex justify-content-center'>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {filteredMovies.map((movie, index) => {
        return (
          <Card key={index} style={{ width: '18rem', margin: '0 10px 20px 10px', backgroundColor: 'gray' }} className="mb-3">
            <Card.Img variant="top" src={imageUrl + movie.poster_path} style={{ height: "250px", width: "250px", marginTop: "20px", marginLeft: "5px" }} />
            <Card.Body>
              <Card.Title>{movie.original_title}</Card.Title>
              <Card.Text>Rating: {movie.vote_average}</Card.Text>
              <Card.Text>Release Date: {movie.release_date}</Card.Text>
              <Button onClick={() => NavigateToMovieDetails(movie.id)} className='btn' variant="primary">Watch Now</Button>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}

export default Movie
