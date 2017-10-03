import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  urlCursos: string;
  cursos: string[];

  constructor(private cursosService: CursosService) {}

  ngOnInit() {

    this.urlCursos = 'https://loiane.training/';

    this.cursos = this.cursosService.getCursos();

  }

}
