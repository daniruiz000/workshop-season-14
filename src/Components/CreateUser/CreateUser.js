import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import React from 'react';
const CreateUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = React.useState({});

  const onSubmit = (data) => {
    setFormData(data);
  };

  const API_URL = process.env.REACT_APP_APIURL;
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
    <div>
      <h1>
        <FormattedMessage id="createUserPage.title"></FormattedMessage>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <FormattedMessage id="createUserPage.name"></FormattedMessage>
        </label>
        <input type="text" {...register('name', { required: true })}></input>
        {errors?.lastName && (
          <p className="register-form__error">
            <FormattedMessage id="createUserPage.required" />
          </p>
        )}
        <label>
          <FormattedMessage id="createUserPage.username"></FormattedMessage>
        </label>
        <input type="text" {...register('username', { required: true })}></input>
        {errors?.username && (
          <p className="register-form__error">
            <FormattedMessage id="createUserPage.required" />
          </p>
        )}
        <label>
          <FormattedMessage id="createUserPage.email"></FormattedMessage>
        </label>
        <input type="text" {...register('email', { required: true })}></input>
        {errors?.email && (
          <p className="register-form__error">
            <FormattedMessage id="createUserPage.required" />
          </p>
        )}
        <label>
          <FormattedMessage id="createUserPage.phone"></FormattedMessage>
        </label>
        <input type="text" {...register('phone', { required: true })}></input>
        {errors?.phone && (
          <p className="register-form__error">
            <FormattedMessage id="createUserPage.required" />
          </p>
        )}
        <label>
          <FormattedMessage id="createUserPage.website"></FormattedMessage>
        </label>
        <input type="text" {...register('website', { required: true })}></input>
        {errors?.website && (
          <p className="register-form__error">
            <FormattedMessage id="createUserPage.required" />
          </p>
        )}
        <button type="submit">
          <FormattedMessage id="createUserPage.submitButton"></FormattedMessage>
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
