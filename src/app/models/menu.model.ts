export interface MenuItem {
  id: number;
  name: string;
  value: number;
}

export interface MenuCategory {
  id: number;
  name: string;
  items: readonly MenuItem[];
}
