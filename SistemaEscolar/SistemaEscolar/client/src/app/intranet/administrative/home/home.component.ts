import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service'
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { MenuItem, MessageService, Message } from 'primeng/api';
import { CampusService } from '../../../services/campus.service';
import { BuildingServiceService } from '../../../services/building-service.service';
import { ClassroomService} from '../../../services/classroom.service';
import { Campus } from '../../../models/Campus';
import { Building } from '../../../models/Building';
import { Classroom } from '../../../models/Classroom';


@Component({
  selector: 'app-home-administrative',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponentAdministrative implements OnInit {

  constructor(private loginService: LoginService, private campusService: CampusService, private buildingService: BuildingServiceService,
    private classroomService: ClassroomService) { }

  selectedCampus: Number;
  selectedBuilding: Number;
  selectedClassroom: Number;
  credentials: any =[];
  items: MenuItem[];
  btnAgregar: ButtonModule[];
  campusList: boolean =false;
  buildingList: boolean =false;
  classroomList: boolean =false;
  campusOption: boolean =false;
  campusForm: boolean =false;
  buildingForm: boolean =false;
  clasroomForm: boolean =false;
  classroomflag: boolean =false;
  campus: any = [];
  oneCampus:any =[];
  buildings: any = [];
  classrooms: any=[];
  buildingOption: boolean =false;
  agregarAula:boolean =false;
  agregarEdificio:boolean =false;
  asistencia=false;

  
  camp: Campus = {
    id: 0,
    NOMBRE: '',
    DIRECCION: '',
    TELEFONO: '',
    CODIGO_POSTAL: ''
  };
  clonedCamp: Campus = {
    id: 0,
    NOMBRE: '',
    DIRECCION: '',
    TELEFONO: '',
    CODIGO_POSTAL: ''
  };
  build: Building = {
    id: 0,
    COD_SEDE: '',
    NOMBRE: '',
    CANTIDAD_PISOS: ''
  };
  clonedBuild: Building = {
    id: 0,
    COD_SEDE: '',
    NOMBRE: '',
    CANTIDAD_PISOS: ''
  };
  class1: Classroom = {
    id: 0,
    COD_EDIFICIO: '',
    NOMBRE: '',
    CAPACIDAD: '',
    TIPO:'',
    PISO:0,
  };
  clonedClass1: Classroom = {
    id: 0,
    COD_EDIFICIO: '',
    NOMBRE: '',
    CAPACIDAD: '',
    TIPO:'',
    PISO:0,
  };
  


  ngOnInit(): void {
    this.credentials = this.loginService.getsession();
    console.log(this.loginService.getsession());
    console.log(this.credentials);
    console.log(this.credentials.COD_PERSONA);
    //this.getCampus();
    this.items = [{
      label: '',
      items: [{
        label: 'Sedes',
        icon: 'pi pi-list',
        command: () => {
          this.campusForm =false;
          this.campusList=true;
          this.buildingList=false;
          this.classroomList=false;
          this.campusOption=false;
          this.buildingOption=false;
          this.classroomflag=false;
          this.agregarAula=false;
          this.agregarEdificio=false;
          this.buildingForm=false; 
          this.clasroomForm=false; 
          this.getCampus();
        }
      },
      {
        label: 'Edificios',
        icon: 'pi pi-list',
        command: () => {
          this.asistencia=false; 
          this.campusForm =false;
          this.agregarAula=false;
          this.campusList=false;
          this.campusOption=true;
          this.classroomList=false;
          this.buildingOption=false;
          this.classroomflag=false;
          this.agregarEdificio=true;
          this.clasroomForm=false; 

          this.getCampus();
        }
      },
      {
        label: 'Aulas',
        icon: 'pi pi-list',
        command: () => {
          this.asistencia=false; 
          this.campusForm =false;
          this.clasroomForm=false; 
          this.buildingOption=false;
          this.buildingList=false;
          this.classroomflag=true;
          this.campusList=false;
          this.campusOption=true;
          this.agregarAula=true;
          this.classroomList=false;
          this.agregarEdificio=false;
          this.buildingForm=false; 
          this.getCampus();
        }
      },
      
    ]
    }
    ];
  }
  getCampus() {
    console.log(this.credentials.COD_PERSONA);

    this.campusService.getCampus()
      .subscribe(
        res => {
          this.campus = res;
          console.log(this.campus);
        },
        err => console.error(err)
      );
  }
  getCampusByID(id) {
    console.log(this.credentials.COD_PERSONA);

    this.campusService.getCampusById(id)
      .subscribe(
        res => {
          this.oneCampus = res;
          console.log(this.oneCampus);
        },
        err => console.error(err)
      );
  }
  getBuildingByCampus(codEdificio) {
    console.log(this.credentials.COD_PERSONA);
    this.getCampusByID(codEdificio);
    this.buildingService.getBuilgingByCampus(codEdificio)
      .subscribe(
        res => {
          this.classroomflag ? this.buildingOption=true : this.buildingList=true;
          this.buildings = res;
          console.log(this.buildings);
        },
        err => console.error(err)
      );
  }
  getClassroomByBuilding(codEdificio) {
    console.log(this.credentials.COD_PERSONA);
    this.classroomService.getClassroomByBuilding(codEdificio)
      .subscribe(
        res => {
          this.classroomList=true;
          this.classrooms = res;
          console.log(this.classrooms);
        },
        err => console.error(err)
      );
  }
  

  onChange(selectedCampus){
    this.getBuildingByCampus(selectedCampus.COD_SEDE);
    this.build.COD_SEDE=selectedCampus.COD_SEDE;
  }
  onChange1(selectedBuilding){
    this.getClassroomByBuilding(selectedBuilding.COD_EDIFICIO);
    this.class1.COD_EDIFICIO=selectedBuilding.COD_EDIFICIO;
  }
  
  addCampusForm()
   {
    this.campusForm=true; 
    this.campusList=false;
    console.log("successful")
   }
  addCampus()
   {
    delete this.camp.id;
    this.campusForm=false; 
    this.campusList=true;
    console.log(this.camp);
    
    this.campusService.createCampus(this.camp).subscribe(
      res => { 
        console.log(res);
      },
      err => console.error(err))
   }
   addBuildingForm()
   {
    this.buildingForm=true; 
    this.buildingList=false;
    console.log("successful")
   }
   addBuilding()
   {
    delete this.build.id;
    this.buildingForm=false; 
    this.buildingList=true;
    
    this.buildingService.createBuilding(this.build).subscribe(
      res => { 
        console.log(res);
      },
      err => console.error(err))
   }
   addClassroomForm()
   {
    this.clasroomForm=true; 
    this.classroomList=false;
    console.log("successful")
   }
   addClassroom()
   {
    delete this.class1.id;
    this.clasroomForm=false; 
    this.classroomList=true;
    console.log(this.class1)
    this.classroomService.createClassroom(this.class1).subscribe(
      res => { 
        console.log(res);
      },
      err => console.error(err))
   }
   onRowEditInit(camp,id) {
    this.clonedCamp = camp;
    console.log(this.clonedCamp);
    console.log(this.clonedCamp);
    console.log(this.clonedCamp);
    this.campusService.updateCampus(this.clonedCamp,id).subscribe(
      res => {;
        console.log(this.clonedCamp);
      },
      err => console.error(err)
    );
  }
  onRowDelete(id) {
    
    this.campusService.deleteCampus(id).subscribe(
      res => {
        console.log(id);
      },
      err => console.error(err)
    );
  }
  onRowEditBuilding(camp,id) {
    this.clonedBuild = camp;
    console.log(this.clonedBuild);
    console.log(this.clonedBuild);
    console.log(this.clonedBuild);
    this.buildingService.updateBuilding(this.clonedBuild,id).subscribe(
      res => {;
        console.log(this.clonedBuild);
      },
      err => console.error(err)
    );
  }
  onRowDeleteBuilding(id) {
    
    this.buildingService.deleteBuilding(id).subscribe(
      res => {
        console.log(id);
      },
      err => console.error(err)
    );
  }
  onRowEditClassroom(camp,id) {
    this.clonedClass1 = camp;
    console.log(this.clonedClass1);
    console.log(this.clonedClass1);
    console.log(this.clonedClass1);
    this.classroomService.updateClassroom(this.clonedClass1,id).subscribe(
      res => {;
        console.log(this.clonedClass1);
      },
      err => console.error(err)
    );
  }
  onRowDeleteClassroom(id) {
    
    this.classroomService.deleteClassroom(id).subscribe(
      res => {
        console.log(id);
      },
      err => console.error(err)
    );
  }
  
}
