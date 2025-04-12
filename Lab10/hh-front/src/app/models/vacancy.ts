export interface Vacancy {
  id: number;
  name: string;
  description: string;
  salary: number;
  company: number;  // Company ID as a foreign key
} 