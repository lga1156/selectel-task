import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  styleUrl: './home.component.css',
  template: `
    <div class="home">
      <h1>Тестовое задание на Frontend</h1>
      <div class="links">
        <a routerLink="/menu" class="link">Перейти к меню</a>
        <a
          href="https://github.com/lga1156"
          target="_blank"
          rel="noopener noreferrer"
          class="link github"
        >
          GitHub
        </a>
      </div>
    </div>
  `,
})
export class HomeComponent {}
