import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../ContactForm';

const WhyJoinSection = styled.section`
  color: ${({ theme }) => theme.shark};
  padding: 3rem 0;
`;

const WhyJoin = () => {
  return (
    <WhyJoinSection id="WhyJoin">
      <Container>
        <article>
          <Row>
            <Col>
              <h2>Why Join</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                soluta voluptatum quibusdam quae repellat quaerat delectus
                recusandae perferendis laudantium ex eveniet, nobis, ad, dolorum
                magnam expedita? Veniam a quos quo.
              </p>
            </Col>
            <Col sm={4}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                soluta voluptatum quibusdam quae repellat quaerat delectus
                recusandae perferendis laudantium ex eveniet, nobis, ad, dolorum
                magnam expedita? Veniam a quos quo.
              </p>
            </Col>
            <Col sm={4}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                soluta voluptatum quibusdam quae repellat quaerat delectus
                recusandae perferendis laudantium ex eveniet, nobis, ad, dolorum
                magnam expedita? Veniam a quos quo.
              </p>
            </Col>
          </Row>
        </article>
      </Container>
    </WhyJoinSection>
  );
};

export default WhyJoin;
