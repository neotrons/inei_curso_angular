import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { ExampleChapterComponent } from './example-chapter/example-chapter.component';
import { ExampleArtifactComponent } from './example-artifact/example-artifact.component';

@NgModule({
  declarations: [
    ExampleChapterComponent,
    ExampleArtifactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    ExampleChapterComponent,
  ]
})
export class ExampleModule {}