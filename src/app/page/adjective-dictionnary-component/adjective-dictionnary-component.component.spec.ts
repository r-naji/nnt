import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjectiveDictionnaryComponentComponent } from './adjective-dictionnary-component.component';

describe('AdjectiveDictionnaryComponentComponent', () => {
  let component: AdjectiveDictionnaryComponentComponent;
  let fixture: ComponentFixture<AdjectiveDictionnaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjectiveDictionnaryComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdjectiveDictionnaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
