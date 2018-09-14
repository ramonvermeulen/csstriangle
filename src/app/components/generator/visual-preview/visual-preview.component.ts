import { Component, OnInit } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';

@Component({
  selector: 'visual-preview-component',
  templateUrl: './visual-preview.component.html',
  styleUrls: ['./visual-preview.component.css']
})
export class VisualPreviewComponent implements OnInit {
  private borderWidth: string;
  private borderColor: string;
  private triangleStyles: { [id: string] : string } = {};

  constructor(private cssGenerator: CssGeneratorService) { }

  ngOnInit() {
    this.cssGenerator.borderWidth.subscribe(borderWidth => this.borderWidth = borderWidth)
    this.cssGenerator.borderColor.subscribe(borderColor => this.borderColor = borderColor)
  }


  getStyles() {
    let styles = {
      'border-color': this.borderColor,
      'border-width': this.borderWidth
    }
    console.log(styles)
    return styles;
  }

}
