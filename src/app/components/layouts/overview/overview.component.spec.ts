import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { OverviewComponent } from './overview.component';
import { TD_LAYOUT_PROVIDERS } from '../../../../platform/core';

describe('Component: LayoutsOverview', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [
    OverviewComponent,
    TD_LAYOUT_PROVIDERS,
  ]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder): void {
    builder = tcb;
  }));

  it('should inject the component', inject([OverviewComponent], (component: OverviewComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(OverviewTestControllerComponent)
      .then((fixture: ComponentFixture<any>) => {
        let query: DebugElement = fixture.debugElement.query(By.directive(OverviewComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  directives: [OverviewComponent],
  selector: 'td-test',
  template: `
    <td-layouts-overview></td-layouts-overview>
  `,
})
class OverviewTestControllerComponent {
}

