import { Component, OnInit } from '@angular/core';
import { folder } from './material.model';

@Component({
  selector: 'app-material-shop',
  templateUrl: './material-shop.component.html',
  styleUrls: ['./material-shop.component.scss']
})
export class MaterialShopComponent implements OnInit {
  folders: folder[] = [];
  notes: folder[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initModels();
  }

  initModels()
  {
    let tFolder: folder = {
      name: 'folder1',
      updated: 'updated'
    }
    this.folders.push(tFolder);

    tFolder = {
      name: 'folder2',
      updated: 'updated'
    }
    this.folders.push(tFolder);

    tFolder = {
      name: 'note1',
      updated: 'updating'
    }
    this.notes.push(tFolder);

    tFolder = {
      name: 'note2',
      updated: 'updating'
    }
    this.notes.push(tFolder);


  }

}
