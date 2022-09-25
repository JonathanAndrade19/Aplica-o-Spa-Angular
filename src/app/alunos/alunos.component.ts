import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Arte', weight: 1.0079, symbol: 'H'},
  {name: 'Ciencias Fisicas e biologicas', weight: 4.0026, symbol: 'He'},
  {name: 'Educação Física', weight: 6.941, symbol: 'Li'},
  {name: 'Geografia', weight: 9.0122, symbol: 'Be'},
  {name: 'Historia', weight: 10.811, symbol: 'B'},
  {name: 'Lingua Estrangeira inglês', weight: 12.0107, symbol: 'C'},
  {name: 'Matemática', weight: 14.0067, symbol: 'N'},
];

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})

export class AlunosComponent implements OnInit {
  displayedColumns: string[] = ['demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
