import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import colors from '../theme/colors';
import commonStyles from '../theme/commonStyles';
import PropTypes from 'prop-types';
const NoBorderButton = ({title, onPress}) => {
    return (<TouchableOpacity style={styles.noBorderButton} onPress={onPress}>
           <Text style={commonStyles.textStyle}>{title}</Text>
           </TouchableOpacity>)
}
const styles = StyleSheet.create({
    noBorderButton : {
        height : 50,
        marginTop : 20,
        justifyContent : 'center',
        width : '80%',
        borderRadius : 10,
        alignSelf : 'center'
        },
})

NoBorderButton.propTypes = {
    title: PropTypes.string,
    onPress : PropTypes.func
  }

export default NoBorderButton;