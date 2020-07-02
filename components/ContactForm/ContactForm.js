import { useState } from 'react';
import styled, { css } from 'styled-components';
import remCalc from '../../utils/rem-calc';
import axios from 'axios';

const errorStyle = css`
  background: ${({ theme }) => theme.errorRed};
`;

const successStyle = css`
  background: ${({ theme }) => theme.powderBlue};
`;

const placeholderStyle = css`
  color: ${({ theme }) => theme.abbey};
`;

const SubmitButton = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.prussianBlue};
  border: ${remCalc(1)} solid ${({ theme }) => theme.celadonBlue};
  padding: ${remCalc(8)} ${remCalc(16)};
  border-radius: ${remCalc(5)};
  margin: ${remCalc(12)} 0 0;
  display: block;
  transition: background 0.25s ease-in-out;
  text-align: center;
  font-size: ${remCalc(14)};

  &:hover {
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.celadonBlue};
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
`;

const FormWrapper = styled.form`
  position: relative;

  input,
  textarea {
    border-radius: ${remCalc(4)}
    border: none;
    display: block;
    font-size: ${remCalc(14)};
    line-height: 1.25;
    margin-bottom: ${remCalc(16)};
    padding: ${remCalc(16)};
    width: 100%;

    &:focus {
      border-color: ${({ theme }) => theme.shark};
      outline: none;
    }

    &::-webkit-input-placeholder {
      ${placeholderStyle}
    }

    &:-moz-placeholder {
      ${placeholderStyle}
    }

    &::-moz-placeholder {
      ${placeholderStyle}
    }

    &:-ms-input-placeholder {
      ${placeholderStyle}
    }
  }
`;

const FormGroup = styled.div`
  margin-top: ${remCalc(76)};
`;

const MessageBanner = styled.div`
  ${({ error }) => (error ? errorStyle : successStyle)}
  align-items: center;
  color: ${({ theme }) => theme.shark};
  display: flex;
  height: 100%;
  justify-content: center;
  margin-bottom: ${remCalc(32)};
  width: 100%;

  p {
    font-size: ${remCalc(14)};
    margin-bottom: 0;
    padding: ${remCalc(8)};
  }

  + ${FormGroup} {
    margin-top: 0;
  }
`;

const ContactForm = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/xjvaabny',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <FormWrapper onSubmit={handleOnSubmit}>
      {status.info.error && (
        <MessageBanner className="message-banner" error>
          <p>Error: {status.info.msg}</p>
        </MessageBanner>
      )}
      {!status.info.error && status.info.msg && (
        <MessageBanner className="message-banner">
          <p>{status.info.msg}</p>
        </MessageBanner>
      )}

      <FormGroup>
        <label htmlFor="name" className="sr-only">
          Your name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleOnChange}
          required
          value={inputs.name}
          placeholder="Your name"
        />

        <label htmlFor="email" className="sr-only">
          Your email
        </label>
        <input
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          placeholder="Your email"
        />
      </FormGroup>

      <SubmitButton type="submit" disabled={status.submitting} className="btn">
        {!status.submitting
          ? !status.submitted
            ? 'Join'
            : 'Joined'
          : 'Joining...'}
      </SubmitButton>
    </FormWrapper>
  );
};

export default ContactForm;
