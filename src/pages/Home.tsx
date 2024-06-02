import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import axios from 'axios';
import useSWR from 'swr';

type DogData = {
  message: string[];
  status: string;
};

// type FoxData = {
//   image: string,
//   link: string,
// };

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function Home() {
  const { data: dogData, mutate: mutateDog } = useSWR<DogData>(
    'https://dog.ceo/api/breeds/image/random/3',
    fetcher
  );

  return (
    <div>
      <div>
        <ImageList>
          {dogData?.message.map((url) => (
            <ImageListItem key={url} cols={4} rows={2}>
              <img src={url} loading="lazy" className="dog" alt="Dog photo" />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <div className="card">
        <Button
          variant="outlined"
          onClick={() => {
            mutateDog();
          }}
        >
          Refresh
        </Button>
      </div>
    </div>
  );
}

export default Home;
