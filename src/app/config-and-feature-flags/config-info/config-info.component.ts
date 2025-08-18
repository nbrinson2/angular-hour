import { Component, Inject } from '@angular/core';
import { APP_CONFIG } from '../../app-config';
import { AppConfig } from '../../app-config';
import { configInfoCodeSnippets } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-config-info',
  templateUrl: './config-info.component.html',
  styleUrl: './config-info.component.scss',
})
export class ConfigInfoComponent {
  protected configInfoCodeSnippet = configInfoCodeSnippets;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      {
        label: 'Goal: ',
        description:
          'Read compile-time settings from environment.ts through DI so components do not import environment directly.',
      },
    ],
  };

  constructor(@Inject(APP_CONFIG) public cfg: AppConfig) {}

  protected copy(value?: string | null) {
    if (!value) return;
    navigator.clipboard?.writeText(value).catch(() => {});
  }

  protected open(url?: string | null) {
    if (!url) return;
    try {
      const u = new URL(url);
      window.open(u.toString(), '_blank', 'noopener');
    } catch {
      // ignore invalid URL
    }
  }

  protected reload?(): void;
}
