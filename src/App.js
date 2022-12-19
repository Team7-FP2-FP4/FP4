import Search from './components/Search';
import Movie from './components/Movie';
import Header from './components/Header';
import './App.css';
import { useApp } from './useApp';

function App() {
  const {
    searchValue,
    setSearchValue,
    movies,
    title,
  } = useApp();

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
