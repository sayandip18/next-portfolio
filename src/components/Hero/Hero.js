import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World! <br/> I'm Sayandip Halder
      </SectionTitle>
      <SectionText>
        I am a self-taught software developer who loves building web apps and contributing to open source.
      </SectionText>
      <Button onClick={() => {window.location='https://www.dropbox.com/s/ybykyij2xth74go/Resume.pdf?dl=0'}} >View my Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;