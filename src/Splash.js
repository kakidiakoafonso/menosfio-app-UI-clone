import React ,{useEffect}from 'react'
import { View} from 'react-native'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function Splash() 
{
    const nav = useNavigation()
    setTimeout(() => 
    {
        nav.navigate("Home")    
    }, 1500);
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            <Animatable.Image 
                animation="zoomOut" duration={4500}
                source={require("./img/Splash.png")} resizeMethod={"auto"} resizeMode={"contain"}
                style={{width:400}}/>
            <Animatable.Text animation="zoomIn" duration={1500}>
                www.menosfio.com
            </Animatable.Text>
        </View>
    )
}
