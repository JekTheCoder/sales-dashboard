import { Injectable, inject } from '@angular/core';
import { UserService } from '@modules/user/user/user.service';

@Injectable({
	providedIn: 'root',
})
export class IsUserService {
#userService = inject(UserService);

  isUser(id: string) {
    return this.#userService.get().id === id;
  }
}
