import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'
import { MenuItem, MessageService, Message } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SchoolService } from '../../../services/school.service';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponentTeacher implements OnInit {

  constructor(private loginService: LoginService, private schoolService: SchoolService, private messageService: MessageService) { }

  credentials: any = [];
  items: MenuItem[];


  public tablestudents = false;
  public tablessubject = false;

  ngOnInit(): void {
    this.credentials = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credentials);
    console.log(this.credentials.COD_PERSONA);
    this.items = [{
      label: '',
      items: [{
        label: 'Registro de Deberes',
        icon: 'pi pi-briefcase',
        command: () => {
          this.tablessubject = true;
          this.tablestudents = false;
        }
      },
      {
        label: 'Registro de Notas',
        icon: 'pi pi-bars',
        command: () => {
          this.tablestudents = true;
          this.tablessubject = false;
        }
      }
      ]
    }
    ];
  }

}
