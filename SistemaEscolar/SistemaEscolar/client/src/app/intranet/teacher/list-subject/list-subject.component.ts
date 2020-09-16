import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, Message} from 'primeng/api';
import { LoginService } from '../../../services/login.service';
import { SchoolService } from '../../../services/school.service';
import {PanelModule} from 'primeng/panel';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit {

  credentials: any = [];
  subjects: any = [];
  students: any  = [];
  levels: any = [];
  classrooms: any = [];
  items: MenuItem[];
  idSubjectCode: number;
  dropLevel=false;
  idLevelCode: number;
  dropClassroom=false;
  idClassroomCode: number;
  idPeriodCode: number;
  dropHomeworks = false;
  idHomeworkCode: number;

newhomework:any ={
  COD_NIVEL_EDUCATIVO: 0,
  COD_ASIGNATURA: 0,
  COD_PERIODO_LECTIVO: 0,
  COD_PARALELO: 0,
  COD_DOCENTE: 0,
  DETALLE_TAREA: ''
};

homeworks: any = [];
  constructor(private loginService: LoginService, private schoolService: SchoolService, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.credentials = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credentials);
    console.log(this.credentials.COD_PERSONA);
    this.items=this.subjects;
    this.getMaterias();
  }


  getMaterias(){
    this.schoolService.getMateriasTeacher(this.credentials.COD_PERSONA)
      .subscribe(
        res => {
          this.subjects = res;
          console.log(this.subjects);
        },
        err => console.error(err)
      );

  }

  getNivel(idProf){
    this.schoolService.getObtNivel(idProf)
    .subscribe(
      res => {
        this.levels = res;
        console.log(this.levels);
      },
      err => console.error(err)
    );
  }

  getAula(){
    this.schoolService.getEnvioDatos(this.credentials.COD_PERSONA, this.idSubjectCode, this.idLevelCode)
    .subscribe(
      res => {
        this.classrooms = res;
        console.log(this.levels);
      },
      err => console.error(err)
    );
  }

  getHomeworks(){
    this.schoolService.getObtenerDeberes(this.credentials.COD_PERSONA, this.idSubjectCode, this.idLevelCode, this.idClassroomCode)
    .subscribe(
      res => {
        this.homeworks = res;
        console.log(this.homeworks);
      },
      err => console.error(err)
    );
  }

  onChange(selectedSubject){
    this.dropClassroom=false;
    this.dropHomeworks = false;
    console.log(selectedSubject.COD_ASIGNATURA);
    this.idSubjectCode=selectedSubject.COD_ASIGNATURA;
    this.getNivel(this.credentials.COD_PERSONA);
    this.dropLevel=true;
    console.log(this.levels);
    
    //this.get(selectedSubject);
  }

  onChangeLevel(selectedLevel){
    this.dropHomeworks = false;
    console.log(selectedLevel);
    this.idLevelCode = selectedLevel.COD_NIVEL_EDUCATIVO;
    this.getAula();
    this.dropClassroom=true;
  }

  onChangeClassroom(selectedClassroom){
    console.log(selectedClassroom);
    this.idClassroomCode=selectedClassroom.COD_PARALELO;
    this.idPeriodCode=selectedClassroom.COD_PERIODO_LECTIVO;
    console.log(this.idClassroomCode);
    console.log(this.idPeriodCode);
    this.dropHomeworks = true;
    this.getHomeworks();
  }

  onAddHomework(homework){
    console.log(homework);
    this.newhomework.COD_NIVEL_EDUCATIVO=this.idLevelCode;
    this.newhomework.COD_ASIGNATURA=this.idSubjectCode
    this.newhomework.COD_PERIODO_LECTIVO=this.idPeriodCode;
    this.newhomework.COD_PARALELO=this.idClassroomCode;
    this.newhomework.COD_DOCENTE=this.credentials.COD_PERSONA;
    this.newhomework.DETALLE_TAREA=homework;
    console.log(this.newhomework);
    this.schoolService.getMandarDeber(this.newhomework)
    .subscribe(
      res => {
        console.log('Tarea agregada');
      },
      err => console.error(err)
    );
    this.getHomeworks();
  }

  onRowEditInit(homework){
    console.log(homework);
    this.idHomeworkCode=homework.COD_TAREA;
    delete homework.COD_TAREA;
    console.log(homework);
    this.schoolService.updateDeber(this.idHomeworkCode, homework)
    .subscribe(
      res => {
        console.log('Tarea Editada');
      },
      err => console.error(err)
    );
  }
}
