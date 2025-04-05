from django.core.management.base import BaseCommand
from api.models import Company, Vacancy

class Command(BaseCommand):
    help = 'Load test data for HH Back API'

    def handle(self, *args, **kwargs):
        # Clear existing data
        self.stdout.write('Clearing existing data...')
        Company.objects.all().delete()
        Vacancy.objects.all().delete()

        # Create companies
        self.stdout.write('Creating companies...')
        companies = [
            Company(name='Kaspi', description='Leading fintech company in Kazakhstan', 
                   city='Almaty', address='Nauryzbai Batyr St 154A'),
            Company(name='Kolesa Group', description='Leading classifieds company in Kazakhstan', 
                   city='Almaty', address='Dostyk Ave 38'),
            Company(name='Chocofamily', description='E-commerce and fintech holding', 
                   city='Almaty', address='Zhandosov St 2'),
            Company(name='Air Astana', description='National airline of Kazakhstan', 
                   city='Almaty', address='Nursultan Nazarbayev International Airport'),
            Company(name='Beeline Kazakhstan', description='Leading telecommunications provider', 
                   city='Almaty', address='Timiryazev St 2')
        ]
        
        for company in companies:
            company.save()
            self.stdout.write(f'Created company: {company.name}')
        
        # Create vacancies
        self.stdout.write('Creating vacancies...')
        vacancies = [
            # Kaspi vacancies
            Vacancy(name='Senior Python Developer', 
                   description='Looking for a senior backend developer with Python/Django experience', 
                   salary=4000.0, company=companies[0]),
            Vacancy(name='iOS Developer', 
                   description='Developing and maintaining Kaspi mobile app for iOS platform', 
                   salary=3500.0, company=companies[0]),
            Vacancy(name='Data Scientist', 
                   description='Working with big data and machine learning models', 
                   salary=3800.0, company=companies[0]),
            
            # Kolesa Group vacancies
            Vacancy(name='Frontend Developer', 
                   description='Developing modern web interfaces using React', 
                   salary=2800.0, company=companies[1]),
            Vacancy(name='QA Engineer', 
                   description='Ensuring quality of our products through automated tests', 
                   salary=2300.0, company=companies[1]),
            
            # Chocofamily vacancies
            Vacancy(name='Java Developer', 
                   description='Building microservices architecture with Java and Spring', 
                   salary=3200.0, company=companies[2]),
            Vacancy(name='DevOps Engineer', 
                   description='Managing infrastructure and CI/CD pipelines', 
                   salary=3500.0, company=companies[2]),
            
            # Air Astana vacancies
            Vacancy(name='IT Support Specialist', 
                   description='Providing technical support to airline staff', 
                   salary=1800.0, company=companies[3]),
            
            # Beeline vacancies
            Vacancy(name='Network Engineer', 
                   description='Managing and optimizing telecom network infrastructure', 
                   salary=2800.0, company=companies[4]),
            Vacancy(name='Big Data Developer', 
                   description='Working with Hadoop ecosystem and big data processing', 
                   salary=3700.0, company=companies[4]),
            Vacancy(name='Cybersecurity Specialist', 
                   description='Ensuring security of company networks and applications', 
                   salary=4200.0, company=companies[4]),
            Vacancy(name='AI Research Scientist', 
                   description='Researching and implementing advanced AI algorithms', 
                   salary=4500.0, company=companies[4]),
        ]
        
        for vacancy in vacancies:
            vacancy.save()
            self.stdout.write(f'Created vacancy: {vacancy.name} at {vacancy.company.name}')
        
        self.stdout.write(self.style.SUCCESS('Successfully loaded test data!')) 