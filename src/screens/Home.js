import React from 'react';
import {
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity, 
  Image, 
  ImageBackground,
} from 'react-native';



export default class Home extends React.Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
    <ImageBackground
    source={require('../images/bg.png')}
    style={styles.container}>
    <View style={styles.headerview}>

    <TouchableOpacity 
    onPress={()=> navigate('Profile', {name: 'Profile'})}
    style={styles.profilebutton}>
          <Image style={styles.profileimage} 
          source={require('../images/profile.png')} />
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={()=> navigate('Settings', {name: 'Settings'})}
    style={styles.settingsbutton}>
          <Image style={styles.settingsimage} 
          source={require('../images/settings.png')} />
    </TouchableOpacity>
    </View>

    <TouchableOpacity style={styles.sendbutton}>
        <Text style={{color:'#fff'}}>SEND</Text>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={()=> navigate('Profile', {name: 'Profile'})}
    style={styles.receivebutton}>
        <Text style={{color:'#fff'}}>RECEIVE</Text>
    </TouchableOpacity>
  </ImageBackground>
  ); 
}
}

const styles = StyleSheet.create({
 container:{
   backgroundColor:'#fff',
   flex:1,
 },

 headerview:{
  flexDirection:'row', 
  justifyContent:'center', 
  alignItems:'center',
  justifyContent:'space-between',
  margin:10,
 },

 profilebutton:{
  backgroundColor:'#fff',
  height:60,
  width: 60,
  alignSelf:'center',
  marginTop:50,
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center',

  shadowColor: "#000",
  shadowOffset: {
                 width: 0,
                 height: 2,
                },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
 },

 profileimage:{
  height:30,
  height:30,
  resizeMode:'contain',
 },

 settingsbutton:{
  backgroundColor:'#fff',
  height:60,
  width: 60,
  alignSelf:'center',
  marginTop:50,
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center',

  shadowColor: "#000",
  shadowOffset: {
                 width: 0,
                 height: 2,
                },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
 },

 settingsimage:{
  height:30,
  height:30,
  resizeMode:'contain',
 },

 sendbutton:{
  backgroundColor:'#4D4990', 
  height:'20%', 
  width:'50%', 
  alignSelf:'center',
  marginTop:70,
  borderRadius:15,
  justifyContent:'center',
  alignItems:'center',

  shadowColor: "#000",
  shadowOffset: {
                 width: 0,
                 height: 2,
                },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
 },

 receivebutton:{
  backgroundColor:'#4D4990', 
  height:'20%', 
  width:'50%', 
  alignSelf:'center',
  marginTop:70,
  borderRadius:15,
  justifyContent:'center',
  alignItems:'center',

  shadowColor: "#000",
  shadowOffset: {
                 width: 0,
                 height: 2,
                },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
 },
})