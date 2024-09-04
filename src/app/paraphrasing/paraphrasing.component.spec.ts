import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaphrasingComponent } from './paraphrasing.component';

describe('ParaphrasingComponent', () => {
  let component: ParaphrasingComponent;
  let fixture: ComponentFixture<ParaphrasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParaphrasingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParaphrasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
