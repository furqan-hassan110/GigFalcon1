import React from 'react';
import { View,StyleSheet,Text, Image,TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup'

import Color from '../config/colors';
import { Button } from 'react-native-elements';

const validationSchema =Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password: Yup.string().required().matches().label("password"),
    username:Yup.string().required().label("Username")
   
   })

function SignUp({props,navigation}) {
    return (
    <KeyboardAvoidingView style={styles.screen}>
    
         <View style={styles.header}>
             <TouchableOpacity onPress={() => navigation.goBack()}>
             <Image style={styles.backButton} source={require('../assets/back.png')}/>

             </TouchableOpacity>
          <Text style={styles.headertext}>Sign Up with Email</Text>    
         </View> 

         <Formik 
                  initialValues={{email:'',password:'',username:''}}
                  onSubmit={values =>console.log(values)}
                  validationSchema={validationSchema}
                  
                  >
                      
                      
                      {({handleChange,handleSubmit, errors})=> (
                       <>   
                    <View >
                      <TouchableOpacity style={styles.facebook}>
                          
                        <Text style={styles.textin} > Facebook </Text>
                      
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.Google}>
                     
                        <Text style={styles.textin} > Google </Text>
                      
                      </TouchableOpacity>
                    </View>
                    <View style={{marginTop:40}}>
                           <View style={{borderBottomWidth:1,marginTop:20, width:'25%', marginLeft:50, borderBottomColor:Color.primary}}/>
                           <Text style={{marginLeft:180, marginTop:-12, color:Color.primary}}>OR</Text>
                           <View style={{borderBottomWidth:1,marginTop:-11, width:'25%', marginLeft:235, borderBottomColor:Color.primary}}/>
                    </View>     
                    
                          <View style={styles.inputfeilds}>
                          <TextInput style={styles.inputtext} 
                           placeholder={"Email"}
                           placeholderTextColor={Color.lightgray}
                           keyboardType="email-address"
                           onChangeText={handleChange("email")}
                           autoCorrect={false}
                           autoCapitalize="none"></TextInput>

                           <Text style={{color:'red', marginLeft:20}}>{errors.email}</Text>

                           <TextInput style={styles.inputtext} 
                           placeholder={"Username"}
                           placeholderTextColor={Color.lightgray}
                           keyboardType="default"
                           onChangeText={handleChange("username")}
                           autoCapitalize="characters"
                           autoCorrect={false} 
                           ></TextInput>

                           <Text style={{color:'red',marginLeft:20}}>{errors.username}</Text>
                           
                           <TextInput style={styles.inputtext} 
                           placeholder={"Password"}
                           placeholderTextColor={Color.lightgray}
                           secureTextEntry={true}
                           onChangeText={handleChange("password")}
                           autoCorrect={false}
                           autoCapitalize="none"></TextInput>

                           <Text style={{color:'red', marginLeft:20}}>{errors.password}</Text>
                           </View>
                        
                           <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("tab")}>
                          
                               <Text style={styles.textin} onPress={handleSubmit} >Continue With Work Email </Text>
                           
                           </TouchableOpacity>
                        </>
                          
                      )}
                  </Formik>

                  <View style={styles.text}>
                      <Text style={styles.welcometext}>By joining, you agree to Gig Falcon's</Text>
                       <Text style={styles.signuptext}>Terms of Service</Text>
                  </View>
    
</KeyboardAvoidingView>
   );
}
const styles = StyleSheet.create({
    inputfeilds:{
        marginTop:25,
    },
    Google:{
        backgroundColor:Color.Google,
        width:'40%',
        height:50,
        borderRadius:12,
        marginLeft:25,
        marginTop:-49,
    },
    facebook:{
        backgroundColor:Color.Facebookbutton,
        width:'40%',
        height:50,
        borderRadius:12,
        marginLeft:200,
        marginTop:20,

    },
    screen:{
        backgroundColor:Color.white,
        flex:1
    },
    header:{
        width:'100%',
        height:100,
        elevation:10,
        backgroundColor:Color.white,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:40
        
    },
    headertext:{
        fontFamily:'montserrat-semi-bold',
        fontSize:20,
        color:Color.black,
        marginHorizontal:10
    },
    backButton:{
        width:60,
        height:60,
    },
    inputtext:{
        borderBottomWidth:1,
        borderBottomColor:Color.darkgray,
        width:'90%',
        alignSelf:'center',
        marginVertical:10,
        color:Color.black,
       },
       login:{
        width:'80%',
        height:50,
        borderRadius:10,
        backgroundColor:Color.primary,
        alignSelf:'center',
        marginTop:10,
    },
    textin:{
        fontFamily:'Montserrat-Bold',
        fontSize:16,
        textAlign:'center',
        marginTop:15,
        color:Color.white
        },
        text:{
                  flexDirection:"row",
                  justifyContent:'center',
                  marginTop:30,
                  alignItems:'center',
                  
                  
        },
        signuptext:{
            fontFamily:'Montserrat-Regular',
            color:Color.primary,
            fontSize:11
        },
        welcometext:{
            fontFamily:'Montserrat-Regular',
            fontSize:11,
            alignSelf:'center',
            color:Color.lightgray,
            
            },
})
export default SignUp;