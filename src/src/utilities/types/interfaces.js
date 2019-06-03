import { string, number, objectOf, oneOfType, arrayOf, shape } from 'prop-types';


export const IconsPropTypes = {
  style:        objectOf(oneOfType([string, number])),
  className:    string,
  nativeColor:  string,
  width:        oneOfType([string, number]),
  height:       oneOfType([string, number]),
  viewBox:      string,
};


export const ghUserInterface = {
  id:         string,
  login:      string,
  name:       string,
  email:      string,
  location:   string,
  url:        string,
  bio:        string,
  avatarUrl:  string,
};


export const ghUsersListInterface = arrayOf(shape(ghUserInterface));
