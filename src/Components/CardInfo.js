import React from 'react'
import {View,Image, Text, TouchableOpacity} from 'react-native'
import {Header,Icon,Button, Card} from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";


const azul = '#4db8ff'
export default function CardInfo() {
    return (
        <View style={{elevation:5,backgroundColor:'#fff',height:460,width:'98%',
          alignSelf:'center',marginTop:2,marginBottom:20}}>
          <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
            <View style={{width:'80%',marginHorizontal:3,marginVertical:1}}>
              <Text style={{fontWeight:'bold',fontSize:20}} numberOfLines={3}>
                Em 2020 registrou-se mais de 200 bilhões
                de downloads de aplicativo
              </Text>
            </View>
            <View style={{width:'20%',height:100}}>
              <Icon name='ellipsis1' color= {'#808080'} type={'antdesign'} size={40} style={{fontWeight:20}}/>
            </View>
          </View>
          <View style={{marginLeft:10}}>
            <TouchableOpacity style={{backgroundColor:azul,width:100,height:30,
              justifyContent:'center',alignItems:'center',borderRadius:5}}>
                <Text style={{fontSize:16,color:'#fff'}}>28/02/2021</Text>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent:'center',alignItems:'center',marginVertical:4}}>
            <Image source={require('../img/pain.png')} style={{width:340,height:250}}/>
          </View>

          <View style={{width:'100%',alignItems:'center'}}>
          <View style={{width:'95%'}}>
            <Text style={{fontSize:15, color:'#bfbfbf',fontWeight:'bold'}} numberOfLines={3}>
              De acordo ao app Annie State of Mobile report 2021,
              que afirma que os usuarios de dispositivos moveis efecturaram cerca de
              200 bilhões de downloads de aplicativos
            </Text>
          </View>
          </View>
        </View>
    )
}
