import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import BottomNavigator from "./Components/BottomNavigator";

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <BottomNavigator />
            </NavigationContainer>
        </PaperProvider>
    );
}
