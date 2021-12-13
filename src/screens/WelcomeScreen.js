import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { useSelector } from 'react-redux'
import commonStyles from '../theme/commonStyles';
import routeNames from '../constants/routeNames';
const WelcomeScreen = ({navigation}) => {
    const name = useSelector(state => state.user.name)
    return (<TouchableOpacity style={commonStyles.container} onPress={() => navigation.navigate(routeNames.Detail)}>
            <Text style={commonStyles.textStyleBold}>Welcome {name}</Text>
            </TouchableOpacity>)
}

export default WelcomeScreen;