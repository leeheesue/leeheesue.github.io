import styled from '@emotion/styled';

export const Footer = styled.footer`
  .desktopFooter {
    display: none;
    @media (min-width: 1024px) {
      display: block;
    }
  }

  .mobileFooter {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;
