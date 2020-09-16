import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';
import { AcademyComponent } from './landing/academy/academy.component';
import { FooterComponent } from './landing/footer/footer.component';
import { HeaderComponent } from './landing/header/header.component';
import { NavComponent } from './landing/nav/nav.component';
import { IndexComponent } from './landing/index/index.component';
import { InstitutionComponent } from './landing/institution/institution.component';
import { StartComponent } from './intranet/login/start/start.component';
import { ForgotPasswordComponent } from './intranet/login/forgot-password/forgot-password.component';
import { HomeComponentAdministrative } from './intranet/administrative/home/home.component';
import { HomeComponentTeacher } from './intranet/teacher/home/home.component';
import { HomeComponentStudent } from './intranet/student/home/home.component';
import { ListNotesComponent } from './intranet/teacher/list-notes/list-notes.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'institution',
        component: InstitutionComponent
      },
      {
        path: 'academy',
        component: AcademyComponent
      },
      {
        path: 'student/home',
        children:[
          {path: '', component: HomeComponentStudent}
        ]
        
      },
      {
        path: 'teacher/home',
        component: HomeComponentTeacher
      },
      {
        path: 'teacher/list-notes',
        component: ListNotesComponent
      },
      {
        path: 'administrative/home',
        component: HomeComponentAdministrative
      },
    { path: 'template', component: AppMainComponent,
        children: [
            { path: '', component: DashboardDemoComponent },
            { path: 'template/components/sample', component: SampleDemoComponent },
            { path: 'template/components/forms', component: FormsDemoComponent },
            { path: 'template/components/data', component: DataDemoComponent },
            { path: 'template/components/panels', component: PanelsDemoComponent },
            { path: 'template/components/overlays', component: OverlaysDemoComponent },
            { path: 'template/components/menus', component: MenusDemoComponent },
            { path: 'template/components/messages', component: MessagesDemoComponent },
            { path: 'template/components/misc', component: MiscDemoComponent },
            { path: 'template/pages/empty', component: EmptyDemoComponent },
            { path: 'template/components/charts', component: ChartsDemoComponent },
            { path: 'template/components/file', component: FileDemoComponent },
            { path: 'template/documentation', component: DocumentationComponent },
            
        ]
    },
    {path: 'error', component: AppErrorComponent},
    {path: 'accessdenied', component: AppAccessdeniedComponent},
    {path: 'notfound', component: AppNotfoundComponent},
    {path: 'login', component: StartComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: '**', redirectTo: '/notfound'},

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
