import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';
import useDogs from '../hooks/useDogs.hook';
import { useState } from 'react';
import axios from 'axios';

function Dogs() {
  const { data } = useDogs();
  const [likedPhoto, setLikedPhoto] = useState<string | null>(null);

  const handleLikePhoto = (dogUrl: string) => {
    console.log('like photo', dogUrl);
    setLikedPhoto(dogUrl);
  };

  const handleDownloadPicture = async (dogUrl: string) => {
    const res = await axios.get(dogUrl, { responseType: 'blob' });
    const imgUrl = URL.createObjectURL(res.data);
    const link = document.createElement('a');
    link.href = imgUrl;

    document.body.appendChild(link);
    link.click();
  };

  return (
    <section>
      {data?.message.map((dogUrl, index) => (
        <figure className="flex h-96 w-full flex-col justify-between gap-5 rounded-md bg-neutral-900 pb-4">
          <img
            onDoubleClick={() => handleLikePhoto(dogUrl)}
            key={index}
            src={dogUrl}
            alt="Dog"
            className="h-60 w-full justify-start object-fill"
          />
          <div>
            <FavoriteBorderIcon
              onClick={() => handleLikePhoto(dogUrl)}
              className={
                likedPhoto === dogUrl
                  ? 'cursor-pointer overflow-auto bg-red-700 text-white'
                  : 'cursor-pointer text-white'
              }
            />
            <DownloadIcon
              onClick={() => handleDownloadPicture(dogUrl)}
              className="cursor-pointer text-white"
            />
          </div>
        </figure>
      ))}
    </section>
  );
}

export default Dogs;
