import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCatalog } from './navbar-catalog';

describe('NavbarCatalog', () => {
  let component: NavbarCatalog;
  let fixture: ComponentFixture<NavbarCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarCatalog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCatalog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
