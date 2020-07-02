import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../ContactForm';

const JoinTheListSection = styled.section`
  background: ${({ theme }) => theme.melon};
  color: ${({ theme }) => theme.shark};
  padding: 3rem 0;
`;

const JoinTheList = () => {
  return (
    <JoinTheListSection id="JoinTheList">
      <Container>
        <article>
          <Row>
            <Col sm={6}>
              <h2>Join The List</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                soluta voluptatum quibusdam quae repellat quaerat delectus
                recusandae perferendis laudantium ex eveniet, nobis, ad, dolorum
                magnam expedita? Veniam a quos quo.
              </p>
            </Col>
            <Col sm={6}>
              <ContactForm />
            </Col>
          </Row>
        </article>
      </Container>
    </JoinTheListSection>
  );
};

export default JoinTheList;
