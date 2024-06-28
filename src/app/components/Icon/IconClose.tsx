export const IconClose = ({ size = 34, color = '#333' }: { size?: number; color?: string }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" fill="none">
      <path
        d="M9.09348 25L17 17.047L9 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.9065 25L17 17.047L25 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const IconCloseRound = ({
  size = 24,
  roundBG = '#DDD',
}: {
  size?: number;
  roundBG?: string;
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 25" fill="none">
      <path
        d="M22 12.9116C22 18.4345 17.5228 22.9116 12 22.9116C6.47715 22.9116 2 18.4345 2 12.9116C2 7.38877 6.47715 2.91162 12 2.91162C17.5228 2.91162 22 7.38877 22 12.9116Z"
        fill={roundBG}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.11768 9.05216C8.3367 8.83184 8.69285 8.83079 8.91317 9.04981L15.8796 15.975C16.0999 16.1941 16.1009 16.5502 15.8819 16.7705C15.6629 16.9908 15.3068 16.9919 15.0864 16.7729L8.12003 9.84765C7.89971 9.62864 7.89866 9.27248 8.11768 9.05216Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8823 9.05216C15.6633 8.83184 15.3072 8.83079 15.0868 9.04981L8.12043 15.975C7.90012 16.1941 7.89906 16.5502 8.11808 16.7705C8.3371 16.9908 8.69325 16.9919 8.91357 16.7729L15.88 9.84765C16.1003 9.62864 16.1013 9.27248 15.8823 9.05216Z"
        fill="white"
      />
    </svg>
  );
};
