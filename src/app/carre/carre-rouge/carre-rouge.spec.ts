import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarreRouge } from './carre-rouge';
describe('CarreRouge', () => {
  let component: CarreRouge;
  let fixture: ComponentFixture<CarreRouge>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarreRouge]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CarreRouge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
