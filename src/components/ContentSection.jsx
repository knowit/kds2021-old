import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Seperator from './Seperator';
import styled from '@emotion/styled';
import colors from '../util/colors';
import spacing from '../util/spacing';
import mediaQueries from '../util/mediaQueries';

const StyledSection = styled.div`
  background-color: ${p => p.backgroundColor || colors.blueLighest};
  min-height: ${p => p.minHeight};
  color: ${p => p.color || colors.blueDark};
`;
const StyledInnerSection = styled.div`
  padding: 1rem 2%;
  @media (${mediaQueries.xxlarge}) {
    padding: 0 ${p => p.innerPadding || '20%'};
  }

  @media (${mediaQueries.medium}) {
    padding: 0 ${spacing.large};
  }
`;

const ContentSection = ({
  withTopSeperator,
  withBottomSeperator,
  previousSectionColor,
  nextSectionColor,
  minHeight,
  children,
  innerPadding,
  ...rest
}) => {
  return (
    <Fragment>
      <StyledSection minHeight={minHeight} {...rest}>
        {withTopSeperator && (
          <Seperator
            previousSectionColor={previousSectionColor}
            nextSectionColor={nextSectionColor}
            position="top"
          />
        )}
        <StyledInnerSection minHeight={minHeight} innerPadding={innerPadding}>
          {children}
        </StyledInnerSection>
        {withBottomSeperator && (
          <Seperator
            previousSectionColor={previousSectionColor}
            nextSectionColor={nextSectionColor}
            position="bottom"
          />
        )}
      </StyledSection>
    </Fragment>
  );
};

ContentSection.defaultProps = {
  withTopSeperator: false,
  withBottomSeperator: false,
};

ContentSection.propTypes = {
  withBottomSeperator: PropTypes.bool,
  withTopSeperator: PropTypes.bool,
  previousSectionColor: PropTypes.string,
  nextSectionColor: PropTypes.string,
  minHeight: PropTypes.string,
  innerPadding: PropTypes.string,
};

export default ContentSection;
