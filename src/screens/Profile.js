import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';

export default class Profile extends React.Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
    <ImageBackground
    source={require('../images/bg.png')}
    style={styles.container}>
    <View style={styles.headerview}>
    
    <TouchableOpacity
    onPress={()=> navigate('Home', {name: 'Home'})}
    style={styles.backbutton}>
          <Image style={styles.backimage} 
          source={require('../images/back.png')} />
    </TouchableOpacity>
  
    </View>
    

    <View style={styles.profileview}>

          <Image
          style={{height:150, width:150, borderRadius:100}}
          source={require('../images/profile.jpeg')}
          resizeMode='cover'
          
          />
    </View>

    <View style={styles.mainview}>
          <View style={{
            justifyContent:'center',
            alignItems:'center',
            padding:70,
          }}>
          <Text style={{fontSize:20, fontWeight:'600', fontFamily:'Verdana'}}>Joseph Dumba</Text>
          <Text style={{marginTop:10, fontSize:17}}>0771070274</Text>
          </View>

          <View style={styles.qrcode}>


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
 headerview:{
  flexDirection:'row', 
  justifyContent:'center', 
  alignItems:'center',
  justifyContent:'space-between',
  margin:10,
 },

 backbutton:{
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
 
 backimage:{
  height:30,
  height:30,
  resizeMode:'contain',
 },

 profileview:{
  backgroundColor:'#fff',
  height:150,
  width: 150,
  alignSelf:'center',
  borderRadius:100,
  zIndex:1,
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

 mainview:{
  backgroundColor:'#e0fbfc',
  height:'50%',
  width: '80%',
  alignSelf:'center',
  marginTop:-50,
  borderRadius:50,
  opacity:0.6,
 },

 qrcode:{
  justifyContent:'center',
  alignItems:'center',
  height:150,
  width:150,
  backgroundColor:'#000',
  alignSelf:'center',
  marginTop:50,
 },
})