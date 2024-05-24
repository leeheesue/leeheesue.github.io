import Image from 'next/image';

import CopyToClipboard from 'react-copy-to-clipboard';

import styled from '@emotion/styled';

import { COLORS, BREAK_POINT } from '@/shared/constants';

interface ShareProps {
  shareUrl?: string;
  handleToast: () => void;
}

const Share = ({ shareUrl, handleToast }: ShareProps) => {
  const copyUrl = shareUrl || window.location.href;

  const handleKakao = () => {
    window.Kakao?.Share?.sendScrap({
      requestUrl: copyUrl,
    });
  };

  return (
    <ShareContainer>
      <ShareList>
        <li>
          <button type="button" onClick={handleKakao}>
            <i>
              <Image width={52} height={52} src="/images/shareIcon/kakao.svg" alt="" />
            </i>
            카카오톡
          </button>
        </li>
        <li>
          <CopyToClipboard text={copyUrl} onCopy={handleToast}>
            <button type="button">
              <i>
                <Image width={52} height={52} src="/images/shareIcon/copy.svg" alt="" />
              </i>
              링크 복사하기
            </button>
          </CopyToClipboard>
        </li>
      </ShareList>
    </ShareContainer>
  );
};

export default Share;

const ShareContainer = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${BREAK_POINT.desktop}) {
    justify-content: center;
    margin-top: 1.2rem;
  }

  .copyToast {
    @media (min-width: ${BREAK_POINT.desktop}) {
      max-width: 36.8rem;
    }
  }
`;

const ShareList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding-bottom: 2.8rem;

  button {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${COLORS.gray900};

    i {
      width: 3.6rem;
      height: 3.6rem;
      margin-right: 1.2rem;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (min-width: ${BREAK_POINT.desktop}) {
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
    padding: 0;

    button {
      i {
        width: 5.2rem;
        height: 5.2rem;
      }
    }
  }
`;
