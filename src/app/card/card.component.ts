import { Component, OnInit } from '@angular/core';
import { PosteService } from '../sevices/poste.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  constructor(private posteservice: PosteService) { }

  
  postes:any;
    
    getposts(){
    this.posteservice
    .getPoste().subscribe(postes => {
      this.postes = postes;   
      
    })
  }

  ngOnInit(): void {
    this.getposts();
  }





}
