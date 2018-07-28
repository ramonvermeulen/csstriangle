import { Component, OnInit } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';

@Component({
  selector: 'dimensions-component',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
  private type: string;

  private width: number;
  private height: number;
  private left: number;
  private right: number;
  private top: number;
  private bottom: number;


  constructor(private cssGenerator: CssGeneratorService) { }

  ngOnInit() {
    this.cssGenerator.type.subscribe(type => this.type = type)

    this.cssGenerator.width.subscribe(width => this.width = width)
    this.cssGenerator.height.subscribe(height => this.height = height)
    this.cssGenerator.left.subscribe(left => this.left = left)
    this.cssGenerator.right.subscribe(right => this.right = right)
    this.cssGenerator.top.subscribe(top => this.top = top)
    this.cssGenerator.bottom.subscribe(bottom => this.bottom = bottom)
  }

  getWidthDisabled() {
    if (this.type == 'scalene') {
      return false;
    } else {
      return null
    }
  }

  getHeightDisabled() {
    if (this.type == 'equilateral') {
      return true;
    } else {
      return null;
    }
  }

  getLeftDisabled() {
    if (this.type == 'scalene') {
      return null;
    } else {
      return true;
    }
  }

  getRightDisabled() {
    if (this.type == 'scalene') {
      return null;
    } else {
      return true;
    }
  }

}
