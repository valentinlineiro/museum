import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private toggle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );

  constructor() {}

  getToggle$(): Observable<boolean> {
    return this.toggle$.asObservable();
  }

  toggle(): void {
    this.toggle$.next(true);
  }
}
