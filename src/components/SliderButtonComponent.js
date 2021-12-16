import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import colors from '../theme/colors';
import commonStyles from '../theme/commonStyles';
import SwipeButton from 'rn-swipe-button';
import PropTypes from 'prop-types';
const SliderButtonComponent = ({title, onPress}) => {
    return ( 
    <SwipeButton
    containerStyles={styles.buttonStyle}
        railBackgroundColor={colors.themeColor}
        thumbIconBackgroundColor={colors.white}
        title="Slide me to Continue"
        titleColor={colors.textColor}
        titleFontSize={15}
        onSwipeSuccess={onPress}
      />
      )
}
const styles = StyleSheet.create({
    buttonStyle : {
        borderRadius: 5,
        width : '80%',
        marginTop : 20,
        alignSelf : 'center',
        height : 50,
        fontSize : 12
        },
})

SliderButtonComponent.propTypes = {
    title: PropTypes.string,
    onPress : PropTypes.func
  }

export default SliderButtonComponent;