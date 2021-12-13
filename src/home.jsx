import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIL_ID } from './constants';
import useLocalStorage from './hooks/useLocalStorage';

const settings = ['Logout'];

const handleOpenNavMenu = event => {
  setAnchorElNav(event.currentTarget);
};

const handleOpenUserMenu = event => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};



function home() {
  const navigate = useNavigate();

  const [local, setLocal] = useLocalStorage('mail');

  useEffect(() => {
    if (!(local === MAIL_ID)) navigate('/');
  }, [local]);

  const handleLogout = () => {
    setLocal(null);
  };

  return (
    <div className='h-screen'>
      <div className='space-y-4 flex p-6 justify-end  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500'>
        <button className='font-bold font-sans text-3xl tracking-wide text-white hover:text-black' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className='flex justify-center mt-6'>
        <input type='file' onclick={}></input>
        <input type='submit'></input>
      </div>
    </div>
  );
}

export default home;
