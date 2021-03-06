import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import colors from '../theme/colors';
import commonStyles from '../theme/commonStyles';
import PropTypes from 'prop-types';
const LightBorderButton = ({title, onPress}) => {
    return (<TouchableOpacity style={styles.lightBorderButton} onPress={onPress}>
           <Text style={commonStyles.textStyle}>{title}</Text>
           </TouchableOpacity>)
}
const styles = StyleSheet.create({
    lightBorderButton : {
    height : 50,
    marginTop : 20,
    backgroundColor : colors.themeColor,
    justifyContent : 'center',
    width : '80%',
    borderRadius : 10,
    alignSelf : 'center'
    }
})

LightBorderButton.propTypes = {
    title: PropTypes.string,
    onPress : PropTypes.func
  }

export default LightBorderButton;