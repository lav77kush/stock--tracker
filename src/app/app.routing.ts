import {  Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';


const routes:Routes = [
    {path: '', component:DashboardComponent},
    {path: 'manage', component:ManageComponent},
    { path: 'manage-broken',   redirectTo: '/manage', pathMatch: 'full' },
];

export const AppRoutes=RouterModule.forRoot(routes);
