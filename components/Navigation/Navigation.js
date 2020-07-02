import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineCloseSquare } from 'react-icons/ai';
import { breakpoint } from '../../utils/breakpoint';
import remCalc from '../../utils/rem-calc';
import Logo from '../Logo';

const ListWrapper = styled.div`
  ${breakpoint.sm`
    background: none;
    height: auto;
    padding: 0;
    position: relative;
    right: auto;
    transform: none;
    width: auto;
  `}
`;

const Nav = styled.nav`
  display: flex;
  z-index: 2;
  background: ${({ theme }) => theme.white};
  height: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  overflow: hidden;
  max-height: 0;
  will-change: height;
  transition: max-height 1s ease-in-out;

  &.is-open {
    max-height: 400px;
    height: auto;

    ${breakpoint.sm`
      max-height: none;
    `}
  }

  ${breakpoint.sm`
    height: auto;
    transition: none;
    position: relative;
    max-height: none;
  `}
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0;

  ${breakpoint.sm`
    flex-direction: row;
    height: 100%;
    margin: 0;
  `}
`;

const LinkItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 1rem;

  ${breakpoint.sm`
    padding: 0;
  `}
`;

const Anchor = styled.a`
  align-items: center;
  color: ${({ theme }) => theme.shark};
  display: flex;
  font-size: ${remCalc(14)};
  padding: 0;
  transition: color 0.2s ease-in-out;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.shark};
  }

  ${breakpoint.sm`
    padding: 0 1rem;

    &.is-open {
      background: ${({ theme }) => theme.shark};
      color: ${({ theme }) => theme.white};
    }
  `}
`;

const MobileToggleButton = styled.button`
  background-color: ${({ theme }) => theme.shark};
  border: 0;
  display: block;
  height: 2.5rem;
  margin: 0.563rem 1rem 0 0;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  width: 3.46rem;

  svg {
    fill: ${({ theme }) => theme.white};
    height: 100%;
    width: 100%;
  }

  ${breakpoint.sm`
    display: none;
  `}
`;

const Navigation = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const urlHash = window.location.hash.replace('#', '');
    const activeElm = document.querySelector('.nav-item.is-open');

    if (urlHash) {
      const activeItem = document.querySelector(
        `.nav-item[data-id='${urlHash}']`
      );

      if (activeItem) {
        activeItem.classList.add('is-open');
        return;
      }
    }

    activeElm ? activeElm.classList.remove('is-open') : false;
  });

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleActiveNavItem = (e) => {
    const navItems = [...document.getElementsByClassName('nav-item')];

    navItems.forEach((item) => {
      item.classList.remove('is-open');
    });
    e.target.classList.add('is-open');
  };

  return (
    <>
      <MobileToggleButton
        onClick={handleToggleMenu}
        aria-expanded={isOpen}
        aria-controls="menu"
      >
        <span className="sr-only">Open navigation</span>
        <AiOutlineMenu />
      </MobileToggleButton>
      <Nav className={isOpen ? 'is-open' : ''}>
        {/* // Mobile Navigation toggle */}
        <ListWrapper>
          {/* <TopRow>
            <MobileNavClose onClick={handleToggleMenu}>
              <span className="sr-only">Close navigation</span>
              <AiOutlineCloseSquare />
            </MobileNavClose>
          </TopRow> */}
          <LinkList id="menu">
            <LinkItem>
              <Link href={{ pathname: '/', hash: '#WhatIsTheApp' }} passHref>
                <Anchor
                  data-id="WhatIsTheApp"
                  className="nav-item"
                  onClick={handleActiveNavItem}
                >
                  What is THEAPP
                </Anchor>
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href={{ pathname: '/', hash: '#HowDoesItWork' }} passHref>
                <Anchor
                  data-id="HowDoesItWork"
                  className="nav-item"
                  onClick={handleActiveNavItem}
                >
                  How Does It Work
                </Anchor>
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href={{ pathname: '/', hash: '#WhyJoin' }} passHref>
                <Anchor
                  data-id="WhyJoin"
                  className="nav-item"
                  onClick={handleActiveNavItem}
                >
                  Why Join
                </Anchor>
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href={{ pathname: '/', hash: '#JoinTheList' }} passHref>
                <Anchor
                  data-id="JoinTheList"
                  className="nav-item"
                  onClick={handleActiveNavItem}
                >
                  Join the list
                </Anchor>
              </Link>
            </LinkItem>
          </LinkList>
        </ListWrapper>
      </Nav>
    </>
  );
};

export default Navigation;
