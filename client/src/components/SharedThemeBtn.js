import styled from 'styled-components';
import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
import { useAppContext } from '../context/appContext';

const SharedThemeBtn = () => {
  const { toggleTheme } = useAppContext();
  return (
    <Wrapper>
      <input
        type='checkbox'
        id='switch'
        className='checkbox'
        onChange={toggleTheme}
      />
      <label htmlFor='switch' className='toggle'>
        <BsFillMoonFill className='theme-icon moon-icon' />
        <BsFillSunFill className='theme-icon' />
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: end;
  position: absolute;
  top: 3.5rem;
  right: 2rem;
  .toggle {
    display: flex;
    width: 45px;
    height: 20px;
    border-radius: 30px;
    border: 1px solid #bdbdbd;
    justify-content: space-between;
    align-items: center;
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ffffff;
      top: 1px;
      left: 1px;
      bottom: 1px;
      transition: all 0.5s;
      margin-bottom: 5px;
      top: 0;
    }
  }
  .theme-icon {
    font-size: 1rem;
  }
  .checkbox:checked + .toggle::after {
    left: 24px;
    background: #252329;
  }

  .checkbox:checked + .toggle {
    background: #fff;
    border-color: #252329;
  }
  .checkbox:checked + .toggle > .moon-icon {
    color: #252329;
  }

  .checkbox {
    display: none;
  }
  @media screen and (max-width: 450px) {
    top: 0;
    right: 0;
  }
`;

export default SharedThemeBtn;
