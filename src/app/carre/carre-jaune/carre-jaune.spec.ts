import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarreJaune } from './carre-jaune';
describe('CarreJaune', () => {
  let component: CarreJaune;
  let fixture: ComponentFixture<CarreJaune>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarreJaune]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CarreJaune);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
