import { Component, OnInit } from '@angular/core';

interface Labour {
  id: number;
  name: string;
  skills: string[];
  experience: number;
  contact: string;
  availability: boolean;
  dailyWage: number;
  location: string;
}

@Component({
  selector: 'app-labour',
  templateUrl: './labour.component.html',
  styleUrls: ['./labour.component.css']
})
export class LabourComponent implements OnInit {
  labourList: Labour[] = [
    {
      id: 1,
      name: 'Ramesh Yadav',
      skills: ['Harvesting', 'Planting', 'Irrigation'],
      experience: 5,
      contact: '+91 9876543210',
      availability: true,
      dailyWage: 400,
      location: 'Indore, MP'
    },
    {
      id: 2,
      name: 'Lakshmi Devi',
      skills: ['Crop Protection', 'Seeding', 'Organic Farming'],
      experience: 8,
      contact: '+91 8765432109',
      availability: true,
      dailyWage: 450,
      location: 'Dewas, MP'
    },
    {
      id: 3,
      name: 'Santosh Kumar',
      skills: ['Equipment Operation', 'Fertilizing', 'Pest Control'],
      experience: 6,
      contact: '+91 7654321098',
      availability: false,
      dailyWage: 500,
      location: 'Ujjain, MP'
    },
    {
      id: 4,
      name: 'Geeta Patel',
      skills: ['Harvesting', 'Post-harvest handling', 'Storage'],
      experience: 4,
      contact: '+91 6543210987',
      availability: true,
      dailyWage: 380,
      location: 'Ratlam, MP'
    }
  ];

  loading = false;
  selectedLabour: Labour | null = null;

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  viewDetails(labour: Labour): void {
    this.selectedLabour = labour;
  }

  closeDetails(): void {
    this.selectedLabour = null;
  }
}
