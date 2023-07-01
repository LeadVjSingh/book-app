import { View, Button, Text } from "react-native";

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
            <Button title="Go to 자유톡" onPress={() => navigation.navigate('BookList')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}