import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router'
import { SchoolService } from '../../../services/school.service'
import { Login} from '../../../models/School'
import { LoginService } from '../../../services/login.service'
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

export class StartComponent implements OnInit {

  credential: any = {
    COD_USUARIO: 0,
    COD_PERSONA: 0,
    NOMBRE_USUARIO: '',
    CLAVE: '',
    ESTADO: '',
    ULT_FECHA_INGRESO: new Date(),
    INTENTOS_FALLIDOS: 0,
    COD_ROL: 0,
    NOMBRE: ''
  };

  constructor(private schoolService: SchoolService, private router: Router, private activatedRoute: ActivatedRoute, private loginService: LoginService ) { }

  ngOnInit(): void {
    
  }



  getCredentials(){
    
    if(this.credential.NOMBRE_USUARIO && this.credential.CLAVE){
      this.schoolService.getCredentials(this.credential.NOMBRE_USUARIO,this.credential.CLAVE)
      .subscribe(
      res => {
        this.credential=res;
        console.log(this.credential);
        console.log(this.credential[0].COD_ROL);
        const rol = this.credential[0].COD_ROL;
        this.loginService.setsession(this.credential[0]);
        if(rol == 2){
          this.router.navigate(['/administrative/home']);
        }
        else if(rol == 3)
        {
          this.router.navigate(['/teacher/home']);

        }
        else if(rol == 4)
        {
          this.router.navigate(['/student/home']);
        }
      },
      err => console.log(err)
    )
    }
  }
}

