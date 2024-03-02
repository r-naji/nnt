import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbDictionnaryComponent } from './verb-dictionnary.component';

describe('VerbDictionnaryComponent', () => {
  let component: VerbDictionnaryComponent;
  let fixture: ComponentFixture<VerbDictionnaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerbDictionnaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerbDictionnaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
