import { Injectable, signal } from '@angular/core';
import { User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  protected user = signal<User>({
    name: 'user',
    id: 'vendedor',
    avatar: 'avatar',
    email: 'email',
  });

  get() {
    return this.user();
  }
}
