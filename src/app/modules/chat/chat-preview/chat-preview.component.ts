import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-chat-preview',
  standalone: true,
  imports: [CommonModule, MatRippleModule],
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatPreviewComponent {
  @Input() name = '';
  @Input() content = '';
}
