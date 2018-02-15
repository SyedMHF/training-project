import {Component, DoCheck, OnChanges, OnDestroy, OnInit, ViewContainerRef} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {AssetCreatorDialog} from './asset-creator.dialog';
import {GalleryService} from '../../services/gallery.service';
import {Album} from './album.interface';

@Component({
  selector: 'qs-album,',
  templateUrl: './album-list.page.html',
})
export class AlbumListPage implements OnChanges, OnInit, DoCheck, OnDestroy {

  // declare observable
  // assets$: Observable<Asset[]>;
  // students$: Observable<Student[]>;
  albums$: Observable<Album[]>;
  creatorDialogRef: MatDialogRef<AssetCreatorDialog>;

  // constructor
  constructor(private galleryService: GalleryService,
              private router: Router,
              private route: ActivatedRoute,
              private vcf: ViewContainerRef,
              private dialog: MatDialog,
  ) {
  }

  loadPosts(): void {
    this.albums$ = this.galleryService.findAlbums();
    // this.students$ = this.academicService.findStudents();
  }

  viewAlbum(album: Album):void{
    console.log(JSON.stringify(album));
    this.router.navigate(['/albumDetail', album.id]);
  }

  ngOnChanges(): void{
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('test ngOnInit');
    this.loadPosts();
  }

  ngDoCheck(): void{
    console.log('doCheck');
  }

  ngOnDestroy(): void {
    // no op
    console.log('ngdestroy');
  }

  showAddDialog(): void {
    console.log('showContainerDialog');
    let config: MatDialogConfig = new MatDialogConfig();
    config.viewContainerRef = this.vcf;
    config.role = 'dialog';
    config.width = '70%';
    config.height = '60%';
    config.position = {top: '0px'};
    this.creatorDialogRef = this.dialog.open(AssetCreatorDialog, config);
    this.creatorDialogRef.afterClosed().subscribe((res) => {
      console.log('close dialog');
    });
  }
}
