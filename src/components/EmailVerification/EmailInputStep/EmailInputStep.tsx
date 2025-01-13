import React from 'react';
import InputField from '../../_common/molecules/InputField/InputField';
import Button from '../../_common/atoms/Button/Button';
import S from './EmailInputStep.styles';

interface EmailInputStepProps {
  emailRegister: {
    value: string;
    onChange: (value: string) => void;
    error?: string;
  };
  handlePress: (func: any) => void;
}

export default function EmailInputStep({ emailRegister, handlePress }: EmailInputStepProps) {
  const handleStep1Submit = async () => {
    // todo: 이메일 인증 api
    console.log('Step 1 complete');
  };

  return (
    <S.AppContainer>
      <S.Layout>
        <InputField label='이메일을 입력해 주세요.' {...emailRegister} />
        <Button onPress={() => handlePress(handleStep1Submit)}>다음</Button>
      </S.Layout>
    </S.AppContainer>
  );
}