import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { RootStackParamList } from 'src/types/NavigationTypes';
import authApis from '@api/domain/auth';

type NavigationProp = StackNavigationProp<RootStackParamList>;

export default function useLogin() {
  const navigation = useNavigation<NavigationProp>();

  const loginMutate = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authApis.login({
        email,
        password,
      }),
    onSuccess: () => {
      console.log('로그인 성공');
      navigation.navigate('Map');
    },
  });

  return { loginMutate };
}
