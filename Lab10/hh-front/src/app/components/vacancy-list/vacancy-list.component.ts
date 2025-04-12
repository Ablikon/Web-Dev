import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { VacancyService } from '../../services/vacancy.service';
import { CompanyService } from '../../services/company.service';
import { Vacancy } from '../../models/vacancy';
import { Company } from '../../models/company';
import { Subscription, switchMap, forkJoin } from 'rxjs';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit, OnDestroy {
  vacancies: Vacancy[] = [];
  company: Company | null = null;
  companyId: number = 0;
  private subscription = new Subscription();
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    // Use switchMap to handle the dependent API calls properly
    const routeSub = this.route.params.pipe(
      switchMap(params => {
        this.companyId = +params['id'];
        this.loading = true;
        
        // Use forkJoin to make the two API calls in parallel
        return forkJoin({
          company: this.companyService.getCompany(this.companyId),
          vacancies: this.vacancyService.getVacanciesByCompany(this.companyId)
        });
      })
    ).subscribe({
      next: (data) => {
        this.company = data.company;
        this.vacancies = data.vacancies;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    });
    
    this.subscription.add(routeSub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
