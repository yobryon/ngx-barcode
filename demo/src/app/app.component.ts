import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div fxLayout="row">
    <div fxLayout="column">
      <md-input-container><textarea mdInput placeholder="bc-value" [(ngModel)]="value"></textarea></md-input-container>
      <md-select placeholder="bc-format" [(ngModel)]="format">
        <md-option *ngFor="let code of codeList" [value]="code">{{code}}</md-option>
      </md-select>
      <md-input-container><input mdInput type="text" placeholder="bc-line-color" [(ngModel)]="lineColor"></md-input-container>
      <md-input-container><input mdInput type="number" placeholder="bc-width" [(ngModel)]="width"></md-input-container>
      <md-input-container><input mdInput type="number" placeholder="bc-height" [(ngModel)]="height"></md-input-container>
      <md-checkbox [(ngModel)]="displayValue">bc-display-value</md-checkbox>
      <md-input-container><input mdInput type="text" placeholder="bc-font-options" [(ngModel)]="fontOptions"></md-input-container>
      <md-input-container><input mdInput type="text" placeholder="bc-font" [(ngModel)]="font"></md-input-container>
    </div>
    <div fxLayout="column">
      <md-input-container><input mdInput type="text" placeholder="bc-text-align" [(ngModel)]="textAlign"></md-input-container>
      <md-input-container><input mdInput type="text" placeholder="bc-text-position" [(ngModel)]="textPosition"></md-input-container>
      <md-input-container><input mdInput type="number" placeholder="bc-text-margin" [(ngModel)]="textMargin"></md-input-container>
      <md-input-container><input mdInput type="number" placeholder="bc-font-size" [(ngModel)]="fontSize"></md-input-container>
      <md-input-container><input mdInput type="text" placeholder="bc-background" [(ngModel)]="background"></md-input-container>
      <md-input-container><input mdInput type="number" placeholder="bc-margin" [(ngModel)]="margin"></md-input-container>
      <md-input-container><input mdInput type="number" placeholder="bc-margin-top" [(ngModel)]="marginTop"></md-input-container>
      <md-input-container><input mdInput type="number" placeholder="bc-margin-bottom" [(ngModel)]="marginBottom"></md-input-container>
      <md-input-container><input mdInput type="number" placeholder="bc-margin-left" [(ngModel)]="marginLeft"></md-input-container>
      <md-input-container><input mdInput type="number" placeholder="bc-margin-right" [(ngModel)]="marginRight"></md-input-container>
    </div>
    <div fxLayout="column">
      <ngx-barcode *ngFor="let bcValue of values"
        [bc-value]="bcValue" 
        [bc-format]="format"
        [bc-line-color]="lineColor"
        [bc-width]="width"
        [bc-height]="height"
        [bc-display-value]="displayValue"
        [bc-font-options]="fontOptions"
        [bc-font]="font"
        [bc-text-align]="textAlign"
        [bc-text-position]="textPosition"
        [bc-text-margin]="textMargin"
        [bc-font-size]="fontSize"
        [bc-background]="background"
        [bc-margin]="margin"
        [bc-margin-top]="marginTop"
        [bc-margin-bottom]="marginBottom"
        [bc-margin-left]="marginLeft"
        [bc-margin-right]="marginRight"
      ></ngx-barcode>
    </div>
  </div>

  `,
  styles: []
})
export class AppComponent {
  value = 'someValue12340987';
  format = 'CODE128';
  lineColor = '#000000';
  width = 2;
  height = 100;
  displayValue = true;
  fontOptions = '';
  font = 'monospace';
  textAlign = 'center';
  textPosition = 'bottom';
  textMargin = 2;
  fontSize = 20;
  background = '#ffffff';
  margin = 10;
  marginTop = 10;
  marginBottom = 10;
  marginLeft = 10;
  marginRight = 10;

  get values(): string[] {
    return this.value.split('\n');
  }
  codeList: string[] = [
    '', 'CODE128',
    'CODE128A', 'CODE128B', 'CODE128C',
    'UPC', 'EAN8', 'EAN5', 'EAN2',
    'CODE39',
    'ITF14',
    'MSI', 'MSI10', 'MSI11', 'MSI1010', 'MSI1110',
    'pharmacode',
    'codabar'
  ];
}
