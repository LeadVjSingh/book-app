import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, RefreshControl, ActivityIndicator, Button, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import myItemSeparator from './myItemSeparator';
import myListEmpty from './myListEmpty';
import { useState, useEffect } from 'react';


const apiResponse = [
    { id: "1", title: "레이블라우스", description: "book details", dicount: "10%", price: '57,600', src: 'https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6' },
    { id: "2", title: "레이블라우스", description: "book details", dicount: "10%", price: '57,600', src: "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6" },
    { id: "3", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600', src: "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6" },
    { id: "4", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600', src: "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6" },
    { id: "5", title: "레이블라우스", description: "book details", dicount: "20%", price: '57,600', src: "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6" },
    { id: "6", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600', src: "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6" },
    { id: "7", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600', src: "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6" },
    { id: "8", title: "레이블라우스", description: "book details", dicount: "20%", price: '57,600', src: "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6" },
    { id: "9", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600', src: "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6" },
    { id: "10", title: "레이블라우스", description: "book details", dicount: "40%", price: '57,600', src: "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6" },
]
const images = [
    {
        "name": "Miyah Myles",
        "email": "miyah.myles@gmail.com",
        "position": "Data Entry Clerk",
        "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
    },
    {
        "name": "June Cha",
        "email": "june.cha@gmail.com",
        "position": "Sales Manager",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
    },
    {
        "name": "Iida Niskanen",
        "email": "iida.niskanen@gmail.com",
        "position": "Sales Manager",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
    },
    {
        "name": "Renee Sims",
        "email": "renee.sims@gmail.com",
        "position": "Medical Assistant",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
    },
    {
        "name": "Jonathan Nu\u00f1ez",
        "email": "jonathan.nu\u00f1ez@gmail.com",
        "position": "Clerical",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
    },
    {
        "name": "Sasha Ho",
        "email": "sasha.ho@gmail.com",
        "position": "Administrative Assistant",
        "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
    },
    {
        "name": "Abdullah Hadley",
        "email": "abdullah.hadley@gmail.com",
        "position": "Marketing",
        "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
    },
    {
        "name": "Thomas Stock",
        "email": "thomas.stock@gmail.com",
        "position": "Product Designer",
        "photo": "https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg"
    },
    {
        "name": "Veeti Seppanen",
        "email": "veeti.seppanen@gmail.com",
        "position": "Product Designer",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg"
    },
    {
        "name": "Bonnie Riley",
        "email": "bonnie.riley@gmail.com",
        "position": "Marketing",
        "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
    }
]

export default function BookList({ navigation }) {
    const [refreshing, setRefreshing] = useState(true);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = () => {
        fetch('https://randomuser.me/api/?results=100')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("response received");
                setRefreshing(false);
                var newdata = userData.concat(responseJson.results);
                setUserData(newdata);
            })
            .catch((error) => {
                console.log("response error", error);
                console.error(error);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={apiResponse}
                renderItem={({ item }) => {
                    return (
                        <View>
                            {refreshing ? <ActivityIndicator /> : null}
                            <View style={styles.container}>

                                <View style={{ backgroundColor: '#529FF3', margin: 10 }}>
                                    <TouchableHighlight onPressOut={() => navigation.navigate('Details', { item })}>
                                        <Image source={{ uri: item.src }} style={{ height: 100, width: 100, alignSelf: 'center' }} />
                                    </TouchableHighlight>
                                </View>
                                <View style={{ alignItems: 'stretch', flexDirection: 'row' }}>
                                    <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black' }}>
                                        {item.title} </Text>
                                    <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black' }}>
                                        {item.price} 원</Text>
                                    {/* <Button title="Go to Home" onPress={() => navigation.navigate('Details', { item })} /> */}
                                </View>


                            </View>
                        </View>
                    )
                }
                }
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={myItemSeparator}
                ListEmptyComponent={myListEmpty}
                refreshControl={
                    < RefreshControl refreshing={refreshing} onRefresh={loadUserData} />
                }
                ListHeaderComponent={() => (
                    <Text style={{ fontSize: 30, textAlign: "center", marginTop: 20, fontWeight: 'bold', textDecorationLine: 'underline' }}>
                        자유톡
                    </Text>
                )}
            >
            </FlatList >
        </SafeAreaView >
    );
}

//styles to see the data more clearly

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,

    },
    item: {
        padding: 20,
        fontSize: 15,
        marginTop: 5,
    }
})
