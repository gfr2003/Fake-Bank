import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

registerLocaleData(localePt, 'pt');
@NgModule({
  declarations: [AppComponent, NewTransferComponent, ExtratoComponent],
  imports: [BrowserModule, FormsModule, NgxMaskModule.forRoot()],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
