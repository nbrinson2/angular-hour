import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/resolvers/user.resolver';
import { ActivatedRoute, Router } from '@angular/router';
import { separateConcernsCode } from '../../shared/constants/code-snippets.constants';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-separate-concerns',
  templateUrl: './separate-concerns.component.html',
  styleUrl: './separate-concerns.component.scss',
})
export class SeparateConcernsComponent implements OnInit {
  user!: User;
  currentUserId!: number;

  separateConcernsCode = separateConcernsCode;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.user = data['user'];
    });

    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.currentUserId = id ? +id : 0;
    });
  }

  viewUser(id: number): void {
    this.router.navigate(['../', id], { relativeTo: this.route });
  }

  authorizeUser(): void {
    this.authService.addRole('admin');
  }
}
