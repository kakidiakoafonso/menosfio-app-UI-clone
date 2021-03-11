import React,{useState,useRef} from 'react'
import {View,Image, Text,ScrollView, TouchableOpacity,Switch} from 'react-native'
import {Header,Button,Overlay, Divider} from 'react-native-elements'
import {Icon, Label} from 'native-base'
import { useNavigation } from "@react-navigation/native";

const azul = '#4db8ff'

export default function Settings() 
{
    const [dark, setdark] = useState(false)
    const [pt, setpt] = useState(true)
    const [en, seten] = useState(false)
    const navigation = useNavigation()
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <Header containerStyle={{backgroundColor:'#fff',height:75,justifyContent:'center'}} >
                <View style={{flexDirection:'row',width:150,justifyContent:'space-between'}}>
                    <Icon name='left' type='AntDesign' style={{color:azul}} onPress={()=> navigation.goBack()}/>
                    <Text style={{fontWeight:'bold',fontSize:18}}>Configurações</Text>
                </View>
            </Header>
            <View style={{marginTop:35}}>
                <View style={{backgroundColor:"#fff",height:120,flexDirection:'row',justifyContent:'center'}}>
                    <Icon name="google-translate" type="MaterialCommunityIcons" style={{color:azul}}/>
                        <View style={{marginLeft:15}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Idiomas</Text>
                            <View style={{flexDirection:'row',width:200,justifyContent:'space-evenly',marginBottom:15,marginTop:5}}>
                                <Label style={{width:120,backgroundColor:'#E5E8E8',borderRadius:2,height:33,textAlign:'center',textAlignVertical:'center'}}>Português</Label>
                                 <Switch value={pt} onValueChange={()=> setpt(!pt)}/>
                            </View>
                            <View style={{flexDirection:'row',width:200,justifyContent:'space-evenly'}}>
                                <Label style={{width:120,backgroundColor:'#E5E8E8',borderRadius:2,height:33,textAlign:'center',textAlignVertical:'center'}}>Inglês</Label>
                                <Switch value={en} onValueChange={()=> seten(!en)}/>
                            </View>
                        </View>
                </View>
                <Divider style={{height:0.4,backgroundColor:'#c8c8c8'}}/>
                <View style={{flexDirection:'row',justifyContent:'space-evenly',height:60,alignItems:'center'}}>
                    
                    <Icon name='sunny-outline' type='Ionicons' style={{color:azul}}/>
                    <Text style={{fontWeight:'bold',fontSize:18}}>Modo escuro</Text>
                    <Switch value={dark} onValueChange={()=> setdark(!dark)}/>
                </View>
                <Divider style={{height:0.4,backgroundColor:'#c8c8c8'}}/>
            </View>
        </View>
    )
}
