import { Card, Loading } from '../components';
import styled, { ThemeProvider } from 'styled-components';
import { useAppContext } from '../context/appContext';

const darkTheme = {
  main: '#252329',
};

const Login = () => {
  const { theme, isLoading } = useAppContext();
  if (theme !== 'light') {
    document.body.style.backgroundColor = darkTheme.main;
  } else {
    document.body.style.backgroundColor = '#fff';
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : {}}>
      <Wrapper className='page page-center'>
        {isLoading ? <Loading /> : <Card />}
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.main`
  background: ${(props) => props.theme.main};
  @media screen and (max-width: 450px) {
    padding: 0;
  }
  min-height: 43rem;
  height: 100vh;
`;

export default Login;
