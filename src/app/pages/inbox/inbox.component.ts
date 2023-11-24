import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { ChatsService } from '@modules/chat/chats.service';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InboxComponent {
  #chatsService = inject(ChatsService);

  readonly itemHeight = '100px';
  protected chats = toSignal(this.#chatsService.get(), {
    initialValue: [],
  });

  protected chatSelected = toSignal(
    inject(ActivatedRoute).queryParamMap.pipe(
      map((params) => params.get('chat'))
    )
  );

  protected chatBarTransform = computed(() => {
    const id = this.chatSelected();
    const chats = this.chats();

    const i = chats.findIndex((chat) => chat.id === id);
    if (i === -1) {
      return null;
    }

    return `translateY(${i * 100}%)`;
  });
}
