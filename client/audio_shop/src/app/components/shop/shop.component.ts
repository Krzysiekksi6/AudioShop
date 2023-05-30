import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @Input() filterText: string = '';
  public items$: any;
  constructor(private service: DataService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((response) => {
      this.items$ = response;
    });
  }
  scrollToSection() {
    const sectionElement = this.elementRef.nativeElement.querySelector('#productSection');
    sectionElement.scrollIntoView({ behavior: 'smooth' });
  }
}
