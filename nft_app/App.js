import { NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font';
import Details from "./screens/Details";
import Home from "./screens/Home";

export default function App() {

  const theme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background: 'transparent'
    }
  }

  const [loading] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  })

  if(!loading) return null;


  const Stack = createStackNavigator()
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
      screenOptions={{ headerShown: null }}
      initialRouteName="Home"
      >
        <Stack.Screen 
        name="Home"
        component={Home}
        />
        <Stack.Screen 
        name="Details"
        component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


