// app.module.ts
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [NoopAnimationsModule],
  ...
})

export class FlapperAnimationsModule { }

...
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})

export class FlapperNewsModule { }

import 'hammerjs';
