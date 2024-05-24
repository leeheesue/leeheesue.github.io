import React, { ComponentPropsWithoutRef, useState, forwardRef } from 'react';

import styled from '@emotion/styled';

import { COLORS } from '@/shared/constants';

import ToggleIcon from './ToggleIcon';
import { textStyle } from './utils';

interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  labelID: string;
  options: { value: string; label: string }[];
  defaultOption: string;
  label?: string;
  required?: boolean;
  error?: boolean;
  errorText?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      labelID,
      options,
      defaultOption,
      label,
      required = false,
      error,
      errorText,
      onBlur,
      ...props
    }: SelectProps,
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = (event: React.FocusEvent<HTMLSelectElement, Element>) => {
      onBlur?.(event);
      setIsFocused(false);
    };

    return (
      <SelectContainer className={error ? 'error' : ''}>
        {label && (
          <label htmlFor={labelID}>
            {label}
            {required && <i>*</i>}
          </label>
        )}

        <SelectBox>
          <select
            ref={ref}
            id={labelID}
            defaultValue=""
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
            required={required}
          >
            <option value="" disabled>
              {defaultOption}
            </option>
            {options.map(({ value, label: optionLabel }) => {
              return (
                <option value={value} key={value}>
                  {optionLabel}
                </option>
              );
            })}
          </select>
          <ToggleIcon open={isFocused} />
        </SelectBox>

        {error && errorText && <p className="errorText">{errorText}</p>}
      </SelectContainer>
    );
  }
);
export default Select;

const SelectContainer = styled.div`
  width: 100%;

  &.error {
    select {
      border-color: ${COLORS.red500};

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
      color: ${COLORS.red500};
      font-style: normal;
    }
  }

  .errorText {
    margin-top: 0.8rem;
    font-size: 1.3rem;
    color: ${COLORS.red500};
  }
`;

const SelectBox = styled.div`
  position: relative;
  display: flex;

  select {
    width: 100%;
    height: 4.8rem;
    padding: 0 4rem 0 1.6rem;
    border-radius: 1.6rem;
    border: 0.1rem solid ${COLORS.gray500};
    appearance: none;
    background-color: ${COLORS.gray0};
    ${textStyle}

    &:focus {
      border: 0.1rem solid ${COLORS.gray800};
      outline: none;
    }

    &:invalid {
      color: ${COLORS.gray700};
    }

    &:valid {
      color: ${COLORS.gray900};
    }

    option {
      color: ${COLORS.gray900};
    }
  }

  i {
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
  }
`;
