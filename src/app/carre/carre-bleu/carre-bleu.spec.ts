import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarreBleu } from './carre-bleu';
describe('CarreBleu', () => {
  let component: CarreBleu;
  let fixture: ComponentFixture<CarreBleu>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarreBleu]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CarreBleu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
