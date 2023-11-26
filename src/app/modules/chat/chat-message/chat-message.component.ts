import {
  Component,
  ChangeDetectionStrategy,
  Input,
  inject,
  HostBinding,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeMatcher } from '../me-matcher/me-matcher';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageComponent {
  #isMe = inject(MeMatcher);

  @Input({ required: true }) userId!: string;
  @Input() content = '';
  @Input() date = '';

  @HostBinding('class.is-me')
  protected isMe = false;

  ngOnInit() {
    this.isMe = this.#isMe.isMe(this.userId);
  }
}
