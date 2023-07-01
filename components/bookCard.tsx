import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import myItemSeparator from './myItemSeparator';
import myListEmpty from './myListEmpty';

const persons = [
    {
        id: "1",
        name: "Earnest Green",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "2",
        name: "Winston Orn",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "3",
        name: "Carlton Collins",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "4",
        name: "Malcolm Labadie",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "5",
        name: "Michelle Dare",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "6",
        name: "Carlton Zieme",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "7",
        name: "Jessie Dickinson",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "8",
        name: "Julian Gulgowski",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "9",
        name: "Ellen Veum",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "10",
        name: "Lorena Rice",
        src: 'https://picsum.photos/200/300',
    },

    {
        id: "11",
        name: "Carlton Zieme",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "12",
        name: "Jessie Dickinson",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "13",
        name: "Julian Gulgowski",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "14",
        name: "Ellen Veum",
        src: 'https://picsum.photos/200/300',
    },
    {
        id: "15",
        name: "Lorena Rice",
        src: 'https://picsum.photos/200/300',
    },
];

export default function bookCard(props: any) {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#529FF3', margin: 10 }}>
                <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black' }}>
                    {props.item.name}</Text>
                <Image source={{ uri: props.item.src }} style={{ height: 100, width: 100 }} />
            </View>
        </View>
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
