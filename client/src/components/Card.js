import styled from 'styled-components';
import devchallengesLight from '../assets/devchallenges-light.svg';
import devchallenges from '../assets/devchallenges.svg';
import google from '../assets/Google.svg';
import facebook from '../assets/Facebook.svg';
import gitHub from '../assets/Gihub.svg';
import twitter from '../assets/Twitter.svg';
import FormRow from './FormRow';
import Footer from './Footer';

const Card = ({ initialState }) => {
  const { email, password, isMember } = initialState;
  return (
    <Wrapper className='form'>
      <img src={devchallenges} alt='devChallenges' className='logo' />
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
          Don't have an account yet? <a href='#'>Register</a>
        </p>
      ) : (
        <p className='text-center'>
          already a member? <a href='#'> Login</a>
        </p>
      )}
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  padding: 60px;
  max-width: var(--fixed-width);
  max-height: 635px;
  min-height: 550px;
  border: 1px solid #bdbdbd;
  border-radius: 24px;
  .text-center {
    text-align: center;
    color: #828282;
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
  a {
    color: var(--primary-400);
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
    padding: 18px;
    .form {
      margin: 0;
    }
  }
`;

export default Card;
