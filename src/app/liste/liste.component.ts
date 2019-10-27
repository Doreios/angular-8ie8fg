import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { ApiService } from 'src/api.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  articles : Observable<Article[]>

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.articles = this.apiService.getArticles ();
  }

  majTab (): void{
    var val = (document.getElementById("search") as HTMLInputElement).value;
    if(/  +/.test(val)){
      val = val.replace(/[ ]{2,}/, ' ');
      (document.getElementById("search") as HTMLInputElement).value = val;
    }

    if(val == " "){
      (document.getElementById("search") as HTMLInputElement).value = "";
      val = "";
    }

    if(val.startsWith(" ")){
      val = val.substring(1,val.length);
      (document.getElementById("search") as HTMLInputElement).value = val;
    }

    var lesTR = document.getElementsByTagName('tr');
    for(var i=0; i<lesTR.length; i++){
      var lesTD = lesTR[i].getElementsByTagName('td');
      var contientRecherche = false;

      if(lesTD.length != 0){
        for(var j=0; j<lesTD.length; j++){
          
          if(lesTD[j].innerHTML.toUpperCase().startsWith(val.toUpperCase())){
            contientRecherche = true;
          }
        }

        if(!contientRecherche){
          lesTR[i].style.display = "none";
        }else{
          lesTR[i].style.display = "";
        }
      }
    }
  }
}