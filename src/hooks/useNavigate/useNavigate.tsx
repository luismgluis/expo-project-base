import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { AppRouteName } from '../../../AppRoutes';

const useNavigate = () => {
  const navigation = useNavigation();
  const goTo = useCallback(
    (path: AppRouteName) => {
      (navigation.navigate as any)(path);
    },
    [navigation]
  );
  return {
    goTo,
  };
};
export default useNavigate;
