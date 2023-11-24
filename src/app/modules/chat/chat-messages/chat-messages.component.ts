import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessage } from '../types';
import { ChatMessageComponent } from '../chat-message/chat-message.component';

@Component({
  selector: 'app-chat-messages',
	standalone: true,
	imports: [CommonModule, ChatMessageComponent],
	templateUrl: './chat-messages.component.html',
	styleUrls: ['./chat-messages.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessagesComponent {
  @Input() messages: ChatMessage[]=  []
}
