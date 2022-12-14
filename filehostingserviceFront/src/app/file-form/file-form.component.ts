import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FileControllerService, ModelFile} from '../openapi';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css']
})
export class FileFormComponent implements OnInit {

  model:ModelFile={
    name:''
  };
  idx = -1;
  constructor(private router: Router, private service: FileControllerService, private route: ActivatedRoute) { }

  onSubmit(): void {
    this.submitted = true;
    if (this.idx == -1) {
      this.service.fileControllerCreate(this.model).subscribe();
    } else{
      if (this.model.id){
        this.service.fileControllerUpdateById(this.model.id,this.model).subscribe()
      }
    }
  }

  ngOnInit() {
    const idxParam = this.route.snapshot.paramMap.get('idx');
    idxParam? this.idx = +idxParam : this.idx = -1;
    if (this.idx == -1) {
      this.model={
        name:''
      };
    } else {
        this.service.fileControllerFind().subscribe((lista:ModelFile[]) => {
          this.model = lista[+this.idx]
        })
    }
  }

  submitted = false;

  newFile() {
    this.model = {
      name:''
    };
  }


}
