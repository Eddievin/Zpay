import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';

export default class Settings extends React.Component{
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
    <Text style={{alignSelf:'center'}}>Settings screen</Text>
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
 })



