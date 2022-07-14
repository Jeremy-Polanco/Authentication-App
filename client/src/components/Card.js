import styled, { ThemeProvider } from 'styled-components';
import { useAppContext } from '../context/appContext';
import devchallengesLight from '../assets/devchallenges-light.svg';
import devchallenges from '../assets/devchallenges.svg';
import google from '../assets/Google.svg';
import facebook from '../assets/Facebook.svg';
import gitHub from '../assets/Gihub.svg';
import twitter from '../assets/Twitter.svg';
import FormRow from './FormRow';
import Footer from './Footer';
import SharedThemeBtn from './SharedThemeBtn';

const darkTheme = {
  main: '#252329',
  color: '#E0E0E0',
};

const Card = () => {
  const { theme, isMember, toggleIsMember } = useAppContext();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : {}}>
      <Wrapper className='form'>
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
        <FormRow type='email' name='email'></FormRow>
        <FormRow type='password' name='password'></FormRow>
        <button className='btn btn-block'>Start coding now</button>
        <p className='text-center'>or continue with these social profile</p>
        <div className='container'>
          <img src={google} alt='google' className='img' />
          <img src={facebook} alt='facebook' className='img' />
          <img src={gitHub} alt='gitHub' className='img' />
          <img src={twitter} alt='twitter' className='img' />
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

const Wrapper = styled.section`
  background: ${(props) => props.theme.main};
  position: relative;
  padding: 60px;
  max-width: var(--fixed-width);
  max-height: 635px;
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
