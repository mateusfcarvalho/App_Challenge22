import React, {useState} from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    }   from "react-native";
import tw from 'twrnc';
import { Icon } from "react-native-elements";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Image } from "react-native"
const data = [

    {
        id: "5678",
        title : "Viasat",
        conecao: "Satélite",
        recomenda: "https://cdn-icons.flaticon.com/png/512/787/premium/787766.png?token=exp=1653872208~hmac=9ca9c2b8e873df9dba7f069104ea23e0" ,
        multiplier: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Viasat.svg/1200px-Viasat.svg.png",
        
    },
    {
        id: "5679",
        title : "Atella",
        conecao: "Radio/Fibra",
        multiplier: 1,
        recomenda : null,
        image: "https://www.voue.com.br/wp-content/uploads/2020/07/LOGO_VOUE1.png",
    },
]

const Provider = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    return(

        <SafeAreaView style={tw`bg-white flex-1`}>
        <View>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("HomeScreen")}
        style={tw`absolute top-3 left-5 p-3 rounded-full`}>
        <Icon name="chevron-left" tvpe="fontawesome" />
         </TouchableOpacity>
            <Text style={tw`text-center py-5 text-xl`}>Selecione um Provedor</Text>
        </View>

        <FlatList
        data={data}
        kevExtractor={(item)=>item.id}
        renderItem={({ item : { id, title, conecao, multiplier, recomenda, image}, item}) =>(
        <TouchableOpacity
            onPress={()=>setSelected(item)}
            style={tw`flex-row justify-between itens-center px-10 ${
            id === selected?. id && "bg-gray-200"
        }`}
        >  
            <Image
                style={{
                width: 50,
                height: 50,
                resizeMode: "contain"
                }}
                source={{ uri: image }}
            ></Image>
            <View stvle= {tw`-ml-6`}>

             <Text style={tw`text-xl font-semibold text-center `}> {title} </Text>   
            <Text style={tw`text-sm  text-center `}>{conecao}</Text>

            </View>
            <Image
                style={{
                width:40,
                height: 40,
                resizeMode: "contain"
                }}
                source={{ uri: recomenda }}
            ></Image>
           
        </TouchableOpacity>
        )}
    ></FlatList>
        
        <View>
            <TouchableOpacity 
            disable ={!selected}
            style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
            >
                <Text style={tw`text-center text-white text-xl`}>
            Entrar em contato com {selected?.title}
                </Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
    );
};
export default Provider;
const stvles = StyleSheet.create({});