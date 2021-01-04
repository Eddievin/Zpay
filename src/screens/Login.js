import React from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Button, ImageBackground} from 'react-native';


export default class Login extends React.Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
    <ImageBackground
    source={require('../images/bg.png')}
    style={styles.container}>
      
    <View style={styles.logo}>
    <Image
        style={{height:200, width:200}}
        resizeMode='cover'
        source={require('../images/applogo.png')}/>
    </View>
    <Text style={{alignSelf:'center', fontSize:30, fontWeight:'500', fontFamily:'Verdana', color:'#D7F5B0'}}>Zpay</Text>

    <View style={styles.mainview}>
         
          <Text style={styles.signintext}>Sign In</Text>
            
            <View style={{margin:50}}>
              <Text style={{marginLeft:15, marginVertical:10}}>Phone number</Text>
              <TextInput style={styles.textbox1}></TextInput>

              <Text style={{marginLeft:15, marginVertical:10}}>Password</Text>
              <TextInput style={styles.textbox2}></TextInput>
              <Text style={{alignSelf:'flex-end', marginVertical:10}}>Forgot password?</Text>

    <TouchableOpacity 
    onPress={()=> navigate('Home', {name: 'Home'})}
    style={styles.signinbutton}>
        <Text style={{color:'#fff'}}>Sign In</Text>
    </TouchableOpacity>

    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
    <Text style={{alignSelf:'center', marginVertical:10}}>I am a new user.</Text>
    <Text 
    onPress={()=> navigate('Registration', {name: 'Registration'})}
    style={{color:'red', marginLeft:10}}>Sign Up</Text>

    </View>
    </View>
    </View>
  </ImageBackground>
  ); 
}
}

const styles = StyleSheet.create({
 container:{
   backgroundColor:'#fff',
   flex: 1,
 },
 
 logo:{
  backgroundColor:'transparent',
  height:'20%',
  width: '50%',
  alignSelf:'center',
  marginTop:50,
  justifyContent:'center',
  alignItems:'center',

 },

 mainview:{
  backgroundColor:'#e0fbfc',
  height:'100%',
  width: '100%',
  alignSelf:'center',
  marginTop:50,
  borderRadius:50,
  opacity:0.7,
 },

 signintext:{
  alignSelf:'center', 
  marginTop:20, 
  fontSize:25,
  fontWeight:'400',
  fontFamily:'Verdana',

 },

 textbox1:{
  borderWidth:0.5,
  borderColor:'gray',
  height:60,
  borderRadius:15,
  padding:10,
  fontSize:18,
 },

 textbox2:{
  borderWidth:0.5,
  borderColor:'gray',
  height:60,
  borderRadius:15,
  padding:10,
  fontSize:18,

 },

 signinbutton:{
  backgroundColor:'#4D4990', 
  height:'16%', 
  width:'100%', 
  alignSelf:'center',
  marginTop:30,
  borderRadius:15,
  justifyContent:'center',
  alignItems:'center',
 },
})