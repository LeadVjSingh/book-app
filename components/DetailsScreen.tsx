import { View, Button, Text } from "react-native";

export default function DetailsScreen({ route }) {
    console.log("here is the props", route.params)

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{route.params.title} Hello</Text>

            <Button title="Go to 자유톡" onPress={() => route.navigate('BookList')} />
            <Button title="Go back" onPress={() => route.goBack()} />
        </View>
    );
}