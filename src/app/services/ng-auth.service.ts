import { Injectable, NgZone, OnInit } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class NgAuthService implements OnInit {
  userState: any;

  constructor(
    public _afs: AngularFirestore,
    public _afa: AngularFireAuth,
    public _router: Router,
    public _ngzone: NgZone

  ) { }

  ngOnInit(): void {
    this._afa.authState.subscribe((user) => {
      if (user) {
        this.userState = user;
        localStorage.setItem('user', JSON.stringify(this.userState));
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    })


  }

  signUp(email: string, password: string) {
    return this._afa.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.sendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch(error => window.alert(error.message));
  }


  signIn(email: string, password: string) {
    return this._afa.signInWithEmailAndPassword(email,password)
    .then((result) => {
      this._ngzone.run(() => {
        this._router.navigateByUrl('dashboard');
      })
      this.SetUserData(result.user);
    }).catch((error) => window.alert(error.message));
  }

  sendVerificationMail() {
    return this._afa.currentUser
      .then((u) => u?.sendEmailVerification())
      .then(() => {
        this._router.navigateByUrl('[email-verification]')
      })
  }


  forGotPassword(passwordresetEmail: any){
    return this._afa.sendPasswordResetEmail(passwordresetEmail)
    .then(() => {
      window.alert("password reset email sent, please check in your Inbox /spam");
    })
    .catch((error) => alert(error.message));

  }

  getIsLoggedIn():boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false ? true: false;
  }

  GoogleAuth(){
    return this.authLogin(new auth.GoogleAuthProvider());

  }

  authLogin(provider){
    return this._afa.signInWithPopup(provider)
    .then((result) => {
      this._ngzone.run(() => {
        this._router.navigateByUrl('dashboard')
      })
      this.SetUserData(result.user);
    }).catch((error) => alert(error.message));
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this._afs.doc('users/${user.uid');
    const userState: User = {
      uid: '100',
      email:'veer123@gmail.com' ,
      displayName: "thondaveer",
      photoUrl:"https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
      emailVerified: true
    }

    return userRef.set(userState, { merge: true })
  }

  signOut(){
    return this._afa.signOut().then(() => {
      localStorage.removeItem('user');
      this._router.navigateByUrl('signIn');
    })
  }
}

