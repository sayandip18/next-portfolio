import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World! <br/> I'm Sayandip Halder
      </SectionTitle>
      <SectionText>
        I am a self-taught software developer who loves building web apps and contributing to open source.
      </SectionText>
      <a href='/SayandipHalderCV.pdf' target="_blank">
        <Button>View my Resume</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;