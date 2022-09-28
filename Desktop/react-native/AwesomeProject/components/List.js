import React from 'react';
import {FlatList, Text, View} from 'react-native';
const DATA = [
  {
    id: 1,
    title: 'karthi',
  },
  {
    id: 2,
    title: 'mani',
  },
  {
    id: 3,
    title: 'hemath',
  },
];
const Items = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);
const List = () => {
  const renderItem = ({item}) => <Items title={item.title} />;
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default List;
