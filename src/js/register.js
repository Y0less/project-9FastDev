import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { LS_AUTH_KEY, load, save } from './storage';

const refs = {
  userProfileCard: document.querySelector('.user-card-container'),
  regBtn: document.querySelector('.sign-in-up-ig'),
  regForm: document.querySelector('.js-reg-form'),
  backdrop: document.querySelector('.js-sign-up-backdrop'),
  mobUserProfileCard: document.querySelector('.mob-text-container'),
};

refs.regForm.addEventListener('submit', onRegisterFormSubmit);

async function onRegisterFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  const auth = getAuth();
  try {
    const user = await registerUser(auth, email, password);
    await updateUserName(name);
    saveAuthInfo(user, name);
    showUserProfile();
    Notify.success('User successfully registered');
  } catch (error) {
    Notify.failure('Register failed');
  }
}

function showUserProfile() {
  refs.regBtn.style.display = 'none';
  refs.userProfileCard.style.display = 'block';
  refs.userProfileCard.querySelector('.js-user-name').textContent =
    load(LS_AUTH_KEY).name;
  refs.backdrop.style.display = 'none';
  refs.mobUserProfileCard.style.display = 'flex';
}

function showPrivateLinks() {}

function updateUserName(name) {
  const auth = getAuth();
  return updateProfile(auth.currentUser, {
    displayName: name,
  }).catch(error => {
    console.log(error);
  });
}

function registerUser(auth, email, password) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    userCredential => userCredential.user
  );
}

function saveAuthInfo(user, name) {
  const token = user.stsTokenManager.accessToken;
  const email = user.email;
  const authInfo = { token, email, name };
  save(LS_AUTH_KEY, authInfo);
}

export { showPrivateLinks };
