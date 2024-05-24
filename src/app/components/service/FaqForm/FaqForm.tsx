/* eslint-disable react/no-danger */

'use client';

import Link from 'next/link';

import Heading from '@/components/Heading/Heading';
import { IconArrow } from '@/components/Icon';
import RelatedHelp from '@/components/service/RelatedHelp/RelatedHelp';
import RelatedHelpBtns from '@/components/service/RelatedHelp/RelatedHelpBtns';
import ShareButton from '@/components/ShareButton/ShareButton';
import { COLORS } from '@/shared/constants/colors';
import { unescapeHtml } from '@/shared/utils';
import { styled } from '@/shared/utils/styles';

type FaqRelatedType =
  | { entityId: number; title: string; onClick?: (entityId: number) => void }[]
  | never[];
interface FaqFormProps {
  service: 'tour' | 'ticket';
  description: string;
  reservationYn: 'Y' | 'N';
  relatedHelp: FaqRelatedType;
  relatedForm: FaqRelatedType;
  shareUrl?: string;
}

const FaqForm = ({
  service,
  description,
  reservationYn,
  relatedHelp,
  relatedForm,
  shareUrl,
}: FaqFormProps) => {
  const isTour = service === 'tour';

  const unescapedHtml = unescapeHtml(description) ?? '';

  return (
    <FaqContent service={service}>
      <article className="description">
        <div dangerouslySetInnerHTML={{ __html: unescapedHtml }} />
      </article>
      {reservationYn === 'Y' && (
        <article>
          <Heading level={3}>관련 내 예약</Heading>
          <Link href={RESERVATION_LINK[isTour ? 'TOUR' : 'TICKET']}>
            내 항공 예약 확인하기
            <IconArrow type="line" color={isTour ? COLORS.blue500 : COLORS.purple500} size={16} />
          </Link>
        </article>
      )}

      {relatedHelp?.length > 0 && (
        <article>
          <Heading level={3}>관련 도움말</Heading>
          <RelatedHelp colorTheme={service} list={relatedHelp} />
        </article>
      )}

      {relatedForm?.length > 0 && (
        <article>
          <Heading level={3}>관련 문의 양식</Heading>
          {relatedForm.map(({ entityId, title, onClick }) => {
            return (
              <button
                key={entityId}
                type="button"
                className="relatedFormButton"
                onClick={() => onClick?.(entityId)}
              >
                {title}
                <IconArrow
                  type="line"
                  color={service === 'tour' ? COLORS.blue500 : COLORS.purple500}
                  size={16}
                />
              </button>
            );
          })}
        </article>
      )}

      <article>
        <Heading level={3}>다른 도움이 필요하세요?</Heading>
        <RelatedHelpBtns service={service} />
      </article>

      <div className="share">
        <ShareButton
          color="gray800"
          label="공유하기"
          size={16}
          shareUrl={shareUrl}
          shareLayerClassName="itemShareLayer"
          portalEnabled={false}
        />
      </div>
    </FaqContent>
  );
};

export default FaqForm;

const FaqContent = styled.div<{ service: 'tour' | 'ticket' }>`
  article {
    padding-bottom: 2rem;

    &.description {
      white-space: pre-line;
    }

    &:not(:first-of-type) {
      padding: 2rem 0;
      border-top: 0.1rem solid ${COLORS.gray400};
    }

    & > a,
    .relatedFormButton {
      display: flex;
      align-items: center;
      color: ${props => (props.service === 'tour' ? COLORS.blue500 : COLORS.purple500)};
      font-size: 1.6rem;

      i {
        margin-left: 0.2rem;
      }
    }
  }

  h3 {
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
  }

  .share {
    display: flex;
    justify-content: right;
    padding: 0.8rem;
  }

  .itemShareLayer {
    margin-top: 3.5rem;
  }
`;

const RESERVATION_LINK = {
  TOUR: '//travel.interpark.com/home/mypage?category=all',
  TICKET:
    'https://ticket.interpark.com/Point/MyTicket/MyTicketMain.asp?&tid1=main_gnb&tid2=right_top&tid3=myticket&tid4=myticket',
};
