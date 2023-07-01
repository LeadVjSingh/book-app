import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, Image, RefreshControl, ActivityIndicator, Button, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import myItemSeparator from './myItemSeparator';
import myListEmpty from './myListEmpty';
import { useState, useEffect } from 'react';

export default function DetailsScreen({ route }) {
    // console.log("here is the props", route.params)

    return (
        <View>

            <View style={styles.container}>

                <View style={{ backgroundColor: '#529FF3', margin: 10 }}>
                    <Image source={{ uri: route.params.item.src ?? '' }} style={{ height: 100, width: 100, alignSelf: 'center' }} />
                </View>
                <View style={{ alignItems: 'stretch', flexDirection: 'row' }}>
                    <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black' }}>
                        {route.params.item.title ?? ''} </Text>
                    <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black' }}>
                        {route.params.item.price ?? ''} 원</Text>
                </View>

            </View>
        </View>
    );
}

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
