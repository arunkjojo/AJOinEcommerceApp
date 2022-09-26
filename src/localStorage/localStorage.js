import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeObjectData = (storage_Key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    AsyncStorage.setItem(`${storage_Key}`, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const storeSingleData = (storage_Key, value) => {
  try {
    AsyncStorage.setItem(`${storage_Key}`, value);
  } catch (e) {
    // saving error
  }
};

export const getObjectData = (storage_Key) => {
  try {
    const jsonValue = AsyncStorage.getItem(`${storage_Key}`);
    return jsonValue != null ? JSON.parse(jsonValue) : {};
  } catch (e) {
    // error reading value
  }
};

export const getSingleData = (storage_Key) => {
  try {
    const value = AsyncStorage.getItem(`${storage_Key}`);
    if (value !== null) {
      // value previously stored
      return value;
    } else {
      return "";
    }
  } catch (e) {
    // error reading value
  }
};

export const getMultipleData = (storage_Key_array) => {
  let values;
  try {
    values = AsyncStorage.getMultiData(storage_Key_array);
    return values;
  } catch (e) {
    // error reading value
  }
};

export const removeSingleData = (storage_Key) => {
  try {
    AsyncStorage.removeItem(`${storage_Key}`);
  } catch (e) {
    // error reading value
  }
};

export const clearAsyncStorage = () => {
  AsyncStorage.getAllKeys()
    .then((keys) => AsyncStorage.multiRemove(keys))
    .then(() => alert("success"));
};
