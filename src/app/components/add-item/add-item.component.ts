import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  item: Item = {
    nome: '',
    email: '',
    whatsapp: '',
  };

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (
      this.item.nome != '' &&
      this.item.email != '' &&
      this.item.whatsapp != ''
    ) {

      this.itemService.addItem(this.item);
      this.item.nome = '';
      this.item.email = '';
      this.item.whatsapp = '';
    }
  }

 
}
