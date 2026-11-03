import { Component, inject, signal } from '@angular/core';
import { ThemeSwitcher } from './components/theme-switcher/theme-switcher';
import { FileService } from './services/file-service';
import { PROFILE } from './data/profile';

@Component({
  imports: [ThemeSwitcher],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fileService = inject(FileService);

  protected readonly p = PROFILE;
  protected readonly year = new Date().getFullYear();
  protected readonly nav = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  scrollToSection(event: Event, elementId: string): void {
    event.preventDefault();

    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  download() {
    const url = 'Felix_Omondi_Resume.pdf';
    this.fileService.downloadFile(url).subscribe((blob) => {
      const a = document.createElement('a');
      const objectUrl = URL.createObjectURL(blob);
      a.href = objectUrl;
      a.download = 'Felix_Omondi_Resume.pdf';
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }

  viewInNewTab(event: MouseEvent) {
    event.preventDefault();

    const newTab = window.open('', '_blank');
    if (newTab) {
      newTab.document.title = 'Loading Resume...';
    }

    const url = 'Felix_Omondi_Resume.pdf';
    this.fileService.downloadFile(url).subscribe({
      next: (blob) => {
        const viewableBlob = new Blob([blob], { type: 'application/pdf' });
        const objectUrl = URL.createObjectURL(viewableBlob);

        // Redirect the already-open tab to your PDF blob
        if (newTab) {
          newTab.location.href = objectUrl;
        }
      },
      error: (err) => {
        console.error(err);
        if (newTab) newTab.close(); // Clean up if the request fails
      },
    });
  }
}
