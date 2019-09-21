import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'paper',
      name: 'Mesa Nº 1',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'paper',
      name: 'Mesa Nº 2',
      redirectTo: '/alert'
    },
    {
      icon: 'paper',
      name: 'Mesa Nº 3',
      redirectTo: '/alert'
    },
    {
      icon: 'paper',
      name: 'Mesa Nº 4',
      redirectTo: '/alert'
    },
    {
      icon: 'paper',
      name: 'Mesa Nº 5',
      redirectTo: '/alert'
    },
    {
      icon: 'paper',
      name: 'Mesa Nº 6',
      redirectTo: '/alert'
    },
    {
      icon: 'paper',
      name: 'Mesa Nº 7',
      redirectTo: '/alert'
    },
    {
      icon: 'paper',
      name: 'Mesa Nº 8',
      redirectTo: '/alert'
    },
    {
      icon: 'paper',
      name: 'Mesa Nº 9',
      redirectTo: '/alert'
    },
    {
      icon: 'paper',
      name: 'Mesa Nº 10',
      redirectTo: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
