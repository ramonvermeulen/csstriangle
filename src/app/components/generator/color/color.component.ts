import { Component, OnInit } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';

@Component({
  selector: 'color-component',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  public color: string;
  public rgb: boolean = true;

  constructor(private cssGenerator: CssGeneratorService) { }

  ngOnInit() {
    this.cssGenerator.color.subscribe(color => this.color = color)
  }

  onColorChange() {
      this.cssGenerator.changeColorInstance(this.color)
  }

}
