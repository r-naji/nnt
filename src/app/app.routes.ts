import { Routes } from '@angular/router';
import { VerbDictionnaryComponent } from './page/verb-dictionnary/verb-dictionnary.component';
import { AdjectiveDictionnaryComponentComponent } from './page/adjective-dictionnary-component/adjective-dictionnary-component.component';
import { PageNotFoundComponent } from './page/system/page-not-found/page-not-found.component';
import { UnauthorizedAccessComponent } from './page/system/unauthorized-access/unauthorized-access.component';
import { TodoComponent } from './page/system/todo/todo.component';

export const routes: Routes = [
  {
    path: 'jpn-grammar/verbs',
    component: VerbDictionnaryComponent,
    title: 'Japanese Verbs Dictionnary',
  },
  {
    path: 'jpn-grammar/adjectives',
    component: AdjectiveDictionnaryComponentComponent,
    title: 'Japanese Adjectives Dictionnary',
  },
  {
    path: 'todo',
    component: TodoComponent,
    title: 'Todo',
  },

  {
    path: '403',
    component: UnauthorizedAccessComponent,
    title: 'Unauthorized Access',
  },
  {
    path: '/',
    redirectTo: 'jpn-grammar/verbs'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page Not Found',
  }
];
