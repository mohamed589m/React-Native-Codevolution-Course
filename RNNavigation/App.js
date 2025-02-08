import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Alert, Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="About">
//         {/* // we uses initialRouteName to make the About screen displayed as the initial screen */}
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="About" component={AboutScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// *****************************************************************************************************************

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6a51ae",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Pressable onPress={() => alert("Menu button pressed!")}>
              <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "#e8e4f3",
          },
        }}
      >
        {/* // we uses initialRouteName to make the About screen displayed as the initial screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{
            name: "Default params",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
