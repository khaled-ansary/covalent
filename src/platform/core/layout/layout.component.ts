import { Component, Directive, Input, ViewChild, Inject, forwardRef, Renderer2, ElementRef } from '@angular/core';

import { MdSidenav, MdSidenavToggleResult } from '@angular/material';

import { LayoutToggle, ILayoutTogglable } from './layout-toggle.class';

@Directive({
  selector: '[tdLayoutToggle]',
})
export class TdLayoutToggleDirective extends LayoutToggle {
  constructor(@Inject(forwardRef(() => TdLayoutComponent)) layout: TdLayoutComponent,
              renderer: Renderer2,
              elementRef: ElementRef) {
    super(layout, renderer, elementRef);
  }
}

@Component({
  selector: 'td-layout',
  styleUrls: ['./layout.component.scss' ],
  templateUrl: './layout.component.html',
})
export class TdLayoutComponent implements ILayoutTogglable {

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  /**
   * mode?: 'side', 'push' or 'over'
   *
   * The mode or styling of the sidenav.
   * Defaults to "over".
   * See "MdSidenav" documentation for more info.
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input('mode') mode: 'side' | 'push' | 'over' = 'over';

  /**
   * opened?: boolean
   *
   * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
   * Defaults to "false".
   *
   * See "MdSidenav" documentation for more info.
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input('opened') opened: boolean = false;

  /**
   * sidenavWidth?: string
   *
   * Sets the "width" of the sidenav in either "px" or "%"
   * Defaults to "320px".
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input('sidenavWidth') sidenavWidth: string = '320px';

  /**
   * Checks if `ESC` should close the sidenav
   * Should only close it for `push` and `over` modes
   */
  get disableClose(): boolean {
    return this.mode === 'side';
  }

  /**
   * Proxy toggle method to access sidenav from outside (from td-layout template).
   */
  public toggle(): Promise<MdSidenavToggleResult> {
    return this.sidenav.toggle(!this.sidenav.opened);
  }

  /**
   * Proxy open method to access sidenav from outside (from td-layout template).
   */
  public open(): Promise<MdSidenavToggleResult> {
    return this.sidenav.open();
  }

  /**
   * Proxy close method to access sidenav from outside (from td-layout template).
   */
  public close(): Promise<MdSidenavToggleResult> {
    return this.sidenav.close();
  }

}
