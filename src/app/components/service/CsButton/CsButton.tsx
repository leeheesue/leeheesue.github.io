import Link from 'next/link';

import { COLORS } from '@/shared/constants';
import { styled } from '@/shared/utils/styles';

interface ButtonProps {
  items: { text: string; link: string }[];
}

const CsButton = ({ items }: ButtonProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <ButtonContainer className="links">
      {items.map(({ link, text }) => (
        <Link key={text} href={link}>
          {text}
        </Link>
      ))}
    </ButtonContainer>
  );
};

export default CsButton;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid ${COLORS.gray400};
  border-radius: 1.6rem;

  a {
    position: relative;
    flex-grow: 1;
    width: calc(100% / 3);
    height: 4.6rem;
    line-height: 4.6rem;
    text-align: center;
    font-size: 1.4rem;
    color: ${COLORS.gray900};

    + a {
      &::before {
        content: '';
        position: absolute;
        top: 1.3rem;
        left: 0;
        width: 0.1rem;
        height: 2rem;
        background-color: ${COLORS.gray500};
      }
    }
  }
`;
