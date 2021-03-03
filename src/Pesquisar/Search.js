import React from 'react'
import { View, Text} from 'react-native'
import {Icon, Input} from 'native-base'
import { useNavigation } from "@react-navigation/native";

const azul = '#4db8ff'
export default function Search() 
{
    const navigation = useNavigation()
    return (
        <View style={{flex:1}}>
            <View style={{backgroundColor:'#fff',height:70,elevation:2,justifyContent:'center',alignItems:'center'}}>
            <View style={{flexDirection:'row',justifyContent:"center",
                alignItems:'center',marginTop:20,marginHorizontal:10}}>

                <Icon name='left' type='AntDesign' style={{color:azul}} onPress={()=> navigation.goBack()}/>
                <Input placeholder='Pesquisar' autoFocus
                    style={{width:200,height:50,justifyContent:'center'}}/>
                <Icon name='close' type='EvilIcons' style={{color:azul}}/>
            </View>
            </View>
            <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                <Text style={{fontSize:16}}>
                    Nenhum resultado encontrado
                </Text>
            </View>
        </View>
    )
}
