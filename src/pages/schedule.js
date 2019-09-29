import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { isToday } from 'date-fns';
import ButtonGroup from '../components/ButtonGroup';
import Content from '../components/Content';
import ContentSection from '../components/ContentSection';
import Filters from '../components/Filters';
import SafeLink from '../components/SafeLink';
import Slots from '../components/Slot/Slots';
import viewmodel, { eventData } from '../json';
import DefaultLayout from '../layouts';
import colors from '../util/colors';
import mediaQueries from '../util/mediaQueries';
import spacing from '../util/spacing';
import { fetchSlots } from '../graphql/airtable';
import { filterTypes } from '../components/Filters/Filters';

const buttonGroupStyle = numberOfButtons => css`
  margin: ${spacing.large} auto;
  margin-bottom: 0;
  grid-template-columns: 100%;
  grid-template-rows: ${spacing.xlarge};
  grid-template-columns: 25% 25% 25% 25%;
  width: 80%;
  grid-template-rows: auto;

  @media (${mediaQueries.medium}) {
    grid-row-gap: 10px;
    width: 100%;
    grid-template-rows: auto auto;
    grid-template-columns: 50% 50%;
    margin-bottom: ${spacing.normal};
  }
`;

const isActiveStyle = css`
  color: white;
  background-color: ${colors.blueDarkest};
  border-color: ${colors.blueDarkest};
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (${mediaQueries.medium}) {
    display: grid;
    grid-template-columns: 90% 10%;
    grid-template-rows: auto;
    grid-template-areas: 'button arrow';
  }
`;

const StyledLink = styled.a`
  padding: ${spacing.small} ${spacing.normal};
  background-color: ${colors.blue};
  text-decoration: none;
  color: white;
  border: 1px solid ${colors.blue};
  border-radius: 50px;
  text-align: center;
  display: ${p => p.isActive && isActiveStyle};
  &:hover,
  &:focus {
    ${isActiveStyle};
  }
  @media (${mediaQueries.medium}) {
    grid-area: button;
  }
`;

const expandMoreStyle = css`
  margin-top: ${spacing.xsmall};
  color: ${colors.blue};
  visibility: visible;
  align-self: center;
  @media (${mediaQueries.medium}) {
    grid-area: arrow;
    visibility: hidden;
  }
`;

export const getActiveDay = () => {
  const todayDate = viewmodel.days.find(day =>
    isToday(new Date(eventData.year, eventData.monthNumber - 1, day.date)),
  );
  return todayDate || viewmodel.days[0];
};

const SchedulePage = ({ location }) => {
  const StyledSafeLink = StyledLink.withComponent(SafeLink);
  const [activeFilters, setActiveFilters] = useState(
    filterTypes.map(filter => filter.type),
  );
  const dayInUrl = viewmodel.days.find(
    scheduleDay => scheduleDay.date === location.hash.substring(1),
  );
  const activeDay = dayInUrl || getActiveDay();
  if (!activeDay || !activeDay.date) {
    return <span>Her skjedde noe feil gitt...</span>;
  }
  const slots = fetchSlots();
  const onChangeActiveFilters = newFilter => {
    const updatedActiveFilters = activeFilters.includes(newFilter)
      ? activeFilters.filter(filter => filter !== newFilter)
      : [...activeFilters, newFilter];
    setActiveFilters(updatedActiveFilters);
  };

  useEffect(() => {
    setActiveFilters(filterTypes.map(filter => filter.type));
  }, []);

  useEffect(() => {
    setActiveFilters(filterTypes.map(filter => filter.type));
  }, [location]);

  const currenSlots = slots
    .filter(slot => slot.date === activeDay.date)
    .filter(slot =>
      activeFilters.length > 0
        ? activeFilters.includes(slot.type || 'other')
        : true,
    );

  return (
    <DefaultLayout>
      <Content>
        <ContentSection
          minHeight="5vh"
          backgroundColor={colors.blueDark}
          color="white">
          <ButtonGroup
            css={buttonGroupStyle(viewmodel.days.length)}
            numberOfButtons={viewmodel.days.length}>
            {viewmodel.days.map(day => (
              <StyledLinkContainer key={day.label}>
                <StyledSafeLink
                  isActive={activeDay.date === day.date}
                  to={`/schedule#${day.date}`}>
                  {day.label}
                </StyledSafeLink>
                {activeDay.date === day.date && (
                  <ExpandMore css={expandMoreStyle} fontSize="large" />
                )}
              </StyledLinkContainer>
            ))}
          </ButtonGroup>
        </ContentSection>
        <ContentSection minHeight="95vh" withTopSeperator withBottomSeperator>
          <Filters
            activeFilters={activeFilters}
            onChangeActiveFilters={onChangeActiveFilters}
          />
          <Slots activeFilter={activeFilters} slots={currenSlots} />
        </ContentSection>
      </Content>
    </DefaultLayout>
  );
};

export default SchedulePage;