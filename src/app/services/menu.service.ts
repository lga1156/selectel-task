import { Injectable, computed, signal } from '@angular/core';
import { MENU_DATA } from '../data/menu-data';
import { MenuCategory } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  readonly categories = signal<readonly MenuCategory[]>(MENU_DATA);
  readonly activeCategoryId = signal(MENU_DATA[0].id);
  private readonly selectedItemIds = signal<ReadonlySet<number>>(new Set());

  readonly activeCategory = computed(
    () => this.categories().find((c) => c.id === this.activeCategoryId()) ?? null,
  );

  readonly activeCategoryName = computed(() => this.activeCategory()?.name ?? '');

  readonly selectedCount = computed(() => {
    const category = this.activeCategory();
    if (!category) return 0;
    const selected = this.selectedItemIds();
    return category.items.filter((item) => selected.has(item.id)).length;
  });

  readonly totalValue = computed(() => {
    const category = this.activeCategory();
    if (!category) return 0;
    const selected = this.selectedItemIds();
    return category.items
      .filter((item) => selected.has(item.id))
      .reduce((sum, item) => sum + item.value, 0);
  });

  setActiveCategory(id: number): void {
    this.activeCategoryId.set(id);
  }

  toggleItem(itemId: number): void {
    this.selectedItemIds.update((ids) => {
      const next = new Set(ids);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  }

  isSelected(itemId: number): boolean {
    return this.selectedItemIds().has(itemId);
  }
}
