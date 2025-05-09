import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'registry',
        component: RegistryComponent
    },
    {
        path: 'quiz',
        component: QuizComponent
    },
    {
        path: 'user',
        component: UserComponent
    }



];
