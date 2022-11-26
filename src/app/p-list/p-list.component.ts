import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-p-list',
  templateUrl: './p-list.component.html',
  styleUrls: ['./p-list.component.css']
})
export class PListComponent implements OnInit {

  products2 = [{
    'name':'ruturaj',
    'id':'ruturaj',
    'gender':'ruturaj',
    'pay':'ruturaj',
    'rent':'ruturaj',
  },
{
  'name':'abhi',
    'id':'hi',
    'gender':'five',
    'pay':'so much',
    'rent':'no much',
}];



  constructor() { }

  ngOnInit(): void {
  }


  customSort( event:Event){}

}
