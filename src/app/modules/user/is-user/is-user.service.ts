import { Injectable, inject } from '@angular/core';
import { MeMatcher } from '@modules/chat/me-matcher/me-matcher';
import { UserService } from '@modules/user/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class IsUserService implements MeMatcher {
  #userService = inject(UserService);

  isMe(id: string) {
    return this.#userService.get().id === id;
  }
}
