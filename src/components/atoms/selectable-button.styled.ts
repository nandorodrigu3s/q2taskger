import styled from 'styled-components/native';

interface SelectableProps {
  bgColor?: string;
  color?: string;
  radiusBorderValue?: number;
  buttonWidth?: number;
  buttonHeight?: number;
}

export const Selectable = styled.TouchableOpacity<SelectableProps>`
  padding: 4px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${(props: SelectableProps) =>
    props.bgColor ?? 'transparent'};
  color: ${(props: SelectableProps) => props.color ?? '#FFF'};
  ${(props: SelectableProps) =>
    props.buttonWidth && `width: ${props.buttonWidth}%;`};
  ${(props: SelectableProps) =>
    props.buttonWidth && `min-width: ${props.buttonWidth}%;`};
  ${(props: SelectableProps) =>
    props.buttonHeight && `height: ${props.buttonHeight}%;`};
  ${(props: SelectableProps) =>
    props.radiusBorderValue
      ? `border-radius: ${String(props.radiusBorderValue)}px;`
      : null};
`;
