import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToHome(){
    this.router.navigate(['/home']);
  }
  goToAboutUS(){
    this.router.navigate(['/about-us']);
  }
  goToServices(){
    this.router.navigate(['/services']);
  }
  goToContactUs(){
    this.router.navigate(['/contact-us'])
  }
}
