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
import { ChatMessagesComponent } from '@modules/chat/chat-messages/chat-messages.component';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,

    MatCardModule,
    MatButtonModule,

    ChatMessagesComponent,
  ],
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

  protected chatSelectedId = toSignal(
    inject(ActivatedRoute).queryParamMap.pipe(
      map((params) => params.get('chat'))
    )
  );

  protected chatData = computed(() => {
    const id = this.chatSelectedId();
    const chats = this.chats();

    const chat = chats.find((chat) => chat.id === id);
    if (!chat) return null;

    return {
      chat,
      chat$: this.#chatsService.getOne(chat.id),
    }
  })

  protected chatBarTransform = computed(() => {
    const id = this.chatSelectedId();
    const chats = this.chats();

    const i = chats.findIndex((chat) => chat.id === id);
    if (i === -1) {
      return null;
    }

    return `translateY(${i * 100}%)`;
  });
}
