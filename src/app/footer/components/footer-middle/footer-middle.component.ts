import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer-middle',
  templateUrl: './footer-middle.component.html',
  styleUrls: ['./footer-middle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterMiddleComponent implements OnInit {

  newsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    if (this.newsForm.valid) {
      console.log(this.newsForm.value);
      this.newsForm.reset();
    }
  }
}
