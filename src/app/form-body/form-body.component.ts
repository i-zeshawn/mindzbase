import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from 'sweetalert2'
import {PostService} from "../services/post.service";

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
  options: any = {
    carForm: false,
    four_by_four: false,
    abs: false,
    adaptive_lights: false,
    adaptive_cruise_control: false,
    airbags: false,
    air_conditioning: false,
    alarm: false,
    upholstery_leather: false,
    bluetooth: false,
    onboard_computer: false,
    central_locking: false,
    climate_control: false,
    cruise_control: false,
    blind_spot_detection: false,
    electric_tailgate: false,
    electric_door_mirrors: false,
    electric_seat_adjustment: false,
    electronic_stability_program: false,
    emergency_brake_assist: false,
    isofix: false,
    keyless_entry: false,
    alloy_wheels: false,
    metallic_paint: false,
    fog_lights: false,
    navigation_system: false,
    open_roof: false,
    panaroma_roof: false,
    parking_assist: false,
    parking_camera: false,
    parking_sensor: false,
    radio: false,
    sliding_door: false,
    sports_package: false,
    sports_seats: false,
    voice_control: false,
    immobilizer: false,
    start_stop_system: false,
    massage_chair: false,
    seat_ventilation: false,
    seat_heating: false,
    steering_wheel_heating: false,
    traction_control: false,
    trailer_hitch: false,
    usb: false,
    traffic_sign_recognition: false,
    fatigue_detection: false,
    heated_door_mirrors: false,
    xenon_lighting: false,
  }

  constructor(private formBuilder: FormBuilder, private changeDetector: ChangeDetectorRef, private postService: PostService) {
  }

  ngOnInit(): void {

    this.createForm();

  }

  private createForm() {
    this.carForm = this.formBuilder.group({
      category_id: [1],
      title: ['', Validators.required],
      description: ['', Validators.required],
      transmission: ['', Validators.required],
      fuel_type: ['', Validators.required],
      built_year: [new Date(), Validators.required],
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

  addCar() {
    this.changeDetector.detectChanges();

    this.carForm.controls['options'].setValue(this.options);

    this.postService.createPost(this.carForm.value).subscribe((data: any) => {
      if (data.success) {
        Swal.fire({
          title: 'Success!',
          text: data.message,
          icon: 'success',
        })
      } else {
        Swal.fire({
          title: 'Error!',
          text: data.message,
          icon: 'error',
        })
      }
    }, (error) => {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
      })
    });

  }
}
