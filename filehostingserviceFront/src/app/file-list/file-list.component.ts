import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../data.service';
import {FileModel} from '../model/FileModel';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  fileList: FileModel[] = [];

  constructor(private service: DataServiceService) {
    this.service.getFileList().subscribe((lista) => {
      this.fileList = lista
    })
  }

  ngOnInit(): void {
  }

  getFiles() {
    return
  }

  onEdit(aFile: FileModel) {

  }

  onRemove(aFile: FileModel) {
    this.service.deleteFile(aFile)
  }

}
