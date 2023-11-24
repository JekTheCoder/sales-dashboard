import {
  Component,
  ChangeDetectionStrategy,
  Input,
  inject,
  HostBinding,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessage } from '../types';
import { IsUserService } from '@modules/user/is-user/is-user.service';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageComponent {
  #isUserService = inject(IsUserService);

  @Input({ required: true }) message!: ChatMessage;

  @HostBinding('class.is-user')
  protected isUser = false;

  ngOnInit() {
    this.isUser = this.#isUserService.isUser(this.message.user.id);
  }
}
