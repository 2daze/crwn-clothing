import { takeLatest, all, call, put } from 'redux-saga/effects';
import { UserActionTypes } from './ActionTypes';

import { 
  notSignedInFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
  signUpSuccess
} from './UserActions';

import { 
  auth, 
  googleProvider, 
  createUserProfileDocument,
  getCurrentUser } from '../firebase/firebase.utils';

export function* signOut() {
  try {
    yield auth.signOut;
    yield put(signOutSuccess());
  }
  catch(error) {
    console.log(error);
    yield put(signOutFailure(error));
  }
}

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    console.log(error);
    yield put(signInFailure(error));
  }
}

export function* signInAfterSignUp({payload: { user, additionalData }}) {
  console.log("signInAfterSignUp input:")
  console.log(user, additionalData);
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* signInWithGoogle() {
  try {
    console.log("Google Provider:");
    console.log(googleProvider);
    const { user } = yield auth.signInWithPopup(googleProvider);
    console.log(user);
    yield getSnapshotFromUserAuth(user);
  } 
  catch (error) {
    console.log(error);
    yield put(signInFailure(error));
  }
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } 
  catch (error) {
    console.log(error);
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = getCurrentUser();      
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  }
  catch(error) {
    yield put(notSignedInFailure(error))
  }
}

export function* signUpUser(
  {payload:{displayName, email, password}}) {
    try {
      const { user } = yield auth.createUserWithEmailAndPassword(email, password);
      yield put(signUpSuccess({ user, additionlData: { displayName } }));
    } 
    catch (error) {
      console.error(error);
      yield put(signUpFailure(error));
    }
}

export function* onGoogleSignInStart() {
  yield takeLatest(
    UserActionTypes.GOOGLE_SIGN_IN_START, 
    signInWithGoogle
  );  
}

export function* onEmailSignInStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START, 
    signInWithEmailAndPassword
  );
}

export function* onCheckUserSession() {
  yield takeLatest(
    UserActionTypes.CHECK_USER_SESSION, 
    isUserAuthenticated
  );
}

export function* onSignOutStart() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_START, 
    signOut
  );
}

export function* onSignUpStart() {
  yield takeLatest(
    UserActionTypes.SIGN_UP_START, 
    signUpUser
  );
}

export function* onSignUpSuccess() {
  yield takeLatest(
    UserActionTypes.SIGN_UP_SUCCESS, 
    signInAfterSignUp
  );
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}

