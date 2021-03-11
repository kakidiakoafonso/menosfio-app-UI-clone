import React,{useState,useRef} from 'react'
import {View,Image, Text,ScrollView,Dimensions,TouchableOpacity} from 'react-native'
import {Header, Overlay} from 'react-native-elements'
import {Icon, Input} from 'native-base'
import { useNavigation } from "@react-navigation/native";


const {width,height} = Dimensions.get("window")
const azul = '#4db8ff'
const userAvatar = "https://avatars.githubusercontent.com/u/22997881?s=400&u=49b8ffc223b5290d044d7be338f19613d6bc6a98&v=4"


export default function Detalhes({route}) 
{   const {i} = route.params
    const navigation = useNavigation()
    const [info, setinfo] = useState(false)
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
        <Header containerStyle={{backgroundColor:'#fff',height:75,justifyContent:'center'}} >
                <Icon name='left' type='AntDesign' style={{color:azul}} onPress={()=> navigation.goBack()}/>
                <Text style={{fontWeight:'bold',fontSize:18}}>Detalhe</Text>
                <Icon name='monitor-share' type='MaterialCommunityIcons' style={{color:azul}} onPress={()=> navigation.goBack()}/>
        </Header>
        <ScrollView>
            <View style={{alignSelf:"center"}}>
                    <Text style={{fontWeight:'bold',fontSize:17,margin:10,marginTop:20}} numberOfLines={3}>
                        {i.titulo}
                    </Text>
                    <Text style={{color:azul, fontSize:13,fontWeight:'bold',margin:10}}> 
                        Publicado em {i.data}
                    </Text>
            </View>

            <Image style={{width:width*0.95,height:300,alignSelf:"center"}}
                source={{uri:i.imagem}}/>
            <View style={{width:width*0.95,marginTop:20,alignSelf:"center",marginBottom:50}}>
                <Text style={{fontSize:15}}>
                    {i.descricao}
                </Text>
            </View>
          </ScrollView>
            
            <View style={{backgroundColor:'#E5E7E9',height:50,width:'100%',bottom:0,position:'absolute',flexDirection:'row'}}>
                <TouchableOpacity onPress={()=> navigation.navigate("Comentario")}
                    style={{flex:1,justifyContent:'space-evenly',alignItems:'center',
                    flexDirection:'row',paddingHorizontal:3}}>
                    <Icon name="comments-o" type="FontAwesome"/>
                    <Text>(0) comentários</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> setinfo(!info)}
                    style={{flex:1,justifyContent:'space-evenly',flexDirection:"row",alignItems:'center'}}>
                <Image style={{width:30,height:30,borderRadius:8}}
                    source={{uri:userAvatar}}/>
                    <Text style={{fontSize:12}}>Kakidiako Afonso António</Text>
                </TouchableOpacity>
            </View>

            <Overlay isVisible={info} onBackdropPress={()=> setinfo(!info)}
                overlayStyle={{width:'70%',height:350,borderRadius:5}}>
                <View style={{flex:1,alignItems:'center'}}>
                    <Image source={{uri:userAvatar}} style={{width:80,height:80,borderRadius:15}}/>
                    <Text style={{fontWeight:'bold',margin:10}}>Kakidiako Afonso Antonio</Text>
                    <Text>
                        Jovem apaixonado por tecnologia, em especial segurança.
                        Estudante do terceiro ano do curso de Engenharia Informática no INSTITUTO
                        SUPERIOR PARA AS TECNOLOGIAS DE INFORMAÇÃO E COMUNICAÇÃO.
                    </Text>
                    <View style={{marginTop:5}}>
                        <Text>
                            Programador <Text style={{color:azul}}>REACT NATIVE, PHP, HTML, CSS, REACT JS </Text>
                        </Text>
                    </View>
                </View>
            </Overlay>
        </View>
    )
}

