import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useLayoutEffect, useMemo } from 'react';
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { useSelector } from 'react-redux';
import {
  ThemeType,
  themeActions,
  themeSelector,
} from '../../redux/reducers/sliceTheme/sliceTheme';
import { useAppDispatch } from '../../redux/store';

export const STORAGE_THEME_KEY = 'STORAGE_THEME_KEY';
const useTheme = () => {
  // const colorScheme = useColorScheme();
  // const [theme, setTheme] = useState(colorScheme)
  const { theme } = useSelector(themeSelector);
  const dispatch = useAppDispatch();
  // const systemIsDark = useMemo(() => colorScheme === "dark", [colorScheme]);
  const handleChangeTheme = useCallback((newTheme: ThemeType) => {
    dispatch(themeActions.setTheme(newTheme));
    AsyncStorage.setItem(STORAGE_THEME_KEY, newTheme);
  }, []);

  useLayoutEffect(() => {
    const execute = async () => {
      const value: ThemeType | null = (await AsyncStorage.getItem(
        STORAGE_THEME_KEY
      )) as any;
      if (value !== null) {
        // value previously stored
        if (value === 'light' || value === 'dark') {
          dispatch(themeActions.setTheme(value));
        }
      }
    };
    execute();
  }, []);

  return {
    theme,
    handleChangeTheme,
  };
};

type ThemeProviderProps = {
  children: React.ReactNode;
};
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useTheme();

  const paperTheme = useMemo(
    () => (theme === 'dark' ? { ...MD3DarkTheme } : { ...MD3LightTheme }),
    [theme]
  );
  return <PaperProvider theme={paperTheme}>{children}</PaperProvider>;
};

export default useTheme;
