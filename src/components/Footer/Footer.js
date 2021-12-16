import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:6290948673">314-343-3432</LinkItem>
        </LinkColumn> */}
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sayandiph4@gmail.com">
            sayandiph4@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Programming is the art of telling another human <br/> being what one wants the computer to do <br/> - Donald Ervin Knuth</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/sayandip18">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/sayandip-halder">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
