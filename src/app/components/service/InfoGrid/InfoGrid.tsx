import { COLORS } from '@/shared/constants/colors';
import { styled } from '@/shared/utils/styles';

type InfoGridProps = React.ComponentPropsWithoutRef<'div'> & {
  title: string;
  data: string | number;
};

const InfoGrid = ({ title, data, className }: InfoGridProps) => {
  return (
    <InfoGridContainer className={className || ''}>
      <span className="itemWrapper">
        <span className="itemTitle">{title}</span>
        <span className="itemData">{data}</span>
      </span>
    </InfoGridContainer>
  );
};

export default InfoGrid;

const InfoGridContainer = styled.div`
  .item {
    &Wrapper {
      display: flex;
      font-size: 1.6rem;
      word-break: break-word;
    }

    &Title {
      flex-shrink: 0;
      margin-right: 1.2rem;
      color: ${COLORS.gray800};
    }

    &Data {
      color: ${COLORS.gray900};
    }
  }
`;
