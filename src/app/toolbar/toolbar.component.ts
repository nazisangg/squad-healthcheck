import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private fireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  displayName() {
    let currentUser = this.fireAuth.auth.currentUser;
    return isNullOrUndefined(currentUser)
      ? ":shrug:"
      : currentUser.displayName;
  }

  logout() {
    this.fireAuth.auth.signOut();
  }
}
