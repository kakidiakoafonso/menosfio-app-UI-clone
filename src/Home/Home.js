import React,{useState,useRef} from 'react'
import {View,Image, Text,ScrollView, TouchableOpacity} from 'react-native'
import {Header,Button,Overlay} from 'react-native-elements'
import {Icon} from 'native-base'
import { useNavigation } from "@react-navigation/native";
import CardInfo from '../Components/CardInfo'
import RBSheet from "react-native-raw-bottom-sheet";

const azul = '#4db8ff'
export default function Home() 
{
  const [visivel, setvisivel] = useState(false)
  const [categoria, setcategoria] = useState("Todas as categorias")
  const navigation = useNavigation()
  const modal = () =>{ setvisivel(!visivel)}

  const cat =(text)=>
  {
    setcategoria(text)
    refRBSheet.current.close()
  }
  const refRBSheet = useRef();
  return (
    <View style={{flex:1,backgroundColor:'#f2f2f2'}}>
      <Header containerStyle={{backgroundColor:'#fff',height:75}} >
        <Image source={require('../img/menosFiologo.png')} style={{width:30,height:30,marginLeft:1}}/>
        <TouchableOpacity  onPress={() => refRBSheet.current.open()}
          style={{backgroundColor:'#e6e6e6',width:150,height:35,
          borderRadius:2,justifyContent:'center',alignItems:'center', flexDirection:'row',
          paddingHorizontal:3}}>
          <Icon name='grid-outline' type='Ionicons'/>
            <View style={{width:'70%',marginLeft:3}}>
              <Text style={{fontWeight:'bold',fontSize:15}} numberOfLines={2} lineBreakMode='tail'>{categoria}</Text>
            </View>
        </TouchableOpacity>
        <View style={{flexDirection:'row',justifyContent:'space-between', width:60}}>
          <Icon name='md-person-outline' style={{color:azul}} type='Ionicons' onPress={()=> modal()}/>
          <Icon name='md-settings-outline' style={{color:azul}} type='Ionicons' onPress={()=> {navigation.navigate('Definicoes')
        console.log("Defi")}}/>
        </View>
      </Header>
      
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardInfo/>
          <CardInfo/>
        </ScrollView>

      <TouchableOpacity style={{backgroundColor:azul,width:60,height:60,borderRadius:30,
        position:'absolute',bottom:15,right:15,justifyContent:'center'}}
        onPress={()=>navigation.navigate('Search')}>
        <Icon name='search' style={{color:'#fff',alignSelf:'center'}} type='Ionicons'/>
      </TouchableOpacity>

      <Overlay isVisible={visivel} overlayStyle={{width:'70%',height:350,borderRadius:5}} onBackdropPress={()=> modal()}>
        <View style={{flex:1}}>
            <View style={{justifyContent:'center',alignItems:'center',height:'30%'}}>
              <Image source={require('../img/menosFiologo.png')} style={{width:30,height:30}}/>
              <View>
                <Text style={{color:'#262626',fontSize:15,fontWeight:'bold'}}>
                  Crie um perfil e conecta-se a nós
                </Text>
              </View>
            </View>
            <View style={{height:'70%',justifyContent:'space-around',alignItems:'center'}}>
            <TouchableOpacity style={{height:55,borderWidth:1,borderColor:'blue',borderRadius:4,
            width:200,
            flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
              <Icon name='facebook' type='FontAwesome' style={{color:'blue'}}/>
              <Text style={{color:'blue',fontSize:16,fontWeight:'bold',marginLeft:5}}>Facebook</Text>
            </TouchableOpacity>
      
            <TouchableOpacity style={{height:55,borderWidth:1,borderColor:'red',borderRadius:4,
            width:200,
            flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
              <Icon name='google' type='AntDesign' style={{color:'red'}}/>
              <Text style={{color:'red',fontSize:16,fontWeight:'bold',marginLeft:5}}>Goolge</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> modal()}
            style={{height:55,borderRadius:4,width:200, justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#000',fontSize:16,fontWeight:'bold',marginLeft:5}}>Agora não</Text>
            </TouchableOpacity>


              
            </View>

        </View>
      </Overlay>
    
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          },
          container:{height:'60%'}
        }}
        
      >
        <View style={{flex:1}}>
          <View style={{height:80,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:18}}>
              Categorias
            </Text>
            <Text style={{fontSize:16, color:'#404040'}}>
              Ver noticias relacionadas
            </Text>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:20}}>
              <TouchableOpacity style={{width:80,height:70,backgroundColor:"Todas as categorias"==categoria? azul :'#cccccc',borderRadius:3,
                justifyContent:'center',alignContent:'center'}}
                onPress={()=> cat("Todas as categorias")}>
                <Text style={{alignSelf:'center',textAlign:'center',color:"Todas as categorias"==categoria?'#fff':'#000'}}>Todas as categorias</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{width:80,height:70,backgroundColor:"África"==categoria? azul :'#cccccc',borderRadius:3,
                justifyContent:'center',alignContent:'center'}}
                onPress={()=> cat("África")}>
                <Text style={{alignSelf:'center',textAlign:'center',color:"África"==categoria?'#fff':'#000'}}>África</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:80,height:70,backgroundColor:"Android"==categoria? azul :'#cccccc',borderRadius:3,
                justifyContent:'center',alignContent:'center'}}
                onPress={()=> cat("Android")}>
                <Text style={{alignSelf:'center',textAlign:'center',color:"Android"==categoria?'#fff':'#000'}}>Android</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{width:80,height:70,backgroundColor:"Apple"==categoria? azul :'#cccccc',borderRadius:3,
                justifyContent:'center',alignContent:'center'}}
                onPress={()=> cat("Apple")}>
                <Text style={{alignSelf:'center',textAlign:'center',color:"Apple"==categoria?'#fff':'#000'}}>Apple</Text>
              </TouchableOpacity>
            </View>
          <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:20}}>
              <TouchableOpacity style={{width:80,height:70,backgroundColor:"Angola"==categoria? azul :'#cccccc',borderRadius:3,
                justifyContent:'center',alignContent:'center'}}
                onPress={()=> cat("Angola")}>
                <Text style={{alignSelf:'center',textAlign:'center',color:"Angola"==categoria?'#fff':'#000'}}>Angola</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{width:80,height:70,backgroundColor:"Cinema"==categoria? azul :'#cccccc',borderRadius:3,
                justifyContent:'center',alignContent:'center'}}
                onPress={()=> cat("Cinema")}>
                <Text style={{alignSelf:'center',textAlign:'center',color:"Cinema"==categoria?'#fff':'#000'}}>Cinema</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:80,height:70,backgroundColor:"Dicas"==categoria? azul :'#cccccc',borderRadius:3,
                justifyContent:'center',alignContent:'center'}}
                onPress={()=> cat("Dicas")}>
                <Text style={{alignSelf:'center',textAlign:'center',color:"Dicas"==categoria?'#fff':'#000'}}>Dicas</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{width:80,height:70,backgroundColor:"Ciência"==categoria? azul :'#cccccc',borderRadius:3,
                justifyContent:'center',alignContent:'center'}}
                onPress={()=> cat("Ciência")}>
                <Text style={{alignSelf:'center',textAlign:'center',color:"Ciência"==categoria?'#fff':'#000'}}>Ciência</Text>
              </TouchableOpacity>
            </View>
          
        </View>
      </RBSheet>
    </View>
  );
}
