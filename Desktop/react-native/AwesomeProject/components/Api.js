import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Separator,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';

const Api = () => {
  const img = 'https://image.tmdb.org/t/p/original';
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getmovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=9a2bdc61f7e9de98ec887d51db0cde00&sort_by=popularity.desc',
      );
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getmovies();
  }, []);
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <View style={{padding: 6}}>
              <Image
                style={styles.image}
                source={{
                  uri: img + item.poster_path,
                }}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 190,
  },
});

export default Api;
