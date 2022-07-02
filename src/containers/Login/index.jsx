import React,{ useState } from 'react';
import { Button } from '../../components/Buton';
import { Input } from "../../components/Input";
export const FormLogin = () => {
  const [data, setData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const changeValue = (field) => (value) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  return (
    <form>
      <Input
        name={'email'}
        placeholder={'Email...'}
        value={data.email}
        handleChange={changeValue('email')}
      />
      <Input
        name={'password'}
        placeholder={'********'}
        type={'password'}
        value={data.password}
        handleChange={changeValue('password')}
      />
      <Button text='Submit' handleClick={handleSubmit} />
    </form>
  );
};