import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PosteService } from '../sevices/poste.service';





@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.sass']
})
export class AddArticleComponent implements OnInit {

constructor(private posteservice: PosteService) { }


addPost(formPoste:any){
console.log(formPoste);
}
  ngOnInit(): void { }

  form = new FormGroup({
    titre : new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),
    description : new FormControl('',
    Validators.compose([
		Validators.required,
    Validators.minLength(5)
	]))
  })

  get titre(){
    return this.form.get('titre');
  }

  get description(){
    return this.form.get('description');
  }

  addPoste(){
    
    if(this.form.status!="INVALID"){
      alert("ok");
      this.posteservice.addPoste(this.form.value);
    }else{
      console.log(this.description?.errors?.['minLength']);
    }

  }

}
