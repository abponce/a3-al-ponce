import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  category: string;
  name: string;
  imageUrl: string;
  id: string;
  url: string;
  localId:string;
  @Input() resource:ResourceData;
  
  constructor() { }

  ngOnInit() {
  this.category = this.resource.category;
  this.name = this.resource.name;
  this.imageUrl = this.resource.imageURL;
  this.id = this.resource.id;
  this.url = this.resource.url;
  this.localId = this.resource.localId;

}
  



}
