import { Component } from '@angular/core';
import { DbService } from '../../services/db/db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-snippet',
  standalone: true,
  imports: [],
  templateUrl: './view-snippet.component.html',
  styleUrl: './view-snippet.component.css',
})
export class ViewSnippetComponent {
  codeSnippet = {
    title:'',
    code:''
  };
  constructor(private dbService: DbService, private router: ActivatedRoute) {}

  ngOnInit() {
    const docId = this.router.snapshot.paramMap.get('id');
    this.dbService.getSnippetById(docId!).then((data: any) => {
      this.codeSnippet = data;
    });
  }
}