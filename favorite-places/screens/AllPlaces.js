import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import PlacesList from '../components/Places/PlacesList';
import { fetchPlaces } from '../util/database';

const AllPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadPlaces = async () => {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    };

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;
