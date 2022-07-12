import { Card, Footer } from '../components';
import styled from 'styled-components';

const initialState = {
  email: '',
  password: '',
  isMember: true,
};

const Login = () => {
  return (
    <Wrapper className='page page-center'>
      <Card initialState={initialState} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  @media screen and (max-width: 450px) {
    padding: 0;
  }
`;

export default Login;
