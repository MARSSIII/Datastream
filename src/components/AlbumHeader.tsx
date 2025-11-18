import React from 'react';
import { type Album } from '../types';

interface AlbumHeaderProps {
  album: Album;
}

const AlbumHeader: React.FC<AlbumHeaderProps> = ({ album }) => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start gap-4'>
      <img 
        src={album.cover} 
        alt={`Cover for ${album.title}`}
        className='w-50 h-50 md:w-64 md:h-64 object-cover rounded-lg' 
      />
      <div className='flex flex-col pt-2 gap-1'>
        <h1 className='text-2xl'>{album.title}</h1>
        <h2>{album.artist}</h2>
        <p>
          {album.date} &bull; {album.trackCount} Songs &bull; {album.duration} &bull; {album.size}
        </p>
      </div>
    </div>
  );
};

export default AlbumHeader;