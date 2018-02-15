import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Album} from './album.interface';
import {GalleryService} from '../../services/gallery.service';


@Component({
  selector: 'qs-album-detail',
  templateUrl: './album-list-detail.page.html'
})

export class AlbumListDetailPage implements OnInit, OnDestroy{

  //declare variable single set
  album$: Observable<Album>;

  constructor(private galleryService: GalleryService,
              private router: Router,
              private route: ActivatedRoute){
  }

  loadGallery(userId: number): void {
    console.log('userId: ' + userId);
    this.album$ = this.galleryService.findAlbumByUserId(userId);
  }
  ngOnInit():void{
    this.route.params.subscribe((params: { userId: number }) => {
      //this is where you retrieve data
      this.album$ = this.galleryService.findAlbumByUserId(params.userId);
      this.loadGallery(params.userId);
    });
  }

  ngOnDestroy(): void {
    // no op
  }

  goBack(): void {
    this.router.navigate(['/album']);
  }
}
