import Image from 'next/image';

import { ComponentPropsWithoutRef } from 'react';

import { COLORS } from '@/shared/constants';
import { styled } from '@/shared/utils/styles';

interface NoContentProps extends ComponentPropsWithoutRef<'div'> {
  iconImg: string /** search, inquiry, url */;
  title: string;
  subtext: string;
}

const ICON_SOURCE = {
  search: '/images/NoContent/icon_nocontent02.svg',
  inquiry: '/images/NoContent/icon_nocontent01.svg',
} as const;

const NoContent = ({ iconImg, title, subtext, ...props }: NoContentProps) => {
  return (
    <NoContentContainer {...props}>
      <Icon className="iconBox">
        <Image
          width={68}
          height={68}
          src={ICON_SOURCE[iconImg as keyof typeof ICON_SOURCE] ?? iconImg}
          alt=""
        />
      </Icon>
      <dl>
        <dt>{title}</dt>
        <dd>{subtext}</dd>
      </dl>
    </NoContentContainer>
  );
};

export default NoContent;

const NoContentContainer = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  text-align: center;

  dl {
    dt {
      font-weight: 700;
      font-size: 2rem;
      color: ${COLORS.gray900};
    }

    dd {
      margin-top: 0.8rem;
      font-size: 1.4rem;
      color: ${COLORS.gray800};
    }
  }
`;

const Icon = styled.div`
  margin: 0 auto 1.2rem;
  width: 6.8rem;
  height: 6.8rem;
`;
