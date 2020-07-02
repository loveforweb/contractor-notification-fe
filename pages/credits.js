import parse from 'html-react-parser';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const CreditsContainer = styled(Container)``;

const Privacy = ({ privacyData }) => {
  return (
    <CreditsContainer>
      <h1>Credits</h1>
    </CreditsContainer>
  );
};

export async function getStaticProps() {
  return {
    props: {
      pageClass: 'credits',
    },
  };
}

export default Privacy;
