import { View, Text, StyleSheet } from "react-native";

export default function myListEmpty() {
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.item}>No data found</Text>
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

