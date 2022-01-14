import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStoreData = (key: string) => {
    return AsyncStorage.getItem(key);
}

export const setStoreData = (key: string, value: string) => {
    return AsyncStorage.setItem(key, value)
}
