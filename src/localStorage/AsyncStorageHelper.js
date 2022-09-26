import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AsyncStorageHelper {
  static async storeSingleData(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
      // console.log("storeData Value: ", key, value);
    } catch (err) {
      // console.error("storeData Error: ", err);
    }
  }
  static async storeObjectData(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      // console.log("storeData Value: ", key, value);
    } catch (err) {
      // console.error("storeData Error: ", err);
    }
  }
  static async getSingleData(key, modifyValue) {
    try {
      const result = await AsyncStorage.getItem(key);
      if (result != null) {
        // console.log("getData Value: ", key, result);
        modifyValue(result);
      }
    } catch (err) {
      // console.error("getData Error: ", err);
      modifyValue("");
    }
  }
  static async getOjectData(key, modifyValue) {
    try {
      const result = await AsyncStorage.getItem(key);
      if (result != null) {
        // console.log("getData Value: ", key, result);
        modifyValue(JSON.parse(result));
      }
    } catch (err) {
      // console.error("getData Error: ", err);
      modifyValue("");
    }
  }

  static async removeData(key) {
    try {
      await AsyncStorage.removeItem(key);

      // console.error("removeData Success ");
    } catch (err) {
      // console.error("removeData Error: ", err);
    }
  }

  static async clearData() {
    try {
      await AsyncStorage.clear();
      // console.error("clearData Success ");
    } catch (err) {
      // console.error("clearData Error: ", err);
    }
  }

  static async getAllKeyData() {
    try {
      const result = await AsyncStorage.getAllKeys();
      if (result != null) {
        // console.log("getAllKeyData success: ", result);
      }
    } catch (err) {
      // console.error("getAllKeyData Error: ", err);
    }
  }
}
