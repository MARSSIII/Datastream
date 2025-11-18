import { useTranslation } from 'react-i18next';

import { useAlbums } from '../hooks/useAlbums';
import AlbumGrid from '../components/AlbumGrid';
import { type Album } from '../types';

const AlbumsPage = () => {
  const { t } = useTranslation();
  
  const { albums, isLoading, error } = useAlbums();

  const handleSelectAlbum = (album: Album) => {
    console.log('Album chosen:', album.title);
    // TODO: album page
  };

  return (
    <div>    
      {isLoading && <p>{t('albumsLoading')}</p>}

      {error && <p className="text-red-500">{error}</p>}

      {!isLoading && !error && (
        <AlbumGrid 
          albums={albums} 
          onSelectAlbum={handleSelectAlbum} 
        />
      )}
    </div>
  );
};

export default AlbumsPage;