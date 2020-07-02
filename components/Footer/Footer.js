import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import Link from 'next/link';
import { breakpoint } from '../../utils/breakpoint';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import remCalc from '../../utils/rem-calc';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  padding: ${remCalc(16)};
`;

const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: ${remCalc(20)};

  ${breakpoint.sm`
    flex-direction: row;
  `}

  a {
    display: block;
    margin: ${remCalc(8)} 0;

    ${breakpoint.sm`
      padding: ${remCalc(6)};
      margin: 0 ${remCalc(6)};
    `}
  }

  > li {
    display: flex;

    ${breakpoint.sm`

      &:first-child {
        a {
          padding-left: 0;
        }
      }
  
      &:last-child {
        a {
          padding-right: 0;
        }
      }
    `}
  }
`;

const SocialLinksList = styled.ul`
  display: flex;
  margin-bottom: ${remCalc(20)};

  ${breakpoint.sm`
    justify-content: flex-end;
    margin-bottom: 0;
  `}

  a {
    font-size: ${remCalc(20)};

    ${breakpoint.sm`
      padding: ${remCalc(12)};
    `}
  }

  > li {
    margin: 0 1rem 0 0;
    ${breakpoint.sm`
    margin: 0;

      &:first-child {
        a {
          padding-left: 0;
        }
      }

      &:last-child {
        a {
          padding-right: 0;
        }
      }
    `}
  }
`;

const Copy = styled.p`
  font-size: 0.875rem;

  ${breakpoint.md`
    font-size: 0.75rem;
  `}
`;

const FooterContainer = styled.div`
  a {
    color: ${({ theme }) => theme.white};
  }

  ${breakpoint.sm`
    margin: 0 auto;
    max-width: 71.25rem;
    padding: 0 1rem;
  `}
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Row>
          <Col sm={9}>
            <FooterLinksList>
              <li>
                <Link passHref href="/terms-and-conditions">
                  <a>Terms &amp; Conditions</a>
                </Link>
              </li>
              <li>
                <Link passHref href="/privacy">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <a href="mailto:press@theapp.app">Press</a>
              </li>
              <li>
                <a href="mailto:contact@theapp.app">Contact</a>
              </li>
            </FooterLinksList>
          </Col>
          <Col sm={3}>
            <SocialLinksList>
              <li>
                <a target="_blank" href="http://facebook.com/theapp">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a target="_blank" href="http://instagram.com/theapp">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a target="_blank" href="http://www.twitter.com/theapp">
                  <FaTwitterSquare />
                </a>
              </li>
            </SocialLinksList>
          </Col>
        </Row>
        <Row>
          <Col>
            <Copy>&copy; {new Date().getFullYear()} THEAPP</Copy>
          </Col>
        </Row>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
