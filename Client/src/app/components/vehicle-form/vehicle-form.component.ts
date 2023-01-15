import { Component, OnInit } from '@angular/core';
import { MakeService } from 'src/app/services/make.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss']
})
export class VehicleFormComponent implements OnInit {
  makes: any[] = [];
  models: any[] = [];
  vehicle: any = {};

  constructor(private makeService: MakeService) { }

  ngOnInit(): void {
    this.makeService.getMakes().subscribe(makes => {
      this.makes = makes;
      console.log("Makes: ", this.makes);
    });
  }

  onMakeChange() {
    console.log("Vehicle: ", this.vehicle);
    let selectedMake = this.makes.find(m => m.id == this.vehicle.make);
    this.models = selectedMake ? selectedMake.models : [];
  }
}
