import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../../services/school.service';
import {SplitButtonModule} from 'primeng/splitbutton';
import { MenuItem, MessageService, Message, SelectItem } from 'primeng/api';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-asistance',
  templateUrl: './asistance.component.html',
  styleUrls: ['./asistance.component.css'],
  providers: [DatePipe]

})
export class AsistanceComponent implements OnInit {
  
  dropClassroom=false;
  dropLevel=false;
  idClassroomCode:number;
  idLevelCode:number;
  idPeriodCode:number;
  levels: any = [];
  classrooms: any = [];
  students: any = [];
  fechaActual:Date = new Date();
  items: MenuItem[];
  options: SelectItem[];

  newasistance:any ={
    COD_PERIODO_LECTIVO: 0,
    COD_ALUMNO: 0,
    COD_NIVEL_EDUCATIVO: 0,
    FECHA: new Date(),
    ESTADO:''
    
  };
  constructor(private schoolService: SchoolService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getLevel();
    this.options = [{label: 'Presente', value: 'ACT'}, {label: 'Ausente', value: 'INA'}];
  }

  getLevel(){
    this.schoolService.getNivelLista()
    .subscribe(
      res => {
        this.levels=res;
        console.log(this.levels);
      },
      err => console.error(err)
    );
  }

  getAula(codLevel){
    this.schoolService.getObtenerParalelo(codLevel)
    .subscribe(
      res => {
        this.classrooms=res;
        console.log(this.classrooms);
      },
      err => console.error(err)
    );
  }

  getStudents(){
    this.schoolService.getListaParalelo(this.idLevelCode, this.idClassroomCode)
    .subscribe(
      res => {
        this.students=res;
        console.log(this.students);
      },
      err => console.error(err)
    );
  }

  onChangeLevel(selectedLevel){
    console.log(selectedLevel);
    this.idLevelCode = selectedLevel.COD_NIVEL_EDUCATIVO;
    this.getAula(this.idLevelCode);
    this.dropClassroom=true;
  }

  onChangeClassroom(selectedClassroom){
    console.log(selectedClassroom);
    this.idClassroomCode=selectedClassroom.COD_PARALELO;
    this.getStudents();
    
    
  }

  onRegister(student)
  {
    console.log(student);
    this.newasistance.COD_PERIODO_LECTIVO = student.COD_PERIODO_LECTIVO;
    this.newasistance.COD_ALUMNO=student.COD_ALUMNO;
    this.newasistance.COD_NIVEL_EDUCATIVO=student.COD_NIVEL_EDUCATIVO;
    this.newasistance.FECHA=this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd' );
    this.newasistance.ESTADO=student.ESTADO;
    console.log(this.newasistance);
    this.schoolService.postAsistencia(this.newasistance)
    .subscribe(
      res => {
        console.log('REGISTRO EXITOSO');
      },
      err => console.error(err)
    );
  }

}
