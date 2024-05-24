import { useState, forwardRef } from 'react';

import styled from '@emotion/styled';

import { formatNumber, pixelToRem } from '@/shared/utils';

interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  name: string;
  height: number;
  width?: number;
  defaultValue?: string;
  label?: string;
  labelID?: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  error?: boolean;
  errorText?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface ControlledTextareaProps extends TextareaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps | ControlledTextareaProps>(
  (
    {
      name,
      height,
      width,
      defaultValue,
      label,
      labelID,
      required,
      placeholder,
      maxLength,
      error,
      errorText,
      onChange,
      ...props
    },
    ref
  ) => {
    const [inputCount, setInputCount] = useState(defaultValue ? defaultValue.length : 0);

    const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInputCount(e.target.value.length);
      if (onChange) {
        onChange(e);
      }
    };

    return (
      <TextareaContainer
        width={width ? pixelToRem(width) : '100%'}
        height={height}
        className={error ? 'error' : ''}
      >
        {label && (
          <label htmlFor={labelID}>
            {label}
            {required && <i>*</i>}
          </label>
        )}

        <div className="inner">
          <TextareaStyled
            ref={ref}
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
            defaultValue={defaultValue}
            onChange={onInputHandler}
            id={labelID}
            {...props}
          />

          {maxLength && (
            <span className="count">
              <span>{formatNumber(inputCount)}</span>
              <span>{formatNumber(maxLength)}</span>
            </span>
          )}
        </div>

        {error && errorText && <p className="errorText">{errorText}</p>}
      </TextareaContainer>
    );
  }
);

export default Textarea;

const TextareaContainer = styled.div<{ height: number; width: string }>`
  position: relative;
  overflow: hidden;
  overflow-y: auto;

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

  .inner {
    position: relative;
    width: ${props => props.width};
    height: ${props => `${props.height}px`};
    font-size: 0;
    border-radius: 1.6rem;
    border: 0.1rem solid var(--color-gray-500);
    background: var(--color-white);
  }

  .count {
    position: absolute;
    bottom: 1.2rem;
    right: 1.2rem;
    font-size: 1.3rem;
    color: var(--color-gray-700);

    span {
      &:first-child {
        &::after {
          content: '/';
          display: inline-block;
          margin: 0 0.3rem;
        }
      }
    }
  }

  .errorText {
    margin-top: 0.8rem;
    font-size: 1.3rem;
    color: var(--color-red-500);
  }

  &.error {
    .inner {
      border-color: var(--color-red-500);
    }
  }
`;

const TextareaStyled = styled.textarea`
  position: relative;
  font-size: 1.6rem;
  line-height: 1.5;
  box-sizing: border-box;
  resize: none;
  scrollbar-width: none;
  width: 100%;
  height: calc(100% - 3.2rem);
  padding: 1.2rem 1.6rem;
  border-radius: 1.6rem;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 1.6rem;
  }
`;
