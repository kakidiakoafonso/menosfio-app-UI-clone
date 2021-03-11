import React,{useState,useRef, useEffect} from 'react'
import {View,Image, Text,ScrollView, TouchableOpacity} from 'react-native'
import {Header,Overlay} from 'react-native-elements'
import {Icon} from 'native-base'
import { useNavigation } from "@react-navigation/native";
import CardInfo from '../Components/CardInfo'
import RBSheet from "react-native-raw-bottom-sheet";


const img = "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-700x467.jpg"
const api = 
[
  {
    titulo:"Sócia, a representar angola, compete por um lugar na final regional do Seedstars World 2020/21",
    data:"03/03/2021",
    descricao:"Como vencedora da edição do Seedstars em Angola, a Sócia competirá por um lugar na final mundial. Para isso, deverá antes suplantar outras startups africanas e mostrar que está pronta para competir pela chance de ganhar $ 500k em investimentos no Seedstars World Competition 2020/21!",
    imagem:"https://www.menosfios.com/wp-content/uploads/2020/11/Socia-Vencedora-Seedstars-Luanda-2020-4.jpeg"
  },
  {
    titulo:"A tecnologia pode ser um motor para o progresso humano? A Huawei responde…",
    data:"04/03/2021",
    descricao:"A tecnologia traz benefícios significativos para a humanidade e a tecnologia digital pode ser uma ferramenta essencial para ajudar as Nações Unidas a alcançar os seus Objetivos de Desenvolvimento Sustentável (ODSs). Esta foi a opinião da vice-presidente sénior e membro do conselho da Huawei, Catherine Chen, no seu discurso de abertura, no recente Fórum Conectado para a Prosperidade Compartilhada em Xangai, China.",
    imagem:"https://www.menosfios.com/wp-content/uploads/2021/03/Huawei-Tour.jpg"
  },
  {
    titulo:"UNITEL Net Shows, foi lançada oficialmente a aplicação para shows e outros eventos culturais",
    data:"01/03/2021",
    descricao:"Como confinamento, que esteve em alta em 2020, os eventos culturais foram limitados. Os fãs e artistas foram obrigados a procurar novas formas de interação. Olhando para isso, a UNITEL lançou no final de Fevereiro (dia 26) a aplicação de streaming “UNITEL Net Shows”, destinada para os amantes da Cultura/Arte.",
    imagem:"https://www.menosfios.com/wp-content/uploads/2021/03/Unitel-Netshows.jpg"
  },
  {
    titulo:"Relançar a economia pós-covid através das novas tecnologias",
    data:"01/03/2021",
    descricao:"Com a pandemia que não vai sair das nossas vidas tão cedo e com o impacto terrível que teve nas economias dos países – no nosso país pior ainda pela já difícil situação pré-Covid – o desafio agora é retomar a produção de produtos dolorosamente necessários à sobrevivência dos cidadãos e ao mesmo tempo manter as regras de prevenção da Covid. Ou seja, aumentar a produção com menos gente a trabalhar, de forma urgente, porque os níveis de fome e miséria nunca foram tão altos como agora.",
    imagem:"https://www.menosfios.com/wp-content/uploads/2021/03/smart-farmin.jpg"
  },
  {
    titulo:"Segunda edição do Hackaton em Cabinda marcada para 27 de Fevereiro",
    data:"27/02/2021",
    descricao:"O Grupo de desenvolvedores do Google (GDG Cabinda) e a TchiowaHub realizarão no dia 27 de Fevereiro de 2021 pelas 09h00 no auditório da Instituto Superior Politécnico Lusíada de Cabinda , a segunda edição do Hackhaton em Cabinda.A primeira edição do Hackathon em 2020 teve como tema a Covid-19,nesta segunda edição será de modalidade livre onde serão apresentadas soluções sobre problemas reais da sociedade usando a tecnologia.",
    imagem:"https://www.menosfios.com/wp-content/uploads/2021/02/Hackaton-Cabinda-2.jpeg"
  },
]



const azul = '#4db8ff'
export default function Home() 
{
  const [visivel, setvisivel] = useState(false)
  const [categoria, setcategoria] = useState("Todas as categorias")
  const [data, setdata] = useState(api)
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
          {
            data.map((item,index)=>
            (
              <CardInfo item={item} key={index}/>
            )
            )
          }
          
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

/*
<CardInfo/>
          <CardInfo/>
*/