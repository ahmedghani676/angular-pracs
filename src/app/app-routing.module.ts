import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {ChildaComponent} from './first/childa/childa.component';
import {ChildbComponent} from './first/childb/childb.component'
const routes: Routes = [ 
  { path: 'first-component',
  title: 'First component',
    component: FirstComponent,  
    
    // this is the component with the <router-outlet> in the template
  children: [
    {
      path: 'child-as',  // child route path
       title: 'child a',
      component: ChildaComponent,
      
        // child route component that the router renders
    },
    {
      title: 'child b',
      path: 'child-bs',
      component: ChildbComponent,  // another child route component that the router renders
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
