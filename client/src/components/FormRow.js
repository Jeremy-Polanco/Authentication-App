import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';

const FormRow = ({ type, name, value, onChange }) => {
  return (
    <div className='form-row'>
      {type === 'email' ? (
        <span className='icon'>
          <MdEmail />
        </span>
      ) : (
        <span className='icon'>
          <AiFillLock />
        </span>
      )}
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={type}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;
