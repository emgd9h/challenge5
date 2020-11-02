import { Injectable } from '@angular/core';
import { Todo } from 'src/app/types/todos/todo';
import { ListItem } from 'src/app/types/checkoutList/list-item';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  checkoutListArray: ListItem[] = [];
  headphoneLogArray: ListItem[] = [];
  dataName: string = "checkoutList";
  logName: string = "checkoutLog";
  constructor(private storage: Storage) { 
    this.getData(this.dataName).then((checkouts) => {
      if (checkouts) {
        this.checkoutListArray = checkouts;
      }

    });
    this.getData(this.logName).then((checkouts) =>{
      if (checkouts){
        this.headphoneLogArray = checkouts;
      }
    });
  }
  
  getData(name: string){
    return this.storage.get(name);
  }
  saveData(name: string, data:ListItem[]){
    this.storage.set(name, data);

  }



  checkoutHeadphone(checkoutObject: ListItem){
    if (checkoutObject != null){
      this.checkoutListArray.push(checkoutObject);

      this.saveData(this.dataName, this.checkoutListArray);
      return this.checkoutListArray;
    }
    else {
      return null;
  }
}
  
  returnHeadphone(checkoutObject: ListItem, time: string){
    for(let i = 0; i < this.checkoutListArray.length; i++){
      if(checkoutObject == this.checkoutListArray[i]){
        this.checkoutListArray[i].returnedTime = time;
        this.headphoneLogArray.push(this.checkoutListArray[i]);
        this.checkoutListArray.splice(i, 1);
      }
    }
    this.saveData(this.dataName, this.checkoutListArray);
    this.saveData(this.logName,this.headphoneLogArray);
    return this.checkoutListArray;
  }
  



}