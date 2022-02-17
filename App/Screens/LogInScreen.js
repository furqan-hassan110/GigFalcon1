import React, { useState } from 'react';
import { View,StyleSheet,Image,Text, TextInput, KeyboardAvoidingView, Platform,ScrollView, TouchableOpacity,  } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup'

import Color from '../config/colors';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

const validationSchema =Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password: Yup.string().required().matches().label("password")
   
   })


function LogInScreen({props, navigation}) {
    return (
        <View style={styles.Screen}>
            <ScrollView horizontal={false}> 

            <Image  style={styles.logo} source={require('../assets/logo2.png')}/>
 
            <KeyboardAvoidingView
              behavior={Platform.OS=== 'ios' ? 'padding':null}>

                <View style={styles.textbody}>
                <Text style={styles.header} >Welcome</Text>
                <Text style={styles.welcometext}>Sign in to Gig Falcon tp pick up exactly where you left off </Text>
                </View>

                <View style={styles.boxpair}>
                    <View style={styles.fbbox}><Text style={styles.textin}>Facebook</Text></View>
                    <View style={styles.Gbox}><Text style={styles.textin}>Google</Text></View>
                </View>
                <Text style={styles.text2}>or sign in with email</Text>
                
                
                  <Formik
                  initialValues={{email:'',password:''}}
                  onSubmit={values =>console.log(values)}
                  validationSchema={validationSchema}
                  
                  >
                      {({handleChange,handleSubmit, errors})=> (
                          
                          <>
                          <TextInput style={styles.inputtext} 
                           placeholder={"Email"}
                           placeholderTextColor={Color.primary}
                           keyboardType="email-address"
                           onChangeText={handleChange("email")}
                           autoCorrect={false}
                           autoCapitalize="none"></TextInput>

                           <Text style={styles.error1}>{errors.email}</Text>
                           
                           <TextInput style={styles.inputtext} 
                           placeholder={"Password"}
                           placeholderTextColor={Color.primary}
                           secureTextEntry={true}
                           onChangeText={handleChange("password")}
                           autoCorrect={false}
                           autoCapitalize="none"></TextInput>

                           <Text style={styles.error}>{errors.password}</Text>

                           <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("tab")}>
                          
                               <Text style={styles.textin} onPress={handleSubmit} >Continue </Text>
                           
                           </TouchableOpacity>
                           
                          </>
                          
                      )}
                  </Formik>

                  <View style={{flexDirection:"row",
                  justifyContent:'center',
                  alignItems:'baseline',
                  marginTop:15}}>
                      <Text style={styles.welcometext}>Or create your new account ?</Text>
                      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>

                       <Text style={styles.signuptext} >Sign Up</Text>
                      </TouchableOpacity>
                  </View>

                  
                </KeyboardAvoidingView>
                </ScrollView>

               </View>
    );
}

const styles = StyleSheet.create({
    error:{
        color:Color.red,
        marginLeft:30,
    },
    error1:{
        color:Color.red,
        marginLeft:30,
        marginTop:10
    },
    Screen:{
        flex:1,
        backgroundColor:Color.white

    },
    
    logo:{
        marginTop:70,
        width:'90%',
        height:80,
        alignSelf:'center',
        
        
    },

    textbody:{
     
     alignSelf:'center'
    },

    header:{
        fontFamily:'Montserrat-Bold',
        fontSize:30,
        alignSelf:'center'
        
    },

    welcometext:{
        fontFamily:'Montserrat-Regular',
        fontSize:11,
        alignSelf:'center',
        color:Color.lightgray,
        marginTop:10
        },

        boxpair:{
            flexDirection:'row',
            marginTop:20,
            justifyContent:'center',
            },

        textin:{
            fontFamily:'Montserrat-Bold',
            fontSize:16,
            textAlign:'center',
            marginTop:15,
            color:Color.white
            },

        fbbox:{
            width:150,
            height:50,
            backgroundColor:'#3B5999',
            borderRadius:10,
            marginRight:10
         },

         Gbox:{
            width:150,
            height:50,
            backgroundColor:'#186DEE',
            borderRadius:10,
            marginLeft:10
         },
         text2:{
            fontFamily:'Montserrat-Regular',
            fontSize:16,
            color:Color.black,
            textAlign:'center',
            marginTop:20
         },
         inputtext:{
          borderBottomWidth:0.5,
          borderBottomColor:Color.lightgray,
          width:'90%',
          alignSelf:'center',
          marginTop:20,
          color:Color.black
         },
         login:{
             width:'80%',
             height:50,
             marginTop:20,
             borderRadius:20,
             backgroundColor:Color.primary,
             alignSelf:'center'
         },
         signuptext:{
             fontFamily:'Montserrat-Bold',
             color:Color.primary,
          }
})
export default LogInScreen;