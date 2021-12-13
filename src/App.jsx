import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIL_ID } from './constants';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [local, setLocal] = useLocalStorage('mail');
  const [validate, setvalidate] = useState(MAIL_ID);

  useEffect(() => {
    inputRef.current.focus();
    if (local === MAIL_ID) navigate('Home');
  }, [local]);

  const handleEmail = e => {
    let value = e.target.value;
    setEmail(value);
    if (value.length === 0) {
      setErrorMsg('Please enter your email');
    } else if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
      setErrorMsg('Please enter valid email');
    } else if (validate != value) {
      setErrorMsg('Invalid email');
    } else {
      setErrorMsg('');
    }
  };

  const handleFormSubmit = () => {
    setLocal(email);
    navigate('Home');
  };

  return (
    <form>
      <div className='flex h-screen items-center justify-center '>
        <div className='grid gap-4 w-80 '>
          <TextField id='outlined-textarea' inputRef={inputRef} helperText={errorMsg} error={errorMsg ? true : false} type='email' validation='email' label='Email' onChange={handleEmail} />
          <Button variant='contained' type='submit' disabled={!email || errorMsg ? true : false} onClick={handleFormSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default App;
