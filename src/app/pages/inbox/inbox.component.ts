import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const rows = [
  {
    id: 1,
    task: 'Tarea 1',
    status: 'Pendiente',
    assigned_by: 'Admin 1',
    actions: 'Ver detalles',
  },
  {
    id: 2,
    task: 'Tarea 2',
    status: 'Completada',
    assigned_by: 'Admin 2',
    actions: 'Ver detalles',
  },
  {
    id: 3,
    task: 'Tarea 3',
    status: 'Pendiente',
    assigned_by: 'Admin 3',
    actions: 'Ver detalles',
  },
  {
    id: 4,
    task: 'Tarea 4',
    status: 'Completada',
    assigned_by: 'Admin 1',
    actions: 'Ver detalles',
  },
  {
    id: 5,
    task: 'Tarea 5',
    status: 'Pendiente',
    assigned_by: 'Admin 2',
    actions: 'Ver detalles',
  },
  {
    id: 6,
    task: 'Tarea 6',
    status: 'Completada',
    assigned_by: 'Admin 3',
    actions: 'Ver detalles',
  },
  {
    id: 7,
    task: 'Tarea 7',
    status: 'Pendiente',
    assigned_by: 'Admin 1',
    actions: 'Ver detalles',
  },
  {
    id: 8,
    task: 'Tarea 8',
    status: 'Completada',
    assigned_by: 'Admin 2',
    actions: 'Ver detalles',
  },
  {
    id: 9,
    task: 'Tarea 9',
    status: 'Pendiente',
    assigned_by: 'Admin 3',
    actions: 'Ver detalles',
  },
  {
    id: 10,
    task: 'Tarea 10',
    status: 'Completada',
    assigned_by: 'Admin 1',
    actions: 'Ver detalles',
  },
];

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InboxComponent {
  readonly rows = rows;
  displayedColumns: string[] = [
    'id',
    'task',
    'status',
    'assigned_by',
    'actions',
  ];
}
