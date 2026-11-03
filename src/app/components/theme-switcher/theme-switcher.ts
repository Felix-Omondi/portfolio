import { Component, inject } from '@angular/core';
import { ThemeService, ThemeMode } from '../../services/theme-service';

@Component({
  imports: [],
  selector: 'app-theme-switcher',
  styleUrl: './theme-switcher.css',
  templateUrl: './theme-switcher.html',
})
export class ThemeSwitcher {
  protected readonly theme = inject(ThemeService);
  protected readonly options: { value: ThemeMode; label: string; hint: string }[] = [
    { value: 'light', label: 'Light', hint: 'Always use the light theme' },
    { value: 'dark', label: 'Dark', hint: 'Always use the dark theme' },
    { value: 'system', label: 'Default', hint: 'Follow your device setting' },
  ];
}
