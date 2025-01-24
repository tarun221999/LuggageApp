// auth.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAsyncData = async ({key, value} : {key: any, value: any} ) => {
    try {
        const stringifyValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, stringifyValue);
    } catch (error) {
        console.error('Error storing in async storage:', error);
    }
};

export const getAsyncData = async (key: any) => {
    try {
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
            return data;
        }
        else {
            return null
        }
    } catch (error) {
        console.error('Error getting from async storage:', error);
        return null;
    }
};

export const removeAllAsyncData = async () => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error('Error removing from async storage' +  error);
    }
};

export const removeSingleAsyncData = async (key: any) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing single from async storage' +  error);
    }
};