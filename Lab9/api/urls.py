from django.urls import path
from api import views

urlpatterns = [
    # Company URLs
    path('companies/', views.CompanyListAPIView.as_view()),
    path('companies/<int:id>/', views.CompanyDetailAPIView.as_view()),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    
    # Vacancy URLs
    path('vacancies/', views.VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', views.VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', views.top_ten_vacancies),
] 