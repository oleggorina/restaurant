import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimationService } from 'src/app/services/animation.service';
import { fromTop } from 'src/app/services/animations.const';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  animations: [
    fromTop
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationComponent implements OnInit {
  
  reservationForm!: FormGroup;
  @ViewChild('reservationComponent') reservationComponent!: ElementRef;
  private animationStateSubject: BehaviorSubject<string> = new BehaviorSubject('out');
  animationState$: Observable<string> = this.animationStateSubject.asObservable();
  
  constructor(private formBuilder: FormBuilder,
    private animationService: AnimationService) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      person: ['', [Validators.required]],
      timing: ['', [Validators.required]],
      date: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log(this.reservationForm.value);
      this.reservationForm.reset();
    }
  }

  @HostListener('window:scroll', ['$event'])
  OnScroll() {
    this.animationService.onScroll(this.reservationComponent, 200, this.animationStateSubject);
  }
}
