import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  loadDataFromStorage(): any[] {
    let data = localStorage.getItem("saysu_do_list");
    if(data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  persisteDataInStorage(items: any[]) : void {
    let data = JSON.stringify(items);
    localStorage.setItem("saysu_do_list", data);
  }
}
