import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { Container } from '../atoms/container.atom.styled';
import { IconButton } from '../atoms/icon-button.atom.styled';
import { Input } from '../atoms/input.atom.styled';

interface AppInputProps {
  showButton?: boolean;
  iconName?: string;
}
export const AppInput = (props: AppInputProps) => {
  const [value, setValue] = useState('');
  const handleText = (text: string) => {
    setValue(text);
  };

  return (
    <Container direction="row" mt={16} justifyCon alignIt>
      <Input
        radiusValue={16}
        onChangeText={handleText}
        inputWidth={73}
        value={value}
      />
      {props.showButton && (
        <IconButton buttonWidth={15} bgColor="transparent">
          <Icon name={props.iconName ?? 'edit'} size={26} />
        </IconButton>
      )}
    </Container>
  );
};
