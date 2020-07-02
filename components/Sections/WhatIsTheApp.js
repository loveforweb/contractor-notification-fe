import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WhatIsTheAppSection = styled.section`
  color: ${({ theme }) => theme.shark};
  padding: 3rem 0;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
`;

const WhatIsTheApp = () => {
  return (
    <WhatIsTheAppSection id="WhatIsTheApp">
      <Container>
        <article>
          <Row>
            <Col sm={6}>
              <h2>What is THEAPP</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                soluta voluptatum quibusdam quae repellat quaerat delectus
                recusandae perferendis laudantium ex eveniet, nobis, ad, dolorum
                magnam expedita? Veniam a quos quo.
              </p>
            </Col>
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
                    src="../../images/proto-img-1.png"
                    className="screenshot"
                  />
                </div>
              </ImageWrapper>
            </Col>
          </Row>
        </article>
      </Container>
    </WhatIsTheAppSection>
  );
};

export default WhatIsTheApp;
