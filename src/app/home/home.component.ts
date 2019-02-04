import { Component, OnInit } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  title = 'angular-nativescript-firebase-akita-starter'
  isAuthed = false

  constructor( public afAuth: AngularFireAuth ) { }

  ngOnInit() {
  }

  login() {
    console.log('logging in...')
    this.afAuth.auth.signInAnonymously().then( (res) => {
      console.log('res', res)
      this.isAuthed = true
    }, err => console.log('this is the error', err))
  }
}
