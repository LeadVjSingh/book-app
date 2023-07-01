import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BookList from './components/BookList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './components/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="자유톡" component={BookList} />
        <Stack.Screen name="Details"
          options={({ route }) => ({ title: route.params.item.title })}
          component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
