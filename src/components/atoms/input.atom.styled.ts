import styled from 'styled-components/native';

interface InputProps {
  border?: string;
  radiusValue?: number;
  inputWidth?: number;
  inputHeight?: number;
}

export const Input = styled.TextInput<InputProps>`
  border: 1px solid black;
  padding: 8px;
  ${(props: InputProps) =>
    props.radiusValue && `border-radius: ${props.radiusValue}px;`};
  ${(props: InputProps) => props.inputWidth && `width: ${props.inputWidth}%;`};
  ${(props: InputProps) =>
    props.inputHeight && `height: ${props.inputHeight}%;`};
`;
