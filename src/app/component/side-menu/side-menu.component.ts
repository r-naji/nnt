import { Component, OnInit } from '@angular/core';
import { AppMenuitemComponent } from './side-menu-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nnt-side-menu',
  standalone: true,
  imports: [CommonModule, AppMenuitemComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit {

  model: any[] = [];

  public ngOnInit(): void {
    this.model = [
      {
        label: 'Japanese Grammar',
        items: [
            { label: 'Verbs', routerLink: ['/jpn-grammar/verbs'] },
            { label: 'Adjectives', routerLink: ['/jpn-grammar/adjectives'] }
        ]
      },
      {
        label: 'System',
        items: [
          { label: 'Todo', routerLink: ['/todo'] },
          { label: 'Unauthorized Access', routerLink: ['/403'] },
          { label: 'Page Not Found', routerLink: ['/404'] }
        ]
      }
    ];
  }
}
