import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candiate } from './candiate';

describe('Candiate', () => {
  let component: Candiate;
  let fixture: ComponentFixture<Candiate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Candiate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Candiate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
