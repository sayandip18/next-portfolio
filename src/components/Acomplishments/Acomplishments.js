import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: '42', text: 'Open Source Projects'},
  { number: '100+', text: 'Problems in Leetcode', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>{data.map((card, index) => (
      <Box key="index">
        <BoxNum>{card.number}</BoxNum>
        <BoxText>{card.text}</BoxText>
      </Box>
    ))}</Boxes>
  </Section>
);

export default Acomplishments;
