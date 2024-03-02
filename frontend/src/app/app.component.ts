import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api/menuitem';
import { Observable } from 'rxjs';
import { MenuService } from './shared/service/menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
    SideMenuComponent,
    BreadcrumbModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public greeting = '';
  public breadcrumbHome: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  public menuState$: Observable<boolean> | null = null;

  public breadcrumbItems: MenuItem[] = [
      {
        label: 'Japanese Grammar',
        items: [
            { label: 'Verbs', routerLink: ['/jpn-grammar/verbs'] },
            { label: 'Adjectives', routerLink: ['/jpn-grammar/adjectives'] }
        ]
      }
  ];

  constructor(private menuService: MenuService) {}

  public ngOnInit(): void {
    this.menuState$ = this.menuService.getToggle();
    this.setGreeting();
  }

  private setGreeting() {
    const time = (new Date()).getHours();
    if (time > 5 && time < 10) {
      this.greeting = 'おはようございます';
    } else if (time > 10 && time < 17) {
      this.greeting = 'こんにちは';
    } else {
      this.greeting = 'こんばんは';
    }
  }
}
