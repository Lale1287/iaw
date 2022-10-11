import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataServiceService} from '../data.service';
import {FileModel} from '../model/FileModel';

@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css']
})
export class FileFormComponent implements OnInit {

  model = new FileModel('');
  idx = -1;
  constructor(private router: Router, private service: DataServiceService, private route: ActivatedRoute) { }

  onSubmit(): void {
    this.submitted = true;
    if (this.idx == -1) {
      this.service.addFile(this.model);
    }
  }

  ngOnInit() {
    const idxParam = this.route.snapshot.paramMap.get('idx');
    idxParam ? this.idx = +idxParam : this.idx = -1;
    if (this.idx == -1) {
      this.model = new FileModel("");
    } else {
      this.service.getFileList().subscribe((l) => {
        this.model = l[+this.idx]
      }
      )
    }
  }

  submitted = false;

  newFile() {
    this.model = new FileModel('');
  }


}
