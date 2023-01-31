import { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import OutlinedButton from '../components/UI/OutlinedButton';
import { GlobalColors } from '../constants/colors';
import { fetchPlaceDetails } from '../util/database';

const PlaceDetails = ({ route, navigation }) => {
  const [fetchedPlace, setFetchedPlace] = useState();

  const showOnMapHandler = () => {
    navigation.navigate('Map', {
      initialLat: fetchedPlace.location.lat,
      initialLng: fetchedPlace.location.lng,
    });
  };

  const selectedPlaceId = route.params.placeId;

  useEffect(() => {
    const loadPlaceData = async () => {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    };

    loadPlaceData();
  }, [selectedPlaceId]);

  if (!fetchedPlace)
    return (
      <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
    );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
  },

  locationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  addressContainer: {
    padding: 20,
  },

  address: {
    color: GlobalColors.primary500,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PlaceDetails;
