import { Component, OnInit, OnChanges } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';

@Component({
  selector: 'code-preview-component',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.css']
})
export class CodePreviewComponent implements OnInit {
  private borderColor: string;
  private borderWidth: string;
  
  constructor(private cssGenerator: CssGeneratorService) { }

  ngOnInit() {
    this.cssGenerator.borderColor.subscribe(borderColor => this.borderColor = borderColor)
    this.cssGenerator.borderWidth.subscribe(borderWidth => this.borderWidth = borderWidth)
  }

  getCodePreview() {
    let styles: {} = {
      'display': 'block',
      'width': '0',
      'height': '0',
      'border-style':'solid',
      'border-width': this.borderWidth,
      'border-color': this.borderColor
    };
    let codePreview = '.triangle {\n';
    for(let key in styles) {
      codePreview += '\t' + key + ': ' + styles[key] + ';\n';
    }
    codePreview += '}'
    return codePreview
  }

}
