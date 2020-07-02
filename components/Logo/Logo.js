import Link from 'next/link';
import styled from 'styled-components';
import { breakpoint } from '../../utils/breakpoint';

const LogoContainer = styled.div`
  flex: 1 1 auto;
  margin: ${({ sizing }) => (sizing ? '0 4rem 0 0' : '0')};
  max-width: 210px;
  padding: 1rem;
  width: 210px;

  ${breakpoint.sm`
    margin-right: 0;
`}

  ${breakpoint.md`
    flex: none;
`}
`;

const LogoWrapper = styled.a`
  display: block;
`;

const Logo = ({ isMain }) => {
  const handleClick = (e) => {
    const navItems = [...document.getElementsByClassName('nav-item')];

    navItems.forEach((item) => {
      item.classList.remove('is-active');
    });
  };
  return (
    <LogoContainer sizing={isMain}>
      <Link href="/" passHref>
        <LogoWrapper onClick={handleClick}>
          Logo
          <span className="sr-only">Logo SR</span>
        </LogoWrapper>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
