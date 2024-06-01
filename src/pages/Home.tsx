import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import axios from 'axios';
import useSWR from 'swr';


type DogData = {
  message: string[],
  status: string,
};

// type FoxData = {
//   image: string,
//   link: string,
// };

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const Home: React.FC = () => {

  const { data: dogData, mutate: mutateDog } = useSWR<DogData>('https://dog.ceo/api/breeds/image/random/3', fetcher);
  // const { data: foxData, mutate: mutateFox } = useSWR<FoxData>('https://randomfox.ca/floof/?ref=apilist.fun', fetcher);

  console.log(dogData);

  return (
    <Grid container>
      <Grid item>
        <ImageList>
          {dogData?.message.map((url) => (
            <ImageListItem key={url} cols={4} rows={2}>
              <img src={url} loading='lazy' className="dog" alt="Dog photo" />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item className="card">
        <Button
          variant='outlined'
          onClick={() => {
            mutateDog();
          }}
        >
          Refresh
        </Button>
      </Grid>
    </Grid>
  )
}

export default Home;
