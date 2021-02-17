import React from 'react';

import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <p>
        Modified by{' '}
        <a
					href="https://github.com/CofferHub/reactjs-coffer-boilerplate"
          rel="noopener noreferrer"
          target="_blank"
        >
          Coffer Hub
        </a>
      </p>
    </Container>
  );
}

export const Container = styled.footer`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
