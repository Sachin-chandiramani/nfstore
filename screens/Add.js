import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Container, Form, Item, Input, Button, H1} from 'native-base';
import shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
import {addToList} from '../helperMethods/addItem';

const Add = ({navigation}) => {
  const [name, setName] = useState('');
  const [totalNoSeasons, setTotalNoSeasons] = useState('');

  // const addToList = async () => {
  //   try {
  //     if (!name || !totalNoSeasons) {
  //       return alert('Please add both');
  //     }
  //     const seasonToAdd = {
  //       id: shortid.generate(),
  //       name: name,
  //       totalNoSeasons: totalNoSeasons,
  //       isWatched: false,
  //     };
  //     const storedValue = await AsyncStorage.getItem('@season_list');
  //     const prevList = await JSON.parse(storedValue);
  //     if (!prevList) {
  //       const newList = [seasonToAdd];
  //       await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
  //     } else {
  //       prevList.push(seasonToAdd);
  //       await AsyncStorage.setItem('@season_list', JSON.stringify(prevList));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   navigation.navigate('Home');
  // };

  return (
    <Container style={styles.Container}>
      <ScrollView contentContainerStyle={{}}>
        <H1 style={styles.heading}>Add to watch List</H1>
        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Season name"
              style={{color: '#eee'}}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </Item>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Totla no. of seasons"
              style={{color: '#eee'}}
              value={totalNoSeasons}
              onChangeText={(text) => setTotalNoSeasons(text)}
            />
          </Item>
          <Button
            onPress={() => {
              const add = async () => {
               const res= await addToList(name,totalNoSeasons);
               console.log(res+"is");
              };
              add();
              navigation.navigate('Home');
            }}
            rounded
            block>
            <Text style={{color: '#eee'}}>Add</Text>
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});

export default Add;
