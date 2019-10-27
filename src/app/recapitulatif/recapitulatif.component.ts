import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.scss']
})
export class RecapitulatifComponent implements OnInit {
    
  /*public nom: string;
  public prenom: string;
  public adresse: string;
  public cp: number;
  public ville: string;
  public tel: number;
  public email: string;
  public civilite: string;
  public password: string;
  public login: string;
  public pays: string;*/

  constructor(
    public nom: string,
    public prenom: string,
    public adresse: string,
    public cp: number,
    public ville: string,
    public tel: number,
    public email: string,
    public civilite: string,
    public password: string,
    public login: string,
    public pays: string,
  ) { }

  ngOnInit() {
  }

}
