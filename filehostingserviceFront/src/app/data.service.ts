import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {FileModel} from './model/FileModel';

@Injectable({providedIn: 'root'})
export class DataServiceService {
  backendURL: string;
  constructor(private http: HttpClient) {
    this.backendURL = environment.backendUrl + "/files"
  }

  getFileList() {
    return this.http.get<FileModel[]>(this.backendURL)
  }
  addFile(file: FileModel) {
    this.http.post<FileModel>(this.backendURL,file).subscribe()
  }
  deleteFile(file: FileModel) {
    this.http.delete<FileModel>(this.backendURL + "/" + file.id).subscribe()
  }
  //test
  /*async addFile(file: FileModel) {
    await this.http.post<FileModel>(this.backendURL,file).subscribe(()=>console.log("enviado"))
  }*/
}

