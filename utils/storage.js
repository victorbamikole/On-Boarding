import AsyncStorage from "@react-native-async-storage/async-storage";

// Function to get an item from AsyncStorage with a given key
export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.error("Error getting item from AsyncStorage:", error);
    return null;
  }
};

// Function to set an item in AsyncStorage with a given key and value
export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting item in AsyncStorage:", error);
  }
};

// Function to delete an item from AsyncStorage with a given key
export const deleteItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error deleting item from AsyncStorage:", error);
  }
};
