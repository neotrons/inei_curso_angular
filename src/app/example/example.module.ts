import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ExampleChapterComponent } from './example-chapter/example-chapter.component';
import { ExampleArtifactComponent } from './example-artifact/example-artifact.component';

@NgModule({
  declarations: [
    ExampleChapterComponent,
    ExampleArtifactComponent,
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    ExampleChapterComponent,
  ]
})
export class ExampleModule {}