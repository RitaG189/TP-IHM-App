import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bebe',
  templateUrl: './bebe.page.html',
  styleUrls: ['./bebe.page.scss'],
})
export class BebePage implements OnInit {

  public category: any

  constructor(private router: Router, private activeRoute: ActivatedRoute) { 
    this.activeRoute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()) {
        this.category = this.router.getCurrentNavigation()
      }
    })
  }

  ngOnInit() {}

}
