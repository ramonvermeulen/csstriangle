import { Component, OnInit } from '@angular/core';
import { CssGeneratorService } from '../../../services/cssgenerator/cssgenerator.service';

@Component({
  selector: 'dimensions-component',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent implements OnInit {
  public type: string;
  public direction: string;

  public width: number;
  public height: number;
  public left: number;
  public right: number;
  public top: number;
  public bottom: number;

  private topDirections: Array<string> = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
  private leftRightDirections: Array<string> = ['left', 'right'];


  constructor(private cssGenerator: CssGeneratorService) { }

  ngOnInit() {
    this.cssGenerator.type.subscribe(type => this.type = type)
    this.cssGenerator.direction.subscribe(direction => this.direction = direction)

    this.cssGenerator.width.subscribe(width => this.width = width)
    this.cssGenerator.height.subscribe(height => this.height = height)
    this.cssGenerator.left.subscribe(left => this.left = left)
    this.cssGenerator.right.subscribe(right => this.right = right)
    this.cssGenerator.top.subscribe(top => this.top = top)
    this.cssGenerator.bottom.subscribe(bottom => this.bottom = bottom)
  }

  onWidthChange() {
    this.cssGenerator.changeWidthInstance(this.checkForNullAndMaxValues(this.width));
  }

  onHeightChange() {
    this.cssGenerator.changeHeightInstance(this.checkForNullAndMaxValues(this.height));
  }

  onLeftChange() {
    this.cssGenerator.changeLeftInstance(this.checkForNullAndMaxValues(this.left));
  }

  onRightChange() {
    this.cssGenerator.changeRightInstance(this.checkForNullAndMaxValues(this.right));
  }

  onTopChange() {
    this.cssGenerator.changeTopInstance(this.checkForNullAndMaxValues(this.top));
  }

  onBottomChange() {
    this.cssGenerator.changeBottomInstance(this.checkForNullAndMaxValues(this.bottom));
  }

  checkForNullAndMaxValues(value) {
    if(value == null) {
      return '0';
    }
    if(parseFloat(value) > 500) {
      return 500;
    }
    return value;
  }

  getWidthDisabled() {
    if (this.type == 'scalene' && !this.topDirections.includes(this.direction) && !this.leftRightDirections.includes(this.direction)) {
      return false;
    } else {
      return null;
    }
  }

  getHeightDisabled() {
    if (this.type == 'equilateral' || this.type == 'scalene' && this.leftRightDirections.includes(this.direction)) {
      return true;
    } else {
      return null;
    }
  }

  getLeftRightDisabled() {
    if (this.type == 'scalene' && !this.topDirections.includes(this.direction) && !this.leftRightDirections.includes(this.direction)) {
      return null;
    } else {
      return true;
    }
  }

  getTopBottomDisabled() {
    if (this.type == 'scalene' && this.leftRightDirections.includes(this.direction)) {
      return null;
    } else {
      return true;
    }
  }


}
