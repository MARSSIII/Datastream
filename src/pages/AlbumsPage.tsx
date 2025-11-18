import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAlbums } from '../hooks/useAlbums';
import AlbumGrid from '../components/AlbumGrid';
import { type Album } from '../types';

const AlbumsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const { albums, isLoading, error } = useAlbums();

  const handleSelectAlbum = (album: Album) => {
    navigate(`/albums/${album.id}`);
  };

  return (
    <div>    
      {isLoading && <p>{t('loading')}</p>}

      {error && <p>{error}</p>}

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