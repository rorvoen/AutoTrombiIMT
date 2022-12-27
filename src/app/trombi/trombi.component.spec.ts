import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrombiComponent } from './trombi.component';

describe('TrombiComponent', () => {
  let component: TrombiComponent;
  let fixture: ComponentFixture<TrombiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrombiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrombiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
