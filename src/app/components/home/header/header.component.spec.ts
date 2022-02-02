import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalAuthService } from 'src/app/auth.service';
import { TodosService } from 'src/app/backend/services';
import { TodoService } from 'src/app/todo.service';

import { HeaderComponent } from './header.component';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const serviceStub = {
    user: () => { return { subscribe: () => { } }; },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: GlobalAuthService, useValue: serviceStub },
        { provide: TodosService, useValue: TodosService },
        { provide: TodoService },
      ],
    });

    fixture = TestBed.createComponent(HeaderComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();

  });



  it('should create', () => {

    expect(component).toBeDefined();
  });
});
