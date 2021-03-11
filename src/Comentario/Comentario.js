import React from 'react'
import {View,Image, Text,ScrollView,Dimensions,TouchableOpacity,StyleSheet} from 'react-native'
import {Header} from 'react-native-elements'
import {Icon, Input} from 'native-base'
import { useNavigation } from "@react-navigation/native";

const {width,height} = Dimensions.get("window")
const azul = '#4db8ff'
const Comentario = () => 
{
    const navigation = useNavigation()
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
        <Header containerStyle={{backgroundColor:'#fff',height:75,justifyContent:'center'}} >
                <Icon name='left' type='AntDesign' style={{color:azul}} onPress={()=> navigation.goBack()}/>
                <Text style={{fontWeight:'bold',fontSize:18}}>Comentários</Text>
                <Icon name='monitor-share' type='MaterialCommunityIcons' style={{color:azul}} onPress={()=> navigation.goBack()}/>
        </Header>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Icon name="comments-o" type="FontAwesome" style={{fontSize:55,color:'#A6ACAF'}}/>
            <Text style={{fontSize:18}}>Nenhum comentário</Text>
        </View>
        <View style={{backgroundColor:'#E5E7E9',height:50,width:'100%',bottom:0,position:'absolute'}}>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',
                width:"90%",alignSelf:"center"}}>
                <Input placeholder="Escreva um comentário"/>
                <Icon name="send" type="Ionicons" style={{color:azul}}/>
            </View>
        </View>
        </View>
    )
}

export default Comentario

const styles = StyleSheet.create({})
