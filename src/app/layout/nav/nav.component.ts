import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

type Item = {
  label: string;
  link: string;
  icon: string; // A valid material icon
};

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatRippleModule,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  readonly items: Item[] = [
    {
      label: 'Inbox',
      link: '/inbox',
      icon: 'inbox',
    },
    {
      label: 'Meeting',
      link: '/meeting',
      icon: 'chat', // A valid material icon
    },
    {
      label: 'Sellers',
      link: '/sellers',
      icon: 'supervisor_account',
    },
  ];
}
