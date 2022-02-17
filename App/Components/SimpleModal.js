import React from "react";
import {
    StyleSheet, Text, View,
    TouchableOpacity, Dimensions
} from "react-native";

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;
const SimpleModal = () =>{
     return(
         <TouchableOpacity
         disabled={true}
         style={styles.container}
         >
             <View style={styles.modal}>
                 <View style={[styles.textView, {fontSize:20,}]}
                 >
                     <Text style={styles.text}>sample Modal header</Text>
                     <Text style={styles.text}> sample Modal Description</Text>

                 </View>

             </View>
             <View style={styles.buttonsView}>
                 <TouchableOpacity style={styles.touchableOpacity}>
                     <Text  
                     style={[styles.text, {color: 'blue'} ]}
                     > Cancel </Text>

                 </TouchableOpacity>

             </View>

         </TouchableOpacity>
     )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    modal:{
        height: HEIGHT_MODAL,
        width: WIDTH - 80,
        paddingTop:10,
        backgroundColor:'white',
        borderRadius:10,
    },
    textView:{
        flex:1,
        alignItems:'center',

    },
    text:{
        margin:5,
        fontSize:16,
        fontWeight:'bold',


    }

})
export {SimpleModal}