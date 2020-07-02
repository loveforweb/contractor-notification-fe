import styled from 'styled-components';
import Navigation from '../Navigation';
import Logo from '../Logo';
import { breakpoint } from '../../utils/breakpoint';

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.white};
  padding: 0;
  width: 100%;
  position: fixed;
  z-index: 2;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  ${breakpoint.sm`
    margin: 0 auto;
    max-width: 71.25rem;
  `}
`;

const Header = ({ page }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo isMain />
        <Navigation page={page} />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
