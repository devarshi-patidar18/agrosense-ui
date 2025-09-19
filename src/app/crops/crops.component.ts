import { Component, OnInit } from '@angular/core';

interface Crop {
  id: number;
  name: string;
  type: string;
  season: string;
  yield: number;
  duration: string;
  waterRequirement: string;
  soilType: string;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css']
})
export class CropsComponent implements OnInit {
  crops: Crop[] = [
    {
      id: 1,
      name: 'Wheat',
      type: 'Cereal',
      season: 'Rabi',
      yield: 4.5,
      duration: '120-135 days',
      waterRequirement: 'Moderate',
      soilType: 'Loamy',
      imageUrl: 'assets/images/wheat.jpg',
      description: 'Major winter crop in India, requires cool climate during growth.'
    },
    {
      id: 2,
      name: 'Soyabean',
      type: 'Legume',
      season: 'Kharif',
      yield: 2.8,
      duration: '90-120 days',
      waterRequirement: 'Medium',
      soilType: 'Well-drained',
      imageUrl: 'assets/images/soyabean.jpg',
      description: 'Important oilseed crop, good for soil health.'
    },
    {
      id: 3,
      name: 'Cotton',
      type: 'Fiber',
      season: 'Kharif',
      yield: 2.2,
      duration: '150-180 days',
      waterRequirement: 'High',
      soilType: 'Black soil',
      imageUrl: './assets/images/cotton.jpg',
      description: 'Major cash crop, requires warm climate.'
    },
    {
      id: 4,
      name: 'Rice',
      type: 'Cereal',
      season: 'Kharif',
      yield: 3.5,
      duration: '115-140 days',
      waterRequirement: 'High',
      soilType: 'Clayey',
      imageUrl: 'assets/images/rice.jpg',
      description: 'Staple food crop, requires standing water.'
    }
  ];

  selectedCrop: Crop | null = null;
  showAddModal = false;
  showEditModal = false;

  ngOnInit(): void {}

  viewAllCrops(): void {
    this.selectedCrop = null;
  }

  viewCropDetails(crop: Crop): void {
    this.selectedCrop = crop;
  }

  addCrop(): void {
    this.showAddModal = true;
  }

  editCrop(crop: Crop): void {
    this.selectedCrop = crop;
    this.showEditModal = true;
  }

  deleteCrop(id: number): void {
    this.crops = this.crops.filter(crop => crop.id !== id);
  }

  closeModal(): void {
    this.showAddModal = false;
    this.showEditModal = false;
    this.selectedCrop = null;
  }
}