import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Apartment } from 'src/app/shared/models/apartment';
import { ApartmentService } from 'src/app/shared/services/apartment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-apartment-form',
  templateUrl: './add-apartment-form.component.html',
  styleUrls: ['./add-apartment-form.component.scss']
})
export class AddApartmentFormComponent {
  apartmentForm: FormGroup;
  type: string = '';
  description: string = '';
  price: number = 0;
  amount: number = 0;
  image: SafeResourceUrl = '';
  typeImg: string = '';
  dataImg: File = new File([''], "oldImage.");

  constructor(private apartmentService: ApartmentService) {
    this.apartmentForm = this.createForm();
  }

  get typeApartment() { return this.apartmentForm.get('type'); }
  get descriptionApartment() { return this.apartmentForm.get('description'); }
  get priceApartment() { return this.apartmentForm.get('price'); }
  get amountApartment() { return this.apartmentForm.get('amount'); }
  get fileApartment() { return this.apartmentForm.get('file'); }


  createForm() {
    return new FormGroup({
      type: new FormControl('', [Validators.required, Validators.minLength(5)]),
      file: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      price: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(6), Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]),
      amount: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('^[0-9]*$')]),
    });
  }


  ngOnInit(): void { }

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

  submit() {
    if (this.apartmentForm.valid) {
      // console.log(this.amount + ' - ' + this.type + ' - ' + this.description + ' - ' + this.price)
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
          this.apartmentService.postApartment(apartmentData, this.dataImg);
          Swal.fire(
            'Done!',
            'Your apartment has been created correctly.',
            'success'
          ).then(function () {
            window.location.href = 'admin-home';
          })
        }
      })
    }
  }
}

