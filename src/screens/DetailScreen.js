import React, {useState, useEffect} from 'react';
import {View, Text, Alert, NativeModules} from 'react-native'
import { useSelector } from 'react-redux'
import commonStyles from '../theme/commonStyles';
const DetailScreen = () => {
    const name = useSelector(state => state.user.name)

    useEffect(() => {
        // console.log('deee', NativeModules.DeviceDetail)
        const DeviceDetail  =  NativeModules.DeviceDetail
        const checkDevice = async () => {
        const isEmulator = await DeviceDetail.isEmulator()
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