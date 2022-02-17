import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Color from '../config/colors';

function Button(props) {
    return (
        <View >
        <View style={styles.Button}></View>
        <Text style={styles.Text}> Submit</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    
    Button:{
        width:'55%',
        borderRadius:20,
        height:50,
        backgroundColor:Color.black,
        alignSelf:'center'
    },
    Text:{
        color:Color.white,
        fontSize:25,
        marginTop:-45,
        alignSelf:'center',

    },
})
export default Button;