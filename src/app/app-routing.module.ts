import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { ProductsComponent } from './products/products.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path:'', component: ProductsComponent},
  {path:'products', component: ProductsComponent},
  {path:'student',component:StudentComponent},
  {path:'employee',component:EmployeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
