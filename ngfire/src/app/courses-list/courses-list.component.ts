import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../firebase.service';
import { Course } from '../shared/course.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: 'courses-list.component.html',
  providers: [FirebaseService]
})
export class CoursesListComponent implements OnInit {
  private coursesObservable: Observable<Array<any>>;
  public dismissible = false;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.coursesObservable = this.firebaseService.getCourses();
  }
}
