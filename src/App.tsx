
import './App.css';
import useSWR from 'swr';
import axios from 'axios';

type Data = {
  message: string,
  status: string,
};

type FoxData = {
  image: string,
  link: string,
};

const fetcher = (url: string) => axios.get(url).then(res => res.data);

function App() {

  const { data: dogData, mutate: mutateDog } = useSWR<Data>('https://dog.ceo/api/breeds/image/random', fetcher);
  const { data: foxData, mutate: mutateFox } = useSWR<FoxData>('https://randomfox.ca/floof/?ref=apilist.fun', fetcher);

  return (
    <div>
      <div>
        <img src={foxData?.image} className="logo" alt="Vite logo" />
        <img src={dogData?.message} className="logo react" alt="React logo" />
      </div>
      <div className="card">
        <button 
          onClick={() => {
            mutateDog();
            mutateFox();
          }}
        >
          Refresh
        </button>
      </div>
    </div>
  )
}

export default App
