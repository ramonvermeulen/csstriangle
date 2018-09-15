import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { DirectionComponent } from './components/generator/direction/direction.component';
import { TypeComponent } from './components/generator/type/type.component';
import { DimensionsComponent } from './components/generator/dimensions/dimensions.component';

/* external library imports */
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorComponent } from './components/generator/color/color.component';
import { VisualPreviewComponent } from './components/generator/visual-preview/visual-preview.component';
import { CodePreviewComponent } from './components/generator/code-preview/code-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneratorComponent,
    DirectionComponent,
    TypeComponent,
    DimensionsComponent,
    ColorComponent,
    VisualPreviewComponent,
    CodePreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
