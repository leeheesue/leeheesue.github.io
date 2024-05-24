import React, { ComponentPropsWithoutRef, forwardRef, useMemo, useRef } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { IconCloseRound } from '@/components/Icon';
import { useForkRef } from '@/shared/hooks';
import { formatPhoneNumber } from '@/shared/utils';

interface TextFieldProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  name: string;
  value?: undefined;
  error?: boolean;
  errorText?: string;
  onReset?: () => void;
}

interface ControlledTextFieldProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  name: string;
  value: string;
  error?: boolean;
  errorText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset?: () => void;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps | ControlledTextFieldProps>(
  (props: TextFieldProps | ControlledTextFieldProps, ref) => {
    const {
      type = 'text',
      value,
      label,
      error,
      errorText,
      maxLength,
      disabled,
      readOnly,
      onReset,
      onChange,
      ...inputAttrs
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const handleRef = useForkRef(ref, inputRef);

    const formattedValue = useMemo(() => {
      // TODO: 포맷팅 값 중간 글자 변경시 커서가 마지막으로 이동하는 문제.
      if (type === 'tel') return formatPhoneNumber(value ?? '');
      return value;
    }, [type, value]);

    const showResetButton = useMemo(() => {
      if (disabled || readOnly) return false;
      return Boolean(onReset) ?? value;
    }, [disabled, readOnly, value, onReset]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value: currentInputValue },
      } = event;

      const validLengthValue = validLength({ value: currentInputValue, maxLength, type });

      if (typeof validLengthValue === 'undefined') return;
      onChange?.({
        ...event,
        target: {
          ...event.target,
          value: validLengthValue,
        },
      });
    };

    const handleReset = () => {
      onReset?.();
      inputRef.current?.focus();
    };

    return (
      <TextFieldContainer className={error ? 'error' : ''}>
        <label htmlFor={inputAttrs.name}>
          {label}
          {inputAttrs.required && <i>*</i>}
        </label>

        <InputContainer>
          <input
            ref={handleRef}
            type={type}
            id={inputAttrs.name}
            value={formattedValue}
            disabled={disabled}
            readOnly={readOnly}
            spellCheck="false"
            onChange={handleChange}
            {...inputAttrs}
          />

          {showResetButton && (
            <BtnReset type="button" onClick={handleReset}>
              <IconCloseRound roundBG="#D9D9D9" size={20} />
            </BtnReset>
          )}
        </InputContainer>
        {error && errorText && <p className="errorText">{errorText}</p>}
      </TextFieldContainer>
    );
  }
);
export default TextField;

// TODO: TextField가 tel 등의 예외로직을 가지고있지 않게 하기.
const VALID_LENGTHS: Record<string, number> = {
  tel: 11,
};

const validLength = ({
  value,
  type,
  maxLength: maxLengthProps,
}: Pick<ControlledTextFieldProps, 'value' | 'type' | 'maxLength'>) => {
  const maxLength = type ? VALID_LENGTHS[type] : maxLengthProps;
  if (!maxLength) return value;

  const hasFormatValue = ['tel'].includes(type || '');
  const targetValue = hasFormatValue ? value.replace(/\D/g, '') : value;

  if (maxLength < targetValue.length) return undefined;
  return targetValue.slice(0, maxLength);
};

const TextFieldContainer = styled.div`
  width: 100%;

  &.error {
    input {
      border-color: var(--color-red-500);

      &:focus {
        outline: none;
      }
    }
  }

  label {
    display: block;
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: bold;

    i {
      margin-left: 0.2rem;
      color: var(--color-red-500);
      font-style: normal;
    }
  }

  .errorText {
    margin-top: 0.8rem;
    font-size: 1.3rem;
    color: var(--color-red-500);
  }
`;

const resetUserAgentBackroundStyle = css`
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px inherit inset;
    -webkit-text-fill-color: inherit;
  }
  &:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;

  input {
    ${resetUserAgentBackroundStyle}
    width: 100%;
    height: 4.8rem;
    line-height: 4.8rem;
    padding: 0 4rem 0 1.6rem;
    font-size: 1.6rem;
    border-radius: 1.6rem;
    border: 0.1rem solid var(--color-gray-500);
    color: var(--color-gray-900);

    &[readonly] {
      cursor: default;
    }

    &:disabled {
      background-color: var(--color-gray-100);
      color: var(--color-gray-800);
    }

    &:focus {
      border: 0.1rem solid var(--color-gray-800);
      outline: none;
    }

    &:not(:placeholder-shown) {
      & ~ button {
        opacity: 1;
      }
    }
  }
`;

const BtnReset = styled.button`
  position: absolute;
  right: 0.8rem;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0.8rem;
  opacity: 0;
`;
