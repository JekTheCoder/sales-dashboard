import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

type SellerStatus = {
  seller: {
    id: string;
    name: string;
    avatar: string;
  };
  statusName: string;
  client: {
    id: string;
    name: string;
    avatar: string;
  } | null;
};

const rows: SellerStatus[] = [
  {
    seller: {
      id: '1',
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    statusName: 'En reunión',
    client: {
      id: '2',
      name: 'Bob Doe',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  },
  {
    seller: {
      id: '3',
      name: 'Alice Smith',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    statusName: 'Disponible',
    client: null,
  },
  {
    seller: {
      id: '4',
      name: 'Charlie Brown',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    statusName: 'En reunión',
    client: {
      id: '5',
      name: 'Diana Brown',
      avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
  },
  // Additional rows
  {
    seller: {
      id: '6',
      name: 'Eva Green',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    statusName: 'En reunión',
    client: {
      id: '7',
      name: 'Frank Green',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
  },
  {
    seller: {
      id: '8',
      name: 'Grace Taylor',
      avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    statusName: 'Ocupado',
    client: null,
  },
  {
    seller: {
      id: '9',
      name: 'Harry Turner',
      avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    statusName: 'En pausa',
    client: {
      id: '10',
      name: 'Isabel Turner',
      avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
  },
];

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SellersComponent {
  readonly columns = ['seller', 'status', 'client', 'actions'];
  protected rows = rows;
}
