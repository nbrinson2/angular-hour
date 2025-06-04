import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class ClickTrackerService {
  public count = 0;

  public increment(): number {
    this.count++;
    return this.count;
  }
}
