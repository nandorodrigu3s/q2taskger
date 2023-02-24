import React from 'react';
import { IconButton } from '../atoms/icon-button.atom.styled';
import Icon from 'react-native-vector-icons/AntDesign';
import { BaseTheme } from '../../assets/theme/app-theme';

interface AppIconButtonProps {
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
}

export const AppIconButton = (props: AppIconButtonProps) => {
  return (
    <IconButton buttonWidth={15}>
      <Icon
        color={props?.iconColor ?? 'red'}
        name={props?.iconName ?? 'edit'}
        size={props?.iconSize ?? BaseTheme.size.large}
      />
    </IconButton>
  );
};
