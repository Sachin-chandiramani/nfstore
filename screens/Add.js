import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Container, Form, Item, Input, Button, H1} from 'native-base';
import shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

const Add = () => {
  const [name, setName] = useState('');
  const [totalNoSeasons, setTotalNoSeasons] = useState('');

  // const addToList = async() => {
  //     try
  // }

  return (
    <Container style={styles.Container}>
      <ScrollView contentContainerStyle={{}}>
        <H1 style={styles.heading}>Add to watch List</H1>
        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Season name"
              style={{color: '#eee'}}
              onChangeText={(text) => setName(text)}
            />
          </Item>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Totla no. of seasons"
              style={{color: '#eee'}}
              onChangeText={(text) => setTotalNoSeasons(text)}
            />
          </Item>
          <Button rounded block onPress={()=>console.log(name)}>
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
