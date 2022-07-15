import { StatusCodes } from 'http-status-codes';
import CustomAPIError from '../errors/index.js';
import User from '../model/User.js';

const register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomAPIError.BadRequestError('Please provide all values');
  }

  const emailAlreadyExist = await User.findOne({ email });

  if (emailAlreadyExist) {
    throw new CustomAPIError.BadRequestError('Email already taken');
  }

  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new CustomAPIError.BadRequestError('Please provide all values');
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new CustomAPIError.UnauthenticatedError('Invalid credentials');
  }

  const passwordMatched = user.comparePassword(password);
  if (!passwordMatched) {
    throw new CustomAPIError.UnauthenticatedError('Invalid credentials');
  }

  res.status(StatusCodes.OK).json({ user });
};

const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'Update User' });
};

export { register, login, updateUser };
