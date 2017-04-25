import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBarcodeComponent } from './ngx-barcode.component';

export * from './ngx-barcode.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxBarcodeComponent,

  ],
  exports: [
    NgxBarcodeComponent,
  ]
})
export class NgxBarcodeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxBarcodeModule,
      providers: []
    };
  }
}
