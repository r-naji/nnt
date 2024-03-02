import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, debounceTime, fromEvent } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class LayoutService {

  private mobileView: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private mobileView$: Observable<boolean>;

  constructor(
    // private breakpointObserver: BreakpointObserver
  ) {
    this.mobileView$ = this.mobileView.asObservable();
    this.mobileView.next(this.getViewportWidth() <= 500);
    fromEvent(window, 'resize')
			.pipe(debounceTime(250))
			.subscribe(() => {
        this.mobileView.next(this.getViewportWidth() <= 500);
      });
  }

  public isMobileView(): Observable<boolean> {
    return this.mobileView$;
  }

  private getViewportWidth(): number {
    return  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
}
