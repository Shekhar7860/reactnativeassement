import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import colors from '../theme/colors';
import commonStyles from '../theme/commonStyles';
const BlueBorderButton = ({title, onPress}) => {
    return (<TouchableOpacity style={styles.blueBorderButton} onPress={onPress}>
           <Text style={{...commonStyles.textStyle, ...styles.textColor}}>{title}</Text>
           </TouchableOpacity>)
}
const styles = StyleSheet.create({
    blueBorderButton : {
    height : 50,
    marginTop : 20,
    backgroundColor : colors.blue,
    justifyContent : 'center',
    width : '80%',
    borderRadius : 10,
    alignSelf : 'center'
    },
    textColor : {
        color : colors.white
    }
})

export default BlueBorderButton;