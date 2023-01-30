import axios from 'axios';

const API_KET = 'AIzaSyDa-gMbbF39ZMT1IgirT_dFN53iyjKeiT0';

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KET}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(response.data);
};

export const createUser = async (email, password) => {
  await authenticate('signUp', email, password);
};

export const login = async (email, password) => {
  await authenticate('signInWithPassword', email, password);
};
