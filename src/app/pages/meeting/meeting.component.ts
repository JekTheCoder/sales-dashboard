import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { meeting } from './meeting.data';
import { ChatComponent } from './chat/chat.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MeMatcher } from '@modules/chat/me-matcher/me-matcher';
import { IsUserService } from '@modules/user/is-user/is-user.service';

@Component({
  selector: 'app-meeting',
  standalone: true,
  imports: [
    CommonModule,
    ChatComponent,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MeMatcher,
      useClass: IsUserService,
    },
  ],
})
export default class MeetingComponent {
  readonly meeting = meeting;
}
