import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreModule } from '../../core.module';
import { Feature } from '../../model/feature';

@Injectable({
  providedIn: CoreModule,
})
export class FeatureService {
  constructor(private http: HttpClient) {}

  get(): Observable<Feature[]> {
    // TODO: Provide a way for modules to register by themselves
    return this.http.get<Feature[]>('/assets/features/features.json');
  }
}
