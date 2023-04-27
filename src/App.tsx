import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './AppNavigator';
export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3LightTheme}>
        <AppNavigator />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
