import React from 'react'
import {View,Image, Text, TouchableOpacity} from 'react-native'
import {Header,Icon,Button, Card} from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";


const azul = '#4db8ff'
export default function CardInfo({item}) 
{
  const navigation = useNavigation()
    return (
        <TouchableOpacity activeOpacity={0.9} style={{elevation:5,backgroundColor:'#fff',height:460,width:'98%',
          alignSelf:'center',marginTop:2,marginBottom:20}} onPress={()=> navigation.navigate("Detalhes",{i:item})}>
          <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
            <View style={{width:'80%',marginHorizontal:3,marginVertical:1}}>
              <Text style={{fontWeight:'bold',fontSize:20}} numberOfLines={3}>
                {item.titulo}
              </Text>
            </View>
            <View style={{width:'20%',height:100}}>
              <Icon name='ellipsis1' color= {'#808080'} type={'antdesign'} size={40} style={{fontWeight:20}}/>
            </View>
          </View>
          <View style={{marginLeft:10}}>
            <View style={{backgroundColor:azul,width:100,height:30,
              justifyContent:'center',alignItems:'center',borderRadius:5}}>
                <Text style={{fontSize:16,color:'#fff'}}>{item.data}</Text>
            </View>
          </View>
          <View style={{justifyContent:'center',alignItems:'center',marginVertical:4}}>
            <Image source={{uri:item.imagem}} style={{width:340,height:250}}/>
          </View>

          <View style={{width:'100%',alignItems:'center'}}>
          <View style={{width:'95%'}}>
            <Text style={{fontSize:15, color:'#bfbfbf',fontWeight:'bold'}} numberOfLines={3}>
             {item.descricao}
            </Text>
          </View>
          </View>
        </TouchableOpacity>
    )
}
