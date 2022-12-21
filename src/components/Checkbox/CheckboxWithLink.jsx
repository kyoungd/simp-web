import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? 'salmon' : 'papayawhip')};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

const Link = styled.a`
  margin-left: 8px;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`;

const CheckboxWithLink = ({ linkText, ...props }) => (
  <label>
    <Checkbox {...props} />
    <Link href="#">{linkText}</Link>
  </label>
);

Checkbox.propTypes = {
    className: PropTypes.string,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func
};
  
Checkbox.defaultProps = {
    className: '',
    onChange: () => {}
};
  
CheckboxWithLink.propTypes = {
    linkText: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func
};
  
CheckboxWithLink.defaultProps = {
    checked: false,
    onChange: () => {},
    onClick: () => {}
};
  
export default CheckboxWithLink;


{/* <CheckboxWithLink
checked={isChecked}
onChange={event => setIsChecked(event.target.checked)}
linkText="Click me"
onClick={() => console.log('Link was clicked')}
/> */}
