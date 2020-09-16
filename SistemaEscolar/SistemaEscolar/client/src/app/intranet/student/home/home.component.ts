import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { SchoolService } from '../../../services/school.service';
import { Login } from '../../../models/School';
import { MenuItem, MessageService, Message } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';

@Component({
  selector: 'app-home-student',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponentStudent implements OnInit {



  constructor(private loginService: LoginService, private schoolService: SchoolService, private messageService: MessageService) { }
  selectedSubject: number;
  items: MenuItem[];
  credentials: any = [];
  notes: any = [];
  homeworks: any = [];
  subjects: any = [];

  public notes2p = false;
  public notes1p = false;
  public tablenotes = false;
  public tablehomework = false;
  public tablehomework2 = false;
  public isModalShown: boolean = false;

  ngOnInit(): void {
    
    this.credentials = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credentials);
    console.log(this.credentials.COD_PERSONA);
    console.log(this.notes);
    this.items = [{
      label: '',
      items: [{
        
        label: 'Notas Primer Quimestre',
        icon: 'pi pi-table',
        command: () => {
          this.tablenotes = true;
          this.getNotes();
          this.notes1p = true;
          this.notes2p = false;
          this.tablehomework=false;    
          this.tablehomework2 = false;

        }
      },
      {
        label: 'Notas Segundo Quimestre',
        icon: 'pi pi-table',
        command: () => {
          this.tablenotes = true;
          this.getNotes2();
          this.notes2p = true;
          this.notes1p = false;
          this.tablehomework=false;
          this.tablehomework2 = false;
        }
      },
      {
        label: 'Deberes',
        icon: 'pi pi-inbox',
        command: () => {
          this.getMateria();
          this.tablehomework = true;
          this.notes1p= false;
          this.notes2p=false;
          this.tablenotes = false;
        }
      }
      ]
    }
    ];
  }

  getNotes() {
    console.log(this.credentials.COD_PERSONA);

    this.schoolService.getNotes(this.credentials.COD_PERSONA)
      .subscribe(
        res => {
          this.notes = res;
          console.log(this.notes);
        },
        err => console.error(err)
      );
  }

  getNotes2() {
    console.log(this.credentials.COD_PERSONA);
    this.schoolService.getNotes2(this.credentials.COD_PERSONA)
      .subscribe(
        res => {
          this.notes = res;
          console.log(this.notes);
        },
        err => console.error(err)
      );
  }

  getHomework(cm: number){
    // console.log(this.credentials.COD_PERSONA, this.homeworks.COD_ASIGNATURA)
    this.schoolService.getHomework(cm,this.credentials.COD_PERSONA).subscribe(
      res => {
        this.homeworks = res;
        console.log(this.homeworks);
      }
    )
  }

  getMateria(){
    this.schoolService.getMateria(this.credentials.COD_PERSONA)
      .subscribe(
        res => {
          this.subjects = res;
          console.log(this.subjects);
        },
        err => console.error(err)
      );
  }

  onChange(selectedSubject){
    this.getHomework(selectedSubject.COD_ASIGNATURA);
    this.tablehomework2 = true;
    this.isModalShown = true;

  }

  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
    this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }
}
