import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ExampleChapterComponent } from './example-chapter/example-chapter.component';

@NgModule({
  declarations: [
    ExampleChapterComponent,
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    ExampleChapterComponent,
  ]
})
export class ExampleModule {}