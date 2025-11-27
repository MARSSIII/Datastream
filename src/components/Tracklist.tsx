import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { type Track } from '../types';

interface TracklistProps {
  tracks: Track[];
  onPlayTrack: (track: Track, queue: Track[]) => void;
  showAlbum?: boolean;
}

const Tracklist: React.FC<TracklistProps> = ({ tracks, onPlayTrack, showAlbum = false }) => {
  const { t } = useTranslation();

  const desktopGridClass = showAlbum 
    ? 'md:grid-cols-[auto_auto_auto_repeat(8,1fr)]' 
    : 'md:grid-cols-[auto_auto_auto_repeat(7,1fr)]';

  return (
    <div className={`grid gap-x-6 text-sm
        grid-cols-[auto_auto_minmax(0,1fr)_minmax(0,1fr)_auto]
        ${desktopGridClass}`}>

      <div className="col-span-full grid grid-cols-subgrid gap-x-6 items-center
          text-fg font-bold p-3 border border-fg/10 rounded-t-xl">
        <p>0</p>
        <p className="text-center">#</p>
        <p>{t('trackTitle')}</p>
        <p>{t('artist')}</p>

        {showAlbum && (
          <p className="hidden md:block">{t('album')}</p>
        )}

        <p>{t('duration')}</p>
        <p className="hidden md:block">{t('played')}</p>
        <p className="hidden md:block">{t('quality')}</p>
        <p className="hidden md:block">{t('fileSize')}</p>
        <p className="hidden md:block">{t('genres')}</p>
        <p className="hidden md:block"></p>
      </div>

      {tracks.map((track, index) => (
        <div
          key={track.id}
          onClick={() => { if (!showAlbum) {onPlayTrack(track, tracks)} else {onPlayTrack(track, [track])} }}
          className="col-span-full grid grid-cols-subgrid gap-x-6 items-center px-3
                     border-x border-b border-fg/10 hover:bg-accent transition-colors
                     last:rounded-b-xl last:shadow-sm cursor-pointer"
        >
          <p>0</p>
          <p className="text-center py-3">{index + 1}</p>
          <p className="truncate">{track.title}</p>

          <Link 
            to={`/artists/${track.artistId}`} 
            className="hover:underline relative text-link"
            onClick={(e) => e.stopPropagation()}
          >
            {track.artist}
          </Link>

          {showAlbum && (
            <div className="hidden md:block text-link truncate">
              <Link 
                to={`/albums/${track.albumId}`}
                className="hover:underline relative"
                onClick={(e) => e.stopPropagation()}
              >
                {track.album}
              </Link>
            </div>
          )}

          <p>{track.duration}</p>
          <p className="hidden md:block">{track.plays}</p>
          <p className="hidden md:block">{track.quality}</p>
          <p className="hidden md:block">{track.size}</p>
          <p className="hidden md:block truncate">{Array.isArray(track.genres) ? track.genres.join(', ') : ''}</p>
          <div className="hidden md:flex justify-center">...</div>
        </div>
      ))}
    </div>
  );
};

export default Tracklist;
