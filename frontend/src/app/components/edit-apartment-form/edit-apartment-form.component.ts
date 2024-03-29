import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/shared/models/apartment';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import { ReportsService } from 'src/app/shared/services/reports.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-apartment-form',
  templateUrl: './edit-apartment-form.component.html',
  styleUrls: ['./edit-apartment-form.component.scss']
})
export class EditApartmentFormComponent implements OnInit {

  apartmentForm: FormGroup;
  type: string = '';
  description: string = '';
  price: number = 0;
  amount: number = 0;
  image: SafeResourceUrl = '';
  typeImg: string = '';
  dataImg: File = new File([''], "oldImage.");

  constructor(private activatedRoute: ActivatedRoute, private apartmentService: ApartmentService, private reportService: ReportsService) {
    this.apartmentForm = this.createForm();
  }

  get typeApartment() { return this.apartmentForm.get('type'); }
  get descriptionApartment() { return this.apartmentForm.get('description'); }
  get priceApartment() { return this.apartmentForm.get('price'); }
  get amountApartment() { return this.apartmentForm.get('amount'); }


  createForm() {
    return new FormGroup({
      type: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      price: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(6), Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]),
      amount: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^[0-9]*$')]),
    });
  }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    let apartmentData = this.apartmentService.getApartment(id);
    apartmentData.forEach(data => {
      this.type = data.type;
      this.description = data.description;
      this.amount = data.amount;
      this.price = data.price;
      this.image = data.image;
      this.typeImg = data.typeImg!;
    })
  }

  file(event: any) {
    const file = event.target.files[0];
    this.dataImg = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let base64Data = (reader.result as string).split(';');
      let typeImage = base64Data[0].split(':');
      let base64 = base64Data[1].split(',')
      this.image = base64[1];
      this.typeImg = typeImage[1];

    };
  }

  delete() {
    const id = this.activatedRoute.snapshot.params['id'];
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DAD2BC',
      cancelButtonColor: '#69747C',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apartmentService.deleteAparment(id);
        Swal.fire(
          'Done!',
          'Your apartment has been deleted correctly.',
          'success'
        ).then(function () {
          window.location.href = 'admin-home';
        })
      }
    })
  }

  submit() {
    if (this.apartmentForm.valid) {
      const id = this.activatedRoute.snapshot.params['id'];
      let apartmentData: Apartment = { type: this.type, amount: this.amount, description: this.description, price: this.price, image: '' }
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DAD2BC',
        cancelButtonColor: '#69747C',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          if (this.dataImg.name != "oldImage.") {
            this.apartmentService.putApartment(apartmentData, id, this.dataImg);
          } else {
            this.apartmentService.putApartment(apartmentData, id);
          }
          Swal.fire(
            'Done!',
            'Your apartment has been updated correctly.',
            'success'
          ).then(function () {
            window.location.href = 'admin-home';
          })
        }
      })
    }
  }

  printReportUsage(){
    Swal.fire({
      title: 'Would you like to print a usage report?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#DAD2BC',
      cancelButtonColor: '#69747C',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        const id = this.activatedRoute.snapshot.params['id'];
        this.reportService.getApartmwntUsage(id);
        Swal.fire(
          'Done!',
          'Your report has been printed correctly.',
          'success'
        ).then(function () {
          window.location.href = 'admin-home';
        })
      }
    })
  }
}
