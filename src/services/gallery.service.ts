import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Album} from '../app/dashboard/album.interface';

@Injectable()
export class GalleryService {

  constructor(private http: HttpClient) {
    // no op
  }

  findAlbums(): Observable<Album[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums').map(res => <Album[]>res);
  }

  findAlbumByUserId(userId: number): Observable<Album> {
    return this.http.get('https://jsonplaceholder.typicode.com/albums/' + userId).map(res => <Album>res);
  }
}
