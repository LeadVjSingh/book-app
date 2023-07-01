
import { StyleSheet, Text, View, Image } from 'react-native';

export default function BookCard(props: any) {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#529FF3', margin: 10 }}>
                <Image source={{ uri: props.item.src }} style={{ height: 100, width: 100 }} />
                <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black' }}>
                    {props.item.name}</Text>
                <Text style={{ paddingVertical: 10, fontSize: 15, paddingStart: 5, paddingEnd: 16, color: 'black' }}>
                    {props.item.name}</Text>
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
