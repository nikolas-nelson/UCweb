import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Rule} from './models/rule';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  ruleCollection: AngularFirestoreCollection<Rule>;
  rules: Observable<any[]>;

  constructor(public db: AngularFirestore) {
    this.rules = this.db.collection('rules').valueChanges();
  }

  getRules() {
    return this.rules;
  }
}
