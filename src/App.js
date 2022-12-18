import Search from './components/Search';
import Movie from './components/Movie';
import Header from './components/Header';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const title = 'FinProH8';

  const getMovieRequest = async (searchValue) => {
    if (searchValue === '') {
      const url = `https://www.omdbapi.com/?s=man&apikey=bdfd4318`
      const r = await axios.get(url)
      const response = r.data
      if (response.Search) {
        setMovies(response.Search)
      }
      console.log("11111111");
    } else {
      const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=bdfd4318`
      const r = await axios.get(url)
      const response = r.data
      if (response.Search) {
        setMovies(response.Search)
      }
      console.log(response);
    }
    console.log(searchValue);
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <div className='flex flex-row pl-24'>
        <Header title={title} />
        <div className='container mt-8 mb-4 ml-96'>
          <div class="w-1/2 h-32 flex-grow-0">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
        </div>
      </div>
      {searchValue === '' ? (

        <div className='container my-12 mx-auto px-4 md:px-12'>
          <div className='flex flex-wrap justify-around -mx-1 lg:-mx-4'>
            <Movie
              movies={movies}
            />
          </div>
        </div>
      ) : (
        <div className='container my-12 mx-auto px-4 md:px-12'>
          <div className='flex flex-wrap justify-around -mx-1 lg:-mx-4'>
            <Movie
              movies={movies}
            />
          </div>
        </div>
      )
      }
    </div>
  );
}

export default App;
