<div align="center">
  <img src="https://cdn.rawgit.com/yobryon/ngx-barcode/master/docs/assets/ngx-barcode.svg" width="200px" alt="ngx-barcode">
  <h1 align="center">ngx-barcode</h1>
  <p>A barcode component for Angular4+.</p>
</div>

___

An angular component for Angular 4+ for creating 1-D barcodes based on [Lindell's JsBarcode](https://github.com/lindell/JsBarcode).

## Demo 
Basic [demo](https://yobryon.github.io/ngx-barcode/demo/).

## Features
- supports all barcode formats provided by JsBarcode
  - CODE128
  - EAN
  - CODE39
  - ITF-14
  - MSI
  - Pharmacode
  - Codabar

## Installation

To use ngx-barcode in your project, install it via npm:

```bash
$ npm install ngx-barcode --save
```

## Usage

Import the NgxBarcodeModule into your desired module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import ngx-barcode module
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxBarcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use the ngx-barcode component in your Angular application:

```xml
<!-- Adding a barcode in app.component.html -->
<h1>
  {{title}}
</h1>
<ngx-barcode [bc-value]="value" [bc-display-value]="true"></ngx-barcode>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Bryon Williams](mailto:bryon.williams@live.com)
