import styled from '@emotion/styled';

import Button from '@/components/Button/Button';

const RelatedHelpBtns = ({ service }: { service: string }) => {
  return (
    <RelatedHelpBtnContainer>
      <Button
        height={48}
        variant="outline"
        target="_blank"
        url={`https://chat.interpark.com/${service}`}
      >
        톡집사 상담하기
      </Button>
      <Button height={48} variant="outline" url="/tour/inquiry">
        1:1 문의하기
      </Button>
    </RelatedHelpBtnContainer>
  );
};

export default RelatedHelpBtns;

const RelatedHelpBtnContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;
