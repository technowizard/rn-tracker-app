import React, {useContext} from 'react';
import {Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import {NavigationEvents} from '@react-navigation/compat';
import {Context as TrackContext} from '../context/TrackContext';

const TrackListScreen = ({navigation}) => {
  const {state, fetchTracks} = useContext(TrackContext);

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={{fontSize: 48}}>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TrackDetail', {_id: item._id});
              }}>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
