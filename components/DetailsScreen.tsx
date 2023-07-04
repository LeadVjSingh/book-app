import { StyleSheet, Text, View, Image } from 'react-native';


export default function DetailsScreen({ route }) {
    route.params = { item: { id: "1", title: "레이블라우스", description: "book details", dicount: "10%", price: '57,600', src: 'https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6' } };
    return (
        <View>

            <View style={styles.container}>
                <View style={{ backgroundColor: '#ffffff', margin: 5 }}>
                    <Image source={{ uri: route.params.item.src }} style={{ height: 100, width: 100, alignSelf: 'center' }} />
                </View>
                <View style={{ alignItems: 'stretch', flexDirection: 'column' }}>
                    <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black' }}>
                        {route.params.item.title} </Text>
                    <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black' }}>
                        {route.params.item.description} 원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원원</Text>
                    <View style={{ alignItems: 'stretch', flexDirection: 'row' }}>

                        <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'red' }}>
                            {route.params.item.discount} 원</Text>
                        <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black', alignSelf: 'flex-end' }}>
                            {route.params.item.price} 원</Text>
                    </View >
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
