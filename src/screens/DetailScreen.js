import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native'
import { useSelector } from 'react-redux'
import commonStyles from '../theme/commonStyles';
import DeviceInfo from 'react-native-device-info';
const DetailScreen = () => {
    const name = useSelector(state => state.user.name)

    useEffect(() => {
        const checkDevice = async () => {
        const isEmulator = await DeviceInfo.isEmulator()
        if(isEmulator)
        {
            Alert.alert('App is running on Emulator/Simulator')
        }
        else {
            Alert.alert('App is running on Device')
        }
        }
        checkDevice()
    },[])
    return (<View style={commonStyles.container}>
            <Text style={commonStyles.textStyleBold}>Welcome {name}</Text>
            </View>)
}

export default DetailScreen;