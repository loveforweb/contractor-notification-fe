import { useEffect } from 'react';
import MetaHead from '../components/MetaHead';
import AOS from 'aos';
import Hero from '../components/Hero';
import WhatIsTheApp from '../components/Sections/WhatIsTheApp';
import HowDoesItWork from '../components/Sections/HowDoesItWork';
import WhyJoin from '../components/Sections/WhyJoin';
import JoinTheList from '../components/Sections/JoinTheList';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <MetaHead
        title="THEAPP - Notify your contacts in on your status"
        desc="Let your contacts know when your available to take on your next contract"
      />
      <Hero />
      <WhatIsTheApp />
      <HowDoesItWork />
      <WhyJoin />
      <JoinTheList />
    </>
  );
};

export default Home;
