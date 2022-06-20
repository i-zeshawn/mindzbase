import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2'
import {Options} from "../models/Options";

@Component({
  selector: 'app-form-body',
  templateUrl: './form-body.component.html',
  styleUrls: ['./form-body.component.css']
})
export class FormBodyComponent implements OnInit {
  tiny_config: any = {
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      ' media table paste code help wordcount'
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help'
  };

  carForm: any;

  options = new Options();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.createForm();
    // Swal.fire({
    //   title: 'Error!',
    //   text: 'Do you want to continue',
    //   icon: 'info',
    //   confirmButtonText: 'OK'
    // })
  }

  private createForm() {
    this.carForm = this.formBuilder.group({
      category_id: [1],
      title: ['', Validators.required],
      description: ['', Validators.required],
      transmission: ['', Validators.required],
      fuel_type: ['', Validators.required],
      built_year: ['', Validators.required],
      color: [''],
      mileage: [''],
      maintained_by_company: [''],
      price_type: [],
      price: [],
      name: [''],
      email: [''],
      phone_number: [''],
      show_whatsapp: [0],
      whatsapp: [],
      city: [''],
      area: [''],
      options: []

    })
  }
}
