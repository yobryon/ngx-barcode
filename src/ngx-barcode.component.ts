import { Component, Input, OnChanges, ViewChild, Renderer2, ElementRef } from '@angular/core';

declare var require: any;

let jsbarcode = require('jsbarcode');

@Component({
  selector: 'ngx-barcode',
  template: `<div #bcElement [class]="cssClass"></div>`,
  styles: []
})
export class NgxBarcodeComponent implements OnChanges {

  // @Input() elementType: "svg"|"img"|"canvas"="svg";
  @Input('bc-class') cssClass:string = "barcode"; // this should be done more elegantly

  @Input('bc-format') format: string = 'CODE128';
  @Input('bc-line-color') lineColor: string = '#000000';
  @Input('bc-width') width: number = 2;
  @Input('bc-height') height: number = 100;
  @Input('bc-display-value') displayValue: boolean = false;
  @Input('bc-font-options') fontOptions: string = '';
  @Input('bc-font') font: string = 'monospace';
  @Input('bc-text-align') textAlign: string = 'center';
  @Input('bc-text-position') textPosition: string = 'bottom';
  @Input('bc-text-margin') textMargin: number = 2;
  @Input('bc-font-size') fontSize: number = 20;
  @Input('bc-background') background: string = '#ffffff';
  @Input('bc-margin') margin: number = 10;
  @Input('bc-margin-top') marginTop: number = 10;
  @Input('bc-margin-bottom') marginBottom: number = 10;
  @Input('bc-margin-left') marginLeft: number = 10;
  @Input('bc-margin-right') marginRight: number = 10;
  @Input('bc-valid') valid: ()=>boolean = ()=>true;
  @Input('bc-value') value: string="";
  
  @ViewChild('bcElement') bcElement:ElementRef;

  get options() {
    return {
      format: this.format,
      lineColor: this.lineColor,
      width: this.width,
      height: this.height,
      displayValue: this.displayValue,
      fontOptions: this.fontOptions,
      font: this.font,
      textAlign: this.textAlign,
      textPosition: this.textPosition,
      textMargin: this.textMargin,
      fontSize: this.fontSize,
      background: this.background,
      margin: this.margin,
      marginTop: this.marginTop,
      marginBottom: this.marginBottom,
      marginLeft: this.marginLeft,
      marginRight: this.marginRight,
      valid: this.valid,
    }
  }
  constructor(private renderer:Renderer2) { }

  ngOnChanges() {
    this.createBarcode();
  }

  createBarcode() {
    if(!this.value) return;
    let element:SVGElement = this.renderer.createElement("svg","svg") as SVGElement;

    let bc = jsbarcode(element,this.value,this.options);
    this.bcElement.nativeElement.innerHTML = element.outerHTML;
  }

}