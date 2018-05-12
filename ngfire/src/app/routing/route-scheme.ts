import { Routes } from '@angular/router';

import { CoursesListComponent } from '../courses-list/courses-list.component';
import { AngularComponent } from '../angular/angular.component';
import { VueComponent } from '../vue/vue.component';
import { ReactComponent } from '../react/react.component';

export const routes: Routes = [
  {
    path: '',
    component: CoursesListComponent
  },
  {
    path: 'angular',
    component: AngularComponent
  },
  {
    path: 'vue',
    component: VueComponent
  },
  {
    path: 'react',
    component: ReactComponent
  }
];

