import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

type Item = {
  label: string;
  link: string;
};

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  readonly items: Item[] = [
    {
      label: 'Inbox',
      link: '/inbox',
    },
    {
      label: 'Meeting',
      link: '/meeting',
    }
  ];
}
