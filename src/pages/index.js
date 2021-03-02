import React from 'react';
import styled from '@emotion/styled';
import { eventData } from '../json';
import Content from '../components/Content';
import Paragraph from '../components/Paragraph';
import CodeOfConduct from '../components/CodeOfConduct';
import Layout from '../layouts';
import colors from '../util/colors';
import ContentSection from '../components/ContentSection';
import spacing from '../util/spacing';
import mediaQueries from '../util/mediaQueries';
import NextUp from '../components/NextUp';
import OnlineLogo from '../components/Icons/OnlineLogo';

const StyledLogoContainer = styled.div`
  text-align: center;
  margin-top: ${spacing.large};
  @media (${mediaQueries.medium}) {
    margin-top: ${spacing.large};
  }
`;

const Frontpage = () => (
  <Layout>
    <Content>
      <ContentSection backgroundColor={colors.blueDark} color="white">
        <StyledLogoContainer>
          <OnlineLogo />
          <Paragraph color="white">
            {eventData.startDate}, {eventData.year}
          </Paragraph>
        </StyledLogoContainer>
      </ContentSection>
      <ContentSection
        previousSectionColor={colors.blueDark}
        withTopSeperator
        minHeight="0">
        <h1>
          Fagseminar {eventData.season.longCapitalized} {eventData.year}
        </h1>
        <Paragraph>
          <h3>På grunn av Coronavirus-utbruddet holder vi dette fagseminaret online!</h3><br/><br/>
          {`Knowit Developer Summit is an internal conference organized once a year and includes all the Knowit companies.`}
        </Paragraph>
        <Paragraph>
          {`Earlier it has been held in ${eventData.cities.join(', ')} etc.`}
        </Paragraph>
        <CodeOfConduct />
      </ContentSection>
      <ContentSection withBottomSeperator>
        <NextUp />
      </ContentSection>
    </Content>
  </Layout>
);

export default Frontpage;
