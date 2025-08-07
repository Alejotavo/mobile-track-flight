import { StatusBar } from 'expo-status-bar';
import { View, Platform } from 'react-native';
import { styled, TailwindProvider } from 'tailwindcss-react-native';
import { UseSearchContent } from './components/Search/UseSearchContent';

const StyledView = styled(View);

export default function App() {
  return (
    <TailwindProvider platform={Platform.OS}>
      <StyledView className="flex-1 bg-white">
        <StyledView className="flex-1 items-center justify-center">
          <UseSearchContent />
        </StyledView>
        <StatusBar style="auto" />
      </StyledView>
    </TailwindProvider>
  );
}
