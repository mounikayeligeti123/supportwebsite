import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router,Data, NavigationEnd,Event } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() scrollEvent = new EventEmitter<string>();
  pageTitle: any;
  step: any;
  // currentUrl: string;
  

  constructor(private route: ActivatedRoute, private router: Router) { 
   
  }
  ngOnInit() {
    
          this.router.events.subscribe((event: Event) => {
            console.log(event);
            if (event instanceof NavigationEnd ) {
              this.pageTitle = event.url;
              console.log(this.pageTitle)
              if(this.pageTitle === '/' || this.pageTitle == '/home'){
this.pageTitle = 1
              }else  if(this.pageTitle === '/team'){
                this.pageTitle = 2
              }else  if(this.pageTitle === '/about'){
                this.pageTitle = 3
              }else  if(this.pageTitle === '/support'){
                this.pageTitle = 4
              }else  if(this.pageTitle === '/service'){
                this.pageTitle = 5}
            }
          });
  }
  scrollToElement(val:any) {
    this.scrollEvent.emit(val)
  }
}
