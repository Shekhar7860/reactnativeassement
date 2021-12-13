import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native'
import colors from '../theme/colors';
import LightBorderButton from '../components/LightBorderButton';
import NoBorderButton from '../components/NoBorderButton';
import BlueBorderButton from '../components/BlueBorderButton';
import SliderButtonComponent from '../components/SliderButtonComponent';
import routeNames from '../constants/routeNames';
import {setName} from '../redux/actions/user';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const initialData = 
    {name : ''}

const HomeScreen = ({navigation}) => {
    const [state, setState] = useState(initialData)
    const name = useSelector(state => state.user)
    
    useEffect(() => {
        console.log('nameee', name)
        if(name.name != undefined)
        {
            navigation.navigate(routeNames.Welcome)
        }
    })
    const dispatch = useDispatch()
    const goToNextScreen = (param) => {
     if(state.name)
     {
         dispatch(setName(state.name))
     if(param == 'DetailsScreen')
     {
     navigation.navigate(routeNames.Detail)
     }
     else {
    navigation.navigate(routeNames.Welcome)
     }
     }
     else {
         Alert.alert('Please Enter Name')
     }
    }
    return (<View style={styles.mt}>
        <TextInput style={styles.textInput} placeholder='Enter Name' onChangeText={(text) => setState({...state, name : text})} value={state.name}/>
        <View style={styles.mt}>
        <NoBorderButton title={'Login me'} onPress={() => goToNextScreen('DetailsScreen')}/>
        <LightBorderButton title={'Press me'} onPress={() => goToNextScreen('DetailsScreen')}/>
        <BlueBorderButton title={'Hit Me'} onPress={() => goToNextScreen('DetailsScreen')}/>
        <SliderButtonComponent onPress={() => goToNextScreen('WelcomeScreen')}/>
        </View>
        </View>)
}

const styles = StyleSheet.create({
    mt: {
    marginTop : 50,
    },
    textInput :{
    width : '80%',
    height : 50,
    borderWidth : 1,
    padding : 10,
    borderBottomColor : colors.borderColor,
    alignSelf : 'center'
    }
})

export default HomeScreen;