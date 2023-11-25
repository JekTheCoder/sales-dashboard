import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatButtonModule, MatIconModule],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block relative',
  },
})
export class MainLayoutComponent {
  protected small = toSignal(
    inject(BreakpointObserver)
     .observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Medium])
      .pipe(map((x) => x.matches)),
    {
      requireSync: true,
    }
  );

  protected drawerMode = computed((): MatDrawerMode => this.small() ? 'over' : 'side');
}
