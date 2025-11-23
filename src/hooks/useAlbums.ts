import { useState, useEffect } from 'react';

import { type Album } from '../types';

const seedAlbums: Album[] = [
  { id: '1', title: 'Charon', artist: '1000 Eyes', date: '2025-01-01', cover: '/covers/charon.jpg', genres: ['Ambient'], tracklist: [], trackCount: 0, duration: '0', size: '0 MB' },
  { id: '2', title: 'Schwanengesang', artist: '1000 Eyes', date: '2025-01-01', cover: '/covers/Schwanengesang.png', genres: ['Classical'], tracklist: [], trackCount: 0, duration: '0', size: '0 MB' },
];

const mockAlbums: Album[] = [];

for (let i = 0; i < 20; i++) {
  const template = seedAlbums[i % seedAlbums.length];

  mockAlbums.push({
    ...template,
    id: `${i}`
  });
}

export const useAlbums = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlbums = () => {
      try {
        setAlbums(mockAlbums);

      } catch (e) {
        setError('Cannot load album.');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlbums();

  }, []);

  return { albums, isLoading, error };
};