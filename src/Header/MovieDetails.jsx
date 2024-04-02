import React, { useContext, useEffect} from 'react'
import { Movie_Context } from '../App'
import { imageUrl } from '../Url';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';



const MovieDetails = ({setpage}) => {
  useEffect(() => {
    setpage(false)
  }, [setpage])
  
  const {contextMovie,movieId}=useContext(Movie_Context);
   console.log(movieId);
   console.log(contextMovie);
  // console.log(sample);

   const [singleMovie] = contextMovie?.filter(f => f.id === movieId);
   console.log(singleMovie);

   const Navigator2 = useNavigate();
   const NavigateToMovie=()=>{
    Navigator2("/Latest")

   }
   return(
    
      <div className="main" >
        {/* <div className="image_view">
          <img src={imageUrl+singleMovie?.poster_path} alt="" style={{height:"350px",width:"500px",borderRadius:"15px"}} />
         </div> */}
          <div className="title_view" style={{backgroundImage:`url(${imageUrl+singleMovie?.poster_path})`}}>

            <div className='title_types' style={{textAlign:"center",marginTop:"200px",color:"white"}}>
            <h2>{singleMovie?.title}</h2>
            <h2>{singleMovie?.name}</h2>
            <h6><b>Overview:</b>{singleMovie?.overview}</h6>
            <h6><b>Language:</b>{singleMovie?.original_language}</h6>
            <h6><b>Release Date:</b>{singleMovie?.release_date}</h6>
            <h6><b>Popularity:</b>{singleMovie?.popularity}</h6>
            <Rating name="customized-10" defaultValue={singleMovie?.vote_average} max={10} style={{color:"white"}} /><br></br>
            <button onClick={()=>NavigateToMovie()} className='btn_2'>back to home</button>
            </div>

            </div>
          
       
      </div>
    
   )

  
}

export default MovieDetails