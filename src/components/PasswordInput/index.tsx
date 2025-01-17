import { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import S from './style';
import InputField from '@components/_common/molecules/InputField';
import IconButton from '@components/_common/atoms/IconButton';

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  marginBottom?: number;
  error?: string;
}

export default function PasswordInput({
  label,
  value,
  onChange,
  marginBottom,
  error,
}: PasswordInputProps) {
  const [isShow, setIsShow] = useState(false);

  const handlePress = () => {
    setIsShow(prev => !prev);
  };

  return (
    <InputField
      label={label}
      value={value}
      onChange={onChange}
      isShow={isShow}
      error={error}
      marginBottom={marginBottom}
    >
      {value && (
        <S.EyeIcon>
          <IconButton onPress={handlePress}>
            {isShow ? <Icon name='eye' size={20} /> : <Icon name='eye-off' size={20} />}
          </IconButton>
        </S.EyeIcon>
      )}
    </InputField>
  );
}