import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuService } from '../../shared/service/menu.service';

@Component({
  selector: 'nnt-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  public menuOpen = false;

  constructor(
    private router: Router,
    private menuService: MenuService
  ) {}

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.menuService.toggleMenu(this.menuOpen);
  }

  public goToHome(): void {
    this.router.navigate(['/']);
  }
}
