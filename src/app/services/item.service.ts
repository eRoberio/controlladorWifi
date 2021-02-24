import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  itemsCollection?: AngularFirestoreCollection<Item>;
  items: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('visitas', ref=> ref.orderBy('nome', 'asc'));
    this.items = this.afs.collection('visitas').valueChanges();
  }

   getItems() {
    return this.items;
  }

  addItem(item: Item){
    this.itemsCollection?.add(item);
  }

  
}
