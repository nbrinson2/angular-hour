import { Component } from '@angular/core';
import { User } from '../../shared/resolvers/user.resolver';
import { ActivatedRoute } from '@angular/router';
import { cachingCodeSnippets } from '../../shared/constants/code-snippets.constants';
import { InfoItem } from '../../shared/example-info/example-info.component';

@Component({
  selector: 'app-caching',
  templateUrl: './caching.component.html',
  styleUrl: './caching.component.scss'
})
export class CachingComponent {

  protected cachingCodeSnippets = cachingCodeSnippets;
  protected exampleInfo: InfoItem = {
    bulletPoints: [
      { description: 'Cuts down repeated HTTP calls for data that doesn’t change often' },
      { description: 'Speeds up your UI by serving “instant” responses' },
      { description: 'Reduces load on your backend' }
    ]
  };

  protected users: User[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.route.snapshot.data['users'];
  }
}
