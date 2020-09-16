import { Component } from '@angular/core';
import { AppMainComponent} from './app.main.component';
import { LoginService } from './services/login.service'

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public app: AppMainComponent, private loginService: LoginService) {}
    
    credentials: any =[];

    ngOnInit(): void {
      this.credentials=this.loginService.getsession();
      console.log(this.loginService.getsession());
      console.log(this.credentials);
    }
  
}
