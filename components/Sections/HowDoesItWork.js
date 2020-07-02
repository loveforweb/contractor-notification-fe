import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HowDoesItWorkSection = styled.section`
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.shark};
  padding: 3rem 0;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const HowDoesItWork = () => {
  return (
    <HowDoesItWorkSection id="HowDoesItWork">
      <Container>
        <article>
          <Row>
            <Col sm={6}>
              <ImageWrapper>
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <img
                    src="../../images/proto-img-2.png"
                    className="screenshot"
                  />
                </div>
              </ImageWrapper>
            </Col>
            <Col sm={6}>
              <h2>How Does It Work</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                soluta voluptatum quibusdam quae repellat quaerat delectus
                recusandae perferendis laudantium ex eveniet, nobis, ad, dolorum
                magnam expedita? Veniam a quos quo.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>Add your contacts</Col>
            <Col>Set your availability date</Col>
            <Col>Automate your notification</Col>
          </Row>
        </article>
      </Container>
    </HowDoesItWorkSection>
  );
};

export default HowDoesItWork;
