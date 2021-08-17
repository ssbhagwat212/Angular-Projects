import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedmusicComponent } from './detailedmusic.component';

describe('DetailedmusicComponent', () => {
  let component: DetailedmusicComponent;
  let fixture: ComponentFixture<DetailedmusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedmusicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
