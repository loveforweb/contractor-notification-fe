import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { breakpoint } from '../../utils/breakpoint';
import WaitingListBtn from '../WaitingListBtn';
import remCalc from '../../utils/rem-calc';

const HeroWrapper = styled.section`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100vh;
  justify-content: center;
  background: ${({ theme }) => theme.seashell};
`;

const ContainerWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.shark};
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.4;
  margin: 0 1rem;
  text-align: center;

  span {
    color: ${({ theme }) => theme.celadonBlue};
  }

  ${breakpoint.md`
    font-size: 2.8rem;
  `}
`;

const Subtitle = styled.span`
  color: ${({ theme }) => theme.shark};
  display: block;
  font-size: ${remCalc(16)};
  font-weight: 400;
  margin-top: 2rem;
  text-align: center;
`;

const Hero = ({ headline, subheading }) => {
  return (
    <HeroWrapper>
      <ContainerWrapper>
        <Container>
          <Row>
            <Col>
              <Heading>
                Welcome to <span>THEAPP</span>.
              </Heading>
              <Subtitle>
                Notify your contacts when your ready for your next challenge
              </Subtitle>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={6} sm="auto">
              <WaitingListBtn hashLink="/#JoinTheList" />
            </Col>
          </Row>
        </Container>
      </ContainerWrapper>
    </HeroWrapper>
  );
};

export default Hero;
