import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactHistoryComponent } from './fact-history.component';

describe('FactHistoryComponent', () => {
  let component: FactHistoryComponent;
  let fixture: ComponentFixture<FactHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
