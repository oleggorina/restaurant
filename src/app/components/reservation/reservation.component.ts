import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationComponent implements OnInit, AfterViewInit {
  
  reservationForm!: FormGroup;
  @ViewChild('form') form!: ElementRef;
  timeOut: any;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      person: ['', [Validators.required]],
      timing: ['', [Validators.required]],
      date: ['', [Validators.required]]
    })
  }

  ngAfterViewInit(): void {
    // this.initAnimation();
  }

  initAnimation(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(this.form.nativeElement, {
      opacity: 0,
      scrollTrigger: {
        trigger: this.form.nativeElement,
        start: 'top 90%',
        end: 'bottom 75%',
        scrub: true
      }
    })
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log(this.reservationForm.value);
      this.reservationForm.reset();
    }
  }
}
