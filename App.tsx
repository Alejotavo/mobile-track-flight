import { StatusBar } from 'expo-status-bar';
import { View, Platform } from 'react-native';
import { styled, TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UseSearchContent } from './components/Search/UseSearchContent';
import { ResultScreen } from './components/Result/Result';

const Stack = createStackNavigator();

const StyledView = styled(View);

export default function App() {
return (
    <TailwindProvider platform={Platform.OS}>
      <StyledView className="flex-1 bg-white">
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Search" component={UseSearchContent} />
            <Stack.Screen name="Result" component={ResultScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </StyledView>
    </TailwindProvider>
  );
}
