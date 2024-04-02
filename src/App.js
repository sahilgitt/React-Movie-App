import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Header/Navbar';
// import Latest from './Header/Latest';
// import Popular from './Header/Popular';
// import Comedy from './Header/Comedy';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Header/Navbar.css'
import './Header/Button.css'
import './Header/Card.css'
import './Header/MovieDetails.css'
import { comedyMovies,latestMovies,popularMovies } from './Url';
import Movie from './Header/Movie';
import Banner from './Header/Banner';
import MovieDetails from './Header/MovieDetails';
import { createContext, useState } from 'react';

const Movie_Context = createContext(); //context created//

function App() {
  const [contextMovie, setcontextMovie] = useState([]) 
  const [movieId, setmovieId] = useState()
  const [page, setpage] = useState(true)

  const [searchdata, setsearchdata] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  // const getSearchData=()=>{
  //   const results=Movie.filter((movie)) => Movie.movie.original_title.toLowerCase().includes(searchInput.toLowercase());
  //   setFilteredUsers(results)
  // }
  
  return (
    <div>
      <Movie_Context.Provider value={{contextMovie,setcontextMovie,movieId,setmovieId,
       searchdata,setsearchdata,filteredUsers, setFilteredUsers}}> 

      <BrowserRouter>
      { page? (<>
      <Navbar/>
      <Banner/> </>): null}
      
      <Routes>
      
       
       <Route path="/Latest" element={ <Movie movieApi={latestMovies} title="LATEST MOVIES"/>}/>
       <Route path="/Popular" element={ <Movie movieApi={popularMovies} title="POPULAR MOVIES"/>}/>
       <Route path="/Comedy" element={ <Movie movieApi={comedyMovies} title="COMEDY MOVIES"/>}/>
       <Route path="/MovieDetails" element={<MovieDetails setpage={setpage}/>}/>
      
      </Routes>
      
      </BrowserRouter>
      </Movie_Context.Provider>
      
    </div>
    
  );
}

export default App;
export {Movie_Context} //context exported//
