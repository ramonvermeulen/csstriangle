import { Component, OnInit, ViewChild } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'code-preview-component',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.css']
})
export class CodePreviewComponent implements OnInit {
  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;
  private borderColor: string;
  private borderWidth: string;
  
  constructor(private cssGenerator: CssGeneratorService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.toastrService.overlayContainer = this.toastContainer
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

  onCopyToClipboardSucces() {
    this.toastrService.success('Successfully copied styles to you clipboard!', 'Awesome!', {
      timeOut: 4000
    })
  }

}
