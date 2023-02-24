import React, { useState } from 'react';
import { BaseTheme } from '../../assets/theme/app-theme';
import { AppInputContainer } from '../atoms/app-input-container.atom.styled';
import { Container } from '../atoms/container.atom.styled';
import { Input } from '../atoms/input.atom.styled';
import { AppIconButton } from './app-icon-button.mol';
// import Logo from "./logo.svg";

interface AppInputProps {
  showButton?: boolean;
  sideIconName: string;
  buttonIconName?: string;
}
export const AppInput = (props: AppInputProps) => {

  const [value, setValue] = useState('');

  const handleText = (text: string) => {
    setValue(text);
  };

  return (
    <AppInputContainer
      containerHeight={50}
      margin={12}
      hasBorder
      hasRadius
      direction="row"
      mt={BaseTheme.size.small}
      justifyCon
      alignIt>
      <Container justifyCon alignIt>
        {BaseTheme.icons.svgs[props.sideIconName]({
          width: BaseTheme.size.large,
          color: '',
        })}
      </Container>
      <Container direction="row" justifyBetween alignIt containerWidth={75}>
        <Input
          hasBorderL
          onChangeText={handleText}
          inputWidth={73}
          value={value}
        />
        {props.showButton && <AppIconButton />}
      </Container>
    </AppInputContainer>
  );
};
