import styled, { ThemeProvider } from 'styled-components';
import { useAppContext } from '../context/appContext';
import devchallengesLight from '../assets/devchallenges-light.svg';
import devchallenges from '../assets/devchallenges.svg';
import { loginLinks } from '../utils/login-links';
import FormRow from './FormRow';
import Footer from './Footer';
import SharedThemeBtn from './SharedThemeBtn';
import Alert from './Alert';

const darkTheme = {
  main: '#252329',
  color: '#E0E0E0',
};

const currentUser = {
  email: '',
  password: '',
};

const Card = () => {
  const {
    theme,
    isMember,
    toggleIsMember,
    showAlert,
    displayAlert,
    setupUser,
  } = useAppContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    currentUser[name] = value;
    console.log(currentUser);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = currentUser;

    if (!email || !password) {
      displayAlert();
      return;
    }

    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login Successful! Redirecting...',
      });
    } else {
      setupUser({
        currentUser,
        endPoint: 'Register',
        alertText: 'Register Successful! Redirecting...',
      });
    }
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : {}}>
      <Wrapper className='form' onSubmit={onSubmit}>
        <SharedThemeBtn />
        <img
          src={theme === 'dark' ? devchallengesLight : devchallenges}
          alt='devChallenges'
          className='logo'
        />
        {isMember ? (
          <h5>login</h5>
        ) : (
          <>
            <h5>Join thousands of learners from around the world</h5>
            <p className='description'>
              Master web development by making real-life projects. There are
              multiple paths for you to choose
            </p>
          </>
        )}
        {showAlert && <Alert />}
        <FormRow type='email' name='email' onChange={handleChange}></FormRow>
        <FormRow
          type='password'
          name='password'
          onChange={handleChange}
        ></FormRow>
        <button className='btn btn-block'>Start coding now</button>
        <p className='text-center'>or continue with these social profile</p>
        <div className='container'>
          {loginLinks.map((link) => {
            const { id, src, alt } = link;
            return <img src={src} alt={alt} key={id} className='img' />;
          })}
        </div>
        {isMember ? (
          <p className='text-center'>
            Don't have an account yet? <span> </span>
            <span className='member' onClick={toggleIsMember}>
              Register
            </span>
          </p>
        ) : (
          <p className='text-center'>
            already a member? <span> </span>
            <span className='member' onClick={toggleIsMember}>
              Login
            </span>
          </p>
        )}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.form`
  background: ${(props) => props.theme.main};
  position: relative;
  padding: 53px 58px 18px;
  max-width: var(--fixed-width);
  min-height: 550px;
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  color: ${(props) => (props.theme ? props.theme.color : '#828282')};
  .text-center {
    text-align: center;
    color: ${(props) =>
      props.theme === darkTheme ? props.theme.color : '#828282'};
  }
  .container {
    width: 100%;
    max-width: 224px;
    height: 42px;
    display: flex;
    justify-content: space-around;
    .img {
      width: auto;
      cursor: pointer;
    }
  }
  .member {
    color: var(--primary-400);
    cursor: pointer;
  }
  .description {
    max-width: 37ch;
    line-height: 22px;
  }
  h5 {
    max-width: 318px;
    font-weight: 600;
  }
  @media screen and (max-width: 450px) {
    border: none;
    box-shadow: none;
    min-height: auto;
    display: block;
    min-width: 260px;
    padding: 0 18px;
    .form {
      margin: 0;
    }
  }
`;

export default Card;
