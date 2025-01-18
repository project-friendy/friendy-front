import useLogin from '@hooks/useLogin';
import useForm from '@hooks/utils/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamList } from 'src/types/NavigationTypes';
import S from './style';
import InputField from '@components/_common/molecules/InputField';
import PasswordInput from '@components/PasswordInput';
import LinkedButton from '@components/_common/atoms/LinkedButton';
import Button from '@components/_common/atoms/Button';
import { validateNull } from 'src/validations/userValidators';

export type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const { formData, register, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });
  const { loginMutate } = useLogin();

  const handlePress = async (func: () => Promise<void>) => {
    const hasError = await handleSubmit(async () => await func());
  };

  const handleLogin = async () => {
    await loginMutate.mutateAsync({
      email: formData.email,
      password: formData.password,
    });
  };

  const handleForgotPassword = () => {
    navigation.navigate('ResetPassword');
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
          <LinkedButton onPress={handleForgotPassword}>비밀번호가 기억나지 않나요?</LinkedButton>
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