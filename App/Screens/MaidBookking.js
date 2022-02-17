import React from 'react';
import {View, SafeAreaView, StyleSheet, ScrollView, Text} from 'react-native'
import { TextInput } from 'react-native-paper';
import Button from '../Components/Button';
import Color from '../config/colors';

function MaidBookking(props) {
    return (
        
            <SafeAreaView style={{flex:1}}>

               <View style={styles.header}></View>
               <Text style={styles.HText}>Ready To Book An Appointment</Text>
               <Text style={styles.H1Text}>Fill Out The Information Below!</Text>
               <ScrollView indicatorStyle={false}  >
                  <Text style={{marginTop:60, color:Color.black,
                marginLeft:10,fontSize:22, alignSelf:'center'
                }}>Booking Form</Text>
                
                      <TextInput
                       style={styles.FirstIn}
                       placeholder='First Name'
                      />
                      <TextInput
                       style={styles.FirstIn}
                       placeholder='Last Name'
                      />
                      <TextInput
                       style={styles.FirstIn}
                       placeholder='Phone'
                      />
                      <TextInput
                       style={styles.FirstIn}
                       placeholder='Address-1'
                      />
                      <TextInput
                       style={styles.FirstIn}
                       placeholder='Address-2'
                      />
                      <TextInput
                       style={styles.secondIn}
                       placeholder='City'
                      />
                      <TextInput
                       style={styles.secondIn1}
                       placeholder='State'
                      />
                      <TextInput
                       style={styles.secondIn2}
                       placeholder='Zip-Code'
                      />
    </ScrollView>
    
    
    <View style={styles.Footer}></View>
    
    

            </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    
    
    header:{
        width:"100%",
        height:150,
        backgroundColor:Color.black,
        flexDirection:'column',
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
    },
    Footer:{
        width:"100%",
        height:100,
        backgroundColor:Color.primary,
        flexDirection:'column',
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
    },
    HText:{
        color:Color.white,
        marginTop:-110,
        alignSelf:'center',
        fontSize:23,
        fontFamily:'Montserrat-Bold'
    },
    H1Text:{
        color:Color.primary,
        alignSelf:'center',
        marginTop:15,
        fontSize:15,
    },
    
    FirstIn:{
        marginTop:10,
        alignSelf:'center',
        width:350,
        height:50,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    secondIn:{
        width:155,
        height:50,
        marginLeft:22,
        marginTop:10,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    secondIn1:{
        width:155,
        height:50,
        marginLeft:215,
        marginTop:-50,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    secondIn2:{
        marginTop:10,
        alignSelf:'center',
        width:350,
        height:50,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    }

})
export default MaidBookking;