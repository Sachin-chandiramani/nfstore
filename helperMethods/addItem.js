import shortid from 'shortid';
import AsyncStorage from '@react-native-community/async-storage';

export const addToList = async (name,totalNoSeasons) => {
  try {
    if (!name || !totalNoSeasons) {
      return alert('Please add both');
    }
    const seasonToAdd = {
      id: shortid.generate(),
      name: name,
      totalNoSeasons: totalNoSeasons,
      isWatched: false,
    };
    const storedValue = await AsyncStorage.getItem('@season_list');
    const prevList = await JSON.parse(storedValue);
    if (!prevList) {
      const newList = [seasonToAdd];
      await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
    } else {
      prevList.push(seasonToAdd);
      await AsyncStorage.setItem('@season_list', JSON.stringify(prevList));
    }
  } catch (error) {
    console.log(error);
  }
  return 1;
};


