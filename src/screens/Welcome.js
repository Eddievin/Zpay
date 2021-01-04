import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export default class Welcome extends React.Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
    <View style={styles.container}>
    <View style={{
        backgroundColor:'#bdb2ff',
        height:'60%',
        width: '80%',
        alignSelf:'center',
        marginTop:50,
        borderRadius:50,
        }}>
          <Image style={{
            alignSelf:'center',
            resizeMode:'contain',
          }} source={require('../images/man.png')} />
          <Text style={{
            alignSelf:'center', 
            fontSize:40, 
            fontFamily:'Verdana',
            fontWeight:'700',
            color:'#4D4990',
            }}>Zpay</Text>
      
    </View>

    <View style={{justifyContent:'center', alignItems:'center', marginVertical:20}}>
        <Text style={{
          fontFamily:'Verdana',
          opacity:0.6,
        }}>Best way to make payments!</Text>
    </View>

    <TouchableOpacity
    onPress={()=> navigate('Registration', {name: 'Registration'})}
    style={{
        backgroundColor:'#4D4990', 
        height:'8%', 
        width:'80%', 
        alignSelf:'center',
        marginVertical:10,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#ffc6ff',
        }}>
        <Text style={{color:'#fff'}}>Sign Up</Text>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={()=> navigate('Login', {name: 'Login'})}
    style={{
        backgroundColor:'#4D4990', 
        height:'8%', 
        width:'80%', 
        alignSelf:'center',
        marginVertical:10,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#ffc6ff',
        }}>
        <Text style={{color:'#fff'}}>Sign In</Text>
    </TouchableOpacity>
  </View>
  ); 
}
}

const styles = StyleSheet.create({
 container:{
   backgroundColor:'#fff',
   flex:1,
 }
})