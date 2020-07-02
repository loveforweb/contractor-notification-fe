import React from 'react';
import PropTypes from 'prop-types';
import remCalc from '../../utils/rem-calc';
import styled from 'styled-components';

const ButtonItem = styled.a`
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.prussianBlue};
  border: 1px solid ${({ theme }) => theme.celadonBlue};
  padding: ${remCalc(16)};
  border-radius: ${remCalc(5)};
  margin: ${remCalc(20)} auto 0;
  display: block;
  transition: background 0.25s ease-in-out;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.celadonBlue};
    text-decoration: none;
  }
`;

const WaitingListBtn = ({ hashLink }) => {
  return <ButtonItem href={hashLink}>Join the list</ButtonItem>;
};

WaitingListBtn.propTypes = {};

export default WaitingListBtn;
