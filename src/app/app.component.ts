import { Component } from '@angular/core';
import { AddArticleComponent } from './add-article/add-article.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(public matDialog: MatDialog) { }

  title = 'blog';
  

  i:number[] = [0,1,2,3];


  openAddPostModal() {
    const dialogRef = this.matDialog.open(AddArticleComponent,{width:'700px'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}


