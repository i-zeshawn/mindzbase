import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
  }

}
