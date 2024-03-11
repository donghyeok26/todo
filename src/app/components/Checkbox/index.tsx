import styled from 'styled-components';
import React from 'react';

const Circle = styled.div<{ checked?: boolean }>`
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  border: 2px solid ${props => (props.checked ? 'red' : '#eee')};
  padding: 3px;

  & > .Checkbox-icon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: red;
  }
`;

export default function Checkbox({
  checked,
  onClick,
}: {
  checked?: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      <Circle checked={checked} onClick={onClick}>
        {checked ? <div className="Checkbox-icon" /> : null}
      </Circle>
    </>
  );
}
