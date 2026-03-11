import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './menu.component.css',
  template: `
    <header class="header">
      <span>Раздел: {{ menuService.activeCategoryName() }}</span>

      <div class="stats" aria-live="polite" aria-atomic="true">
        <span>Выбрано пунктов: {{ menuService.selectedCount() }}</span>
        <span>Общее значение: {{ menuService.totalValue() }}</span>
      </div>
    </header>

    <div class="layout">
      <nav class="sidebar" aria-label="Категории меню">
        <ul>
          @for (category of menuService.categories(); track category.id) {
            <li>
              <button
                type="button"
                [class.active]="category.id === menuService.activeCategoryId()"
                [attr.aria-current]="category.id === menuService.activeCategoryId() ? 'true' : null"
                (click)="menuService.setActiveCategory(category.id)"
              >
                {{ category.name }}
              </button>
            </li>
          }
        </ul>
      </nav>

      <section class="items" aria-label="Элементы категории">
        @if (menuService.activeCategory(); as category) {
          <ul>
            @for (item of category.items; track item.id) {
              <li class="card">
                <label>
                  <input
                    type="checkbox"
                    [checked]="menuService.isSelected(item.id)"
                    (change)="menuService.toggleItem(item.id)"
                  />
                  <span class="info">
                    <span>{{ item.name }}</span>
                    <span class="value">Value: {{ item.value }}</span>
                  </span>
                </label>
              </li>
            }
          </ul>
        }
      </section>
    </div>
  `,
})
export class MenuComponent {
  protected readonly menuService = inject(MenuService);
}
