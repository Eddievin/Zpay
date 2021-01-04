import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image} from 'react-native';

export default class Registration extends React.Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
    <ImageBackground
    source={require('../images/bg.png')}
    style={{flex:1, backgroundColor:'#fff'}}>
      <View style={styles.container}>
      <View style={styles.logo}>

        <Image
        style={{height:70, width:70}}
        resizeMode='cover'
        source={require('../images/applogo.png')}/>
      </View>
    <View>
      <Text style={{color:'#D7F5B0', fontFamily:'Verdana', fontSize:30}}>Zpay</Text>
    </View>
  </View>

  <View style={styles.mainview}>
          <Text style={styles.createaccounttext}>Create Account</Text>
            
            <View style={{margin:50}}>

              <Text style={{marginLeft:15, marginVertical:10}}>Full Name</Text>
              <TextInput style={styles.textbox1}></TextInput>

              <Text style={{marginLeft:15, marginVertical:10}}>Phone Number</Text>
              <TextInput style={styles.textbox2}></TextInput>

              <Text style={{marginLeft:15, marginVertical:10}}>Email Address</Text>
              <TextInput style={styles.textbox3}></TextInput>

              <Text style={{marginLeft:15, marginVertical:10}}>Password</Text>
              <TextInput style={styles.textbox4}></TextInput>
              

    <TouchableOpacity
    onPress={()=> navigate('Login', {name: 'Login'})}
    style={styles.signupbutton}>
        <Text style={{color:'#fff'}}>Sign Up</Text>
    </TouchableOpacity>

    <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
    <Text style={{alignSelf:'center', marginVertical:10}}>I have an account.</Text>
    <Text 
    onPress={()=> navigate('Login', {name: 'Login'})}
    style={{color:'red', marginLeft:10}}>Sign In</Text>

    </View>
    </View> 
    </View>
    </ImageBackground>
    
  ); 
}
}

const styles = StyleSheet.create({
 container:{
   justifyContent:'center',
   alignItems:'center',
  marginTop:100
 },

 logo:{
  backgroundColor:'transparent', 
  height:70, 
  width:70
 },

 mainview:{
  backgroundColor:'#e0fbfc',
  height:'100%',
  width: '100%',
  alignSelf:'center',
  marginTop:50,
  borderRadius:50,
  opacity:0.7
 },

 createaccounttext:{
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

 textbox3:{
  borderWidth:0.5,
  borderColor:'gray',
  height:60,
  borderRadius:15,
  padding:10,
  fontSize:18,
  
 },

 textbox4:{
  borderWidth:0.5,
  borderColor:'gray',
  height:60,
  borderRadius:15,
  padding:10,
  fontSize:18,
  
 },

 signupbutton:{
  backgroundColor:'#4D4990', 
  height:'14%', 
  width:'100%', 
  alignSelf:'center',
  marginTop:30,
  borderRadius:15,
  justifyContent:'center',
  alignItems:'center',

 },
 
})