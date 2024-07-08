import styled from 'styled-components/native';
import {theme} from '../theme';

export const CircleView = styled.View`
  width: 36px;
  justify-content: center;
  align-items: center;
  height: 36px;
  border-radius: 18px;
  background-color: ${theme.colors.white};
`;

export const CenteredView = styled.View`
  align-items: center;
`;
