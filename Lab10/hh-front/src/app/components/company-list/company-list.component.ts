import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit, OnDestroy {
  companies: Company[] = [];
  loading = true;
  private subscription: Subscription = new Subscription();

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCompanies(): void {
    this.loading = true;
    const companiesSub = this.companyService.getCompanies().subscribe({
      next: (companies) => {
        this.companies = companies;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching companies:', error);
        this.loading = false;
      }
    });
    
    this.subscription.add(companiesSub);
  }
}
