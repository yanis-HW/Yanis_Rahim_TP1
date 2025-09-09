import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarreVert } from './carre-vert';
describe('CarreVert', () => {
  let component: CarreVert;
  let fixture: ComponentFixture<CarreVert>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarreVert]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CarreVert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
