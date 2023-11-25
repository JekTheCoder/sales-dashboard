import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { meeting } from './meeting.data';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [CommonModule, ChatComponent],
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export default class MeetingComponent {
  readonly meeting = meeting;
}
