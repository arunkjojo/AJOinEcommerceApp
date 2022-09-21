import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeObjectData = async (storage_Key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(`${storage_Key}`, jsonValue)
    } catch (e) {
        // saving error
    }
}

export const storeSingleData = async (storage_Key, value) => {
    try {
      await AsyncStorage.setItem(`${storage_Key}`, value)
    } catch (e) {
      // saving error
    }
}

export const getObjectData = async (storage_Key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(`${storage_Key}`)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
}

export const getSingleData = async (storage_Key) => {
    try {
      const value = await AsyncStorage.getItem(`${storage_Key}`)
      if(value !== null) {
        // value previously stored
        return value;
      }
    } catch(e) {
      // error reading value
    }
}

export const getMultiData = async (storage_Key_array) => {
    let values
    try {
      value = await AsyncStorage.getImultiGettem(storage_Key_array)
      return value;
    } catch(e) {
      // error reading value
    }
}

export const removeSingleData = async (storage_Key) => {
    try {
      await AsyncStorage.removeItem(`${storage_Key}`)
    } catch(e) {
      // error reading value
    }
}