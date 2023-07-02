
import { FlatList, StyleSheet, Text, View, Image, RefreshControl, ActivityIndicator, Button, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import myItemSeparator from './myItemSeparator';
import myListEmpty from './myListEmpty';
import { useState, useEffect } from 'react';
import SafeAreaView from 'react-native-safe-area-view';


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
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            {refreshing ? <ActivityIndicator /> : null}
                            <View >

                                <View style={{ backgroundColor: '#529FF3', margin: 10 }}>
                                    <TouchableHighlight onPressOut={() => navigation.navigate('Details', { item })}>
                                        <Image source={{ uri: item.src }} style={{ height: 100, width: 100, alignSelf: 'center' }} />
                                    </TouchableHighlight>
                                </View>
                                <Text style={{ paddingVertical: 5, fontSize: 12, color: 'black' }}>
                                    {item.title} </Text>
                                <View style={{ alignItems: 'stretch', flexDirection: 'row' }}>
                                    <Text style={{ paddingVertical: 5, fontSize: 12, color: 'red', width: '100%' }}>
                                        {item.dicount} </Text>
                                    <Text style={{ paddingVertical: 5, alignSelf: 'flex-end', fontSize: 12, color: 'black', width: '100%' }}>
                                        {item.price} 원</Text>
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
        padding: 10,

    },
    item: {
        padding: 10,
        fontSize: 8,
        marginTop: 5,
    }
})
