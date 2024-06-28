import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Button } from '@/components';
import { EMAIL_REGEX } from '@/shared/constants/regularExpressions';

import TextField from './TextField';

const meta = {
  title: 'Text Form/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;

export const Default: StoryFn<typeof meta> = () => {
  const [value, setValue] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <TextField
      label="이름"
      name="userName"
      value={value}
      placeholder="이름을 입력하세요."
      onChange={handleChange}
      onReset={handleReset}
    />
  );
};

export const Disabled: StoryObj<typeof meta> = {
  args: {
    label: '비제어 컴포넌트 비활성화',
    defaultValue: '비활성화 input',
    name: 'disabled',
    disabled: true,
  },
};

export const Readonly: StoryObj<typeof meta> = {
  args: {
    label: '읽기전용',
    name: 'readonly',
    readOnly: true,
  },
};

export const ErrorAndRequired: StoryFn<typeof meta> = () => {
  const [value, setValue] = useState('');
  const [isValid, setValid] = useState(true);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
    setValid(EMAIL_REGEX.test(target.value));
  };

  const handleReset = () => {
    setValue('');
    setValid(true);
  };

  useEffect(() => {
    // 스토리북 예시용 effect
    setValue('boooo@goolgeco.m');
    setValid(false);
  }, []);

  return (
    <TextField
      required
      label="이메일"
      name="userEmail"
      value={value}
      error={!isValid}
      errorText={!isValid ? '이메일 형식을 확인해주세요' : ''}
      placeholder="이메일을 입력하세요"
      onChange={handleChange}
      onReset={handleReset}
    />
  );
};

export const FormattedValue: StoryFn<typeof meta> = () => {
  const [value, setValue] = useState('');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <TextField
      required
      label="휴대폰번호 입력"
      name="phoneNumber"
      value={value}
      type="tel"
      placeholder="휴대폰 번호를 입력하세요"
      maxLength={11}
      onChange={handleChange}
      onReset={handleReset}
    />
  );
};

export const WithUseFormUncotrolledComponent: StoryFn<typeof meta> = () => {
  const [state, setState] = useState({ userId: '' });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ userId: string }>();
  const onSubmit: SubmitHandler<{ userId: string }> = data => {
    setState(data);
  };

  return (
    <>
      <p>submit value: {JSON.stringify(state)}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          defaultValue=""
          label="비제어 컴포넌트"
          placeholder="useForm을 이용한 비제어 컴포넌트"
          error={!!errors.userId}
          {...register('userId', {
            required: true,
          })}
        />
        <Button type="submit">제출</Button>
      </form>
    </>
  );
};
