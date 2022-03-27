import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', redirectTo: '/dptlist', pathMatch: 'full' },
  { path: 'dptlist', component: DepartmentListComponent },
  { path: 'dptlist/:id', component: DepartmentDetailsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: '**', component: PageNotFoundComponent }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepartmentListComponent, EmployeeComponent, PageNotFoundComponent, DepartmentDetailsComponent]
