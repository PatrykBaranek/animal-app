import useSWR from 'swr';
import axios from 'axios';


export interface DogData {
  message: string[];
  status: string;
}

const URL = 'https://dog.ceo/api/breeds/image/random/50';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function useDogs() {

  const fetchedData = useSWR<DogData>(URL, fetcher, {
    revalidateOnFocus: false,
  });

  return { ...fetchedData }
}

export default useDogs;