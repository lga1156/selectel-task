import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
  styleUrl: './app.component.css',
  template: `
    <main>
      <router-outlet />
    </main>
  `,
})
export class AppComponent {}
