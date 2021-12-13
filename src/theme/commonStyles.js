import {StyleSheet} from 'react-native';
import colors from "./colors"
import fontWeights from './fontWeight';
const commonStyles = StyleSheet.create({
    textStyle : {
     color : colors.textColor,
     textAlign : 'center',
     fontWeight : fontWeights.medium
    },
    textStyleBold : {
        color : colors.textColor,
        textAlign : 'center',
        fontWeight : fontWeights.bold,
        fontSize : 30
       },
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})

export default commonStyles;