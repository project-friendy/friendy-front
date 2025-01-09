import React from 'react';
import S from './LoginScreen.styles';
import Button from '../../components/_common/atoms/Button/Button';
import InputField from '../../components/_common/molecules/InputField/InputField';
import PasswordInput from '../../components/PasswordInput/PasswordInput';
import LinkedText from '../../components/_common/atoms/LinkedText/LinkedText';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/NavigationTypes';
import useForm from '../../hooks/utils/useForm';
import { validateNull } from '../../validations/userValidators';

export type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const { formData, register, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const handlePress = (func: any) => {
    const hasError = handleSubmit(async () => await func());
    if (!hasError) {
      // Todo: navigate to main screen
      navigation.navigate('Root');
    }
  };

  const handleLogin = () => {
    // Todo: login API
    console.log('Login complete');
  };

  const handleForgotPassword = () => {
    // Todo: navigate to forgot password screen
  };

  return (
    <S.AppContainer>
      <S.Layout>
        <S.Section>
          <InputField
            label={'이메일'}
            marginBottom={14}
            {...register('email', { validate: validateNull })}
          ></InputField>
          <PasswordInput
            label={'비밀번호'}
            marginBottom={30}
            {...register('password', { validate: validateNull })}
          ></PasswordInput>
          <LinkedText onPress={handleForgotPassword}>비밀번호가 기억나지 않나요?</LinkedText>
        </S.Section>
        <Button
          onPress={() => {
            handlePress(handleLogin);
          }}
        >
          완료
        </Button>
      </S.Layout>
    </S.AppContainer>
  );
}