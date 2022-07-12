import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

informationdata:string='';
id: number=0;
data:any;
email:string="";

  constructor() { 
    this.informationdata = 'Arthi ammagari';
    
  }

  ngOnInit(): void {
  }
  onSubmit(value:any){
    console.log(value)
  }
}
