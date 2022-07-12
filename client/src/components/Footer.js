import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <span>
        created by <span> </span>
        <a href='https://github.com/Jeremy-Polanco'>Jeremy-Polanco</a>
      </span>
      <span> devChallenges.io</span>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: absolute;
  bottom: -24px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 17px;
  color: #a9a9a9;
  a {
    font-weight: 700;
    text-decoration: none;
    text-decoration: underline;
    color: inherit;
  }
  @media screen and (max-width: 450px) {
    left: 5px;
  }
`;
export default Footer;
