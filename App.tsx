import { StyleSheet } from "react-native";
import BookList from "./components/BookList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./components/DetailsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle:{
            fontSize: 18, 
            fontWeight: '700',
            // width:156,
            height: 18,
            marginTop: 13,
            marginBottom: 17,
            
          },
          headerTitleAlign: "center",  // Center the header title
        
        }}
        initialRouteName="자유톡"
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="자유톡"
          component={BookList}
        />
        <Stack.Screen
          name="Details"
          options={({ route }) => ({
            title: route.params.item.title,
            headerStyle: {
              backgroundColor: "#FFFFFF",
              width: 375,
              height: 48,
          
              
              // fontSize: 48,
              
            },
          })}
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
