import {Component, OnInit} from '@angular/core';
import {StateService} from '../common/state.service';

@Component({
  selector: 'home',
  template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
  title: string = 'A Neoprospecta';
  body:  string = 'A Neoprospecta é uma empresa de biotecnologia dedicada ao desenvolvimento e comercialização de análises microbiológicas inovadoras para mercados onde o diagnóstico rápido, preciso e sensível de micro-organismos seja crucial para a tomada de decisão.';
  message: string;

  constructor(private _stateService: StateService) { }

  ngOnInit() {
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
