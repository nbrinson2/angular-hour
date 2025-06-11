import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { User } from '../../../shared/resolvers/user.resolver';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent {
  @Input() set user(user: User) {
    this._fullName = user.fullName;
    this._lettersInName = user.fullName.length;
    this._validNameLength = user.fullName.length > 21;
  }
  @Output() userChange = new EventEmitter<void>();

  // backing fields
  private _fullName = '';
  private _lettersInName = 0;
  private _validNameLength = false;

  // render-time trackers
  lastUserRenderMs = 0;
  lastPerfRenderMs = 0;

  get fullName(): string {
    const start = performance.now();
    const name = this._fullName;
    this.lastUserRenderMs = Math.round(performance.now() - start);
    return name;
  }

  get lettersInName(): number {
    return this._lettersInName;
  }

  get validNameLength(): boolean {
    return this._validNameLength;
  }

  get heavyValue(): number {
    const start = performance.now();
    let sum = 0;
    for (let i = 0; i < 200_000_000; i++) {
      sum += i;
    }
    this.lastPerfRenderMs = Math.round(performance.now() - start);
    return sum;
  }

  onUserChange(): void {
    this.userChange.emit();
  }
}
