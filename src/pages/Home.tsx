import axios from 'axios';
import useSWRInfinite from 'swr/infinite';

interface DogData {
  message: string[];
  status: string;
}

const URL = 'https://dog.ceo/api/breeds/image/random/50';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const getKey = (pageIndex: number, previousPageData: DogData) => {
  if (previousPageData && !previousPageData.message.length) return null;
  return URL;
};

function Home() {
  const { data } = useSWRInfinite<DogData>(getKey, fetcher);

  return (
    <div className="mb-16 flex flex-col">
      <div></div>
      {data?.map((data, index) => (
        <div key={index} className="flex flex-wrap items-center justify-center">
          {data?.message.map((dogUrl, index) => (
            <img
              key={index}
              src={dogUrl}
              alt="Dog"
              className="h-full w-full object-fill"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Home;
