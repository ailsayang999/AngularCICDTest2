import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent（最簡單示範）', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // ✅ standalone 元件，直接 import 就好
    }).compileComponents();
  });

  it('應該能被建立', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('畫面應該出現 Hello, AngularCICDTest', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // 讓模板渲染
    const el: HTMLElement = fixture.nativeElement;
    // 你的 app.component.html 有 <h1>Hello, {{ title }}</h1>
    expect(el.querySelector('h1')?.textContent).toContain(
      'Hello, AngularCICDTest'
    );
  });
});
