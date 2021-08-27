import { NgModule } from '@angular/core';
import { ExampleChapterComponent } from './example-chapter/example-chapter.component';

@NgModule({
  declarations: [
    ExampleChapterComponent,
  ],
  exports: [
    ExampleChapterComponent,
  ]
})
export class ExampleModule {}