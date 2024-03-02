import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  private toggle: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private toggle$: Observable<boolean>;

  constructor() {
    this.toggle$ = this.toggle.asObservable();
  }

  public toggleMenu(toggle: boolean): void {
    this.toggle.next(toggle);
  }

  public getToggle(): Observable<boolean> {
    return this.toggle$;
  }
}
