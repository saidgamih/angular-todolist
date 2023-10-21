import { Component, OnInit} from '@angular/core';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: any[] = [];

  constructor(private storageService : StorageService) {}

  ngOnInit(): void {
    this.items = this.storageService.loadDataFromStorage();
  }


  addItem(text : string) {
    const item = {
      id: (Math.random() * 1000).toFixed(),
      text,
      done: false
    };
    this.items.unshift(item);
    this.storageService.persisteDataInStorage(this.items);
  }

  removeItem(itemId: number) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.storageService.persisteDataInStorage(this.items);
  }

  changeItemStatus(itemId: number) {
    this.items.forEach(item => {
      if(item.id === itemId) {
        item.done = !item.done;
      }
    })
    this.storageService.persisteDataInStorage(this.items);
  }
}
