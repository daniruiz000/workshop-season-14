import './CreateUser.css';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import React from 'react';
const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formData, setFormData] = React.useState({});

  const onSubmit = (data) => {
    setFormData(data);
  };

  const API_URL = process.env.REACT_APP_API_URL;
  const data = {
    name: formData.name,
    username: formData.username,
    email: formData.email,
    phone: formData.phone,
    website: formData.website,
  };

  const postUserToApi = (url, data) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then();
  };
  React.useEffect(() => postUserToApi(API_URL, data), [formData]);
  return (
    <div className='createUser'>
      <h1 className='createUser__title'>
        <FormattedMessage id='createUserPage.title'></FormattedMessage>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='createUser__form'>
        <div className='createUser__info'>
          <label className='createUser__label'>
            <FormattedMessage id='createUserPage.name'></FormattedMessage>
          </label>
          <div className='createUser__input-info'>
            <input className='createUser__input' data-testid='input-name' type='text' {...register('name', { required: true })}></input>
            {errors?.name && (
              <p className='register-form__error'>
                <FormattedMessage id='createUserPage.required' />
              </p>
            )}
          </div>
        </div>
        <div className='createUser__info'>
          <label className='createUser__label'>
            <FormattedMessage id='createUserPage.username'></FormattedMessage>
          </label>
          <div className='createUser__input-info'>
            <input className='createUser__input' type='text' {...register('username', { required: true })}></input>
            {errors?.username && (
              <p className='register-form__error'>
                <FormattedMessage id='createUserPage.required' />
              </p>
            )}
          </div>
        </div>
        <div className='createUser__info'>
          <label className='createUser__label'>
            <FormattedMessage id='createUserPage.email'></FormattedMessage>
          </label>
          <div className='createUser__input-info'>
            <input className='createUser__input' type='text' {...register('email', { required: true })}></input>
            {errors?.email && (
              <p className='register-form__error'>
                <FormattedMessage id='createUserPage.required' />
              </p>
            )}
          </div>
        </div>
        <div className='createUser__info'>
          <label className='createUser__label'>
            <FormattedMessage id='createUserPage.phone'></FormattedMessage>
          </label>
          <div className='createUser__input-info'>
            <input className='createUser__input' type='text' {...register('phone', { required: true })}></input>
            {errors?.phone && (
              <p className='register-form__error'>
                <FormattedMessage id='createUserPage.required' />
              </p>
            )}
          </div>
        </div>
        <div className='createUser__info'>
          <label className='createUser__label'>
            <FormattedMessage id='createUserPage.website'></FormattedMessage>
          </label>
          <div className='createUser__input-info'>
            <input className='createUser__input' type='text' {...register('website', { required: true })}></input>
            {errors?.website && (
              <p className='register-form__error'>
                <FormattedMessage id='createUserPage.required' />
              </p>
            )}
          </div>
        </div>
        <button type='submit' className='register-form__button'>
          <FormattedMessage id='createUserPage.submitButton'></FormattedMessage>
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
