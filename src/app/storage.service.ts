import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  loadDataFromStorage(): any[] {
    let data = localStorage.getItem("saysu_do_list");
    return data ? JSON.parse(data) : [];
  }

  persisteDataInStorage(items: any[]) : void {
    localStorage.setItem("saysu_do_list", JSON.stringify(items));
  }
}
