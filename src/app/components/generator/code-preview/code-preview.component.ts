import { Component, OnInit } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';

@Component({
  selector: 'code-preview-component',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.css']
})
export class CodePreviewComponent implements OnInit {
  constructor(private cssGenerator: CssGeneratorService) { }

  ngOnInit() {
    
  }


}
