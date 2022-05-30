import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';


//Para mais informações sobre twrnc
// https://github.com/jaredh159/tailwind-react-native-classnames

const data = [
    {
        id: "123",
        title : "Localizar Provedor",
        image: "https://img.icons8.com/fluency/344/wifi.png",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Mensagens",
        image:"https://img.icons8.com/fluency/344/communication.png",
        screen: "Mensagens", // Adicionar
    },
];

const NavOptions = () => {

    const navigation = useNavigation();

  return (
    <FlatList
        data={data}
        horizontal
        keyExtrator={(item) => item.id}
        renderItem={({item}) => (
            //Quadradinhos cinza 
            <TouchableOpacity 
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image
                        style={{width: 100, height:100, resizeMode: "contain" }}
                        source={{uri: item.image}}
                    />
                   
                    <Text style={tw`mt-2 text_lg font-semibold`}>{item.title}</Text>
                    {/* <Icon
                        style ={tw`p-2 bg-black rounded-full w-10 mt-4`} 
                        name ="arrowright" color="white" type = "antdesign"
                    /> */}
    
                </View>

            </TouchableOpacity>
    )}
    >
    </FlatList>
  )
}

export default NavOptions
