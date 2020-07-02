import parse from 'html-react-parser';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const PrivacyContainer = styled(Container)``;

const Privacy = () => {
  return (
    <PrivacyContainer>
      <h1>Privacy policy</h1>
      <p>Privacy details</p>
    </PrivacyContainer>
  );
};

export async function getStaticProps() {
  return {
    props: {
      pageClass: 'privacy',
    },
  };
}

export default Privacy;
