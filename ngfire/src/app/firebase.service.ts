import { Injectable } from '@angular/core';
import { AngularFireDatabase,  } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Course } from './shared/course.model';
import { User } from './shared/user.model';

@Injectable()
export class FirebaseService {
  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) { }

  public getCourses(): Observable<Array<{}>> {
    return this.db.list('/courses').valueChanges();
  }

  public authentication(user: User): Promise<User|any> {
    return new Promise((resolve, reject) => {
      this.auth.auth
        .signInWithEmailAndPassword(user.email, user.password)
        .then((authedUser: User) => resolve(authedUser))
        .catch((err: any) => reject(err));
    });
  }
}
