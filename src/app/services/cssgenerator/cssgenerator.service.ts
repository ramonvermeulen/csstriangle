import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class CssGeneratorService {
    private directionInstance = new BehaviorSubject<string>("top");
    private typeInstance = new BehaviorSubject<string>("equilateral");
    private widthInstance = new BehaviorSubject<number>(150);
    private heightInstance = new BehaviorSubject<number>(150);
    private leftInstance = new BehaviorSubject<number>(75);
    private rightInstance = new BehaviorSubject<number>(75);
    private topInstance = new BehaviorSubject<number>(50);
    private bottomInstance = new BehaviorSubject<number>(50);
    private colorInstance = new BehaviorSubject<string>("#b42157")

    /* generated instances */
    private borderWidthInstance = new BehaviorSubject<string>("0 75px 129.9px 75px")
    private borderColorInstance = new BehaviorSubject<string>("transparent transparent #b42157 transparent")


    direction = this.directionInstance.asObservable();
    type = this.typeInstance.asObservable();
    width = this.widthInstance.asObservable();
    height = this.heightInstance.asObservable();
    left = this.leftInstance.asObservable();
    right = this.rightInstance.asObservable();
    top = this.topInstance.asObservable();
    bottom = this.bottomInstance.asObservable();
    color = this.colorInstance.asObservable();

    /* generated observables */
    borderWidth = this.borderWidthInstance.asObservable();
    borderColor = this.borderColorInstance.asObservable();

    constructor() { }

    changeDirectionInstance(direction: string) {
        this.directionInstance.next(direction)
        this.updateAll()
    }

    changeTypeInstance(type: string) {
        this.typeInstance.next(type)
        this.updateAll()
    }

    changeWidthInstance(width: number) {
        this.widthInstance.next(width)
        this.updateAll()
    }

    changeHeightInstance(height: number) {
        this.heightInstance.next(height)
        this.updateAll()
    }

    changeLeftInstance(left: number) {
        this.leftInstance.next(left)
        this.updateAll()
    }

    changeRightInstance(right: number) {
        this.rightInstance.next(right)
        this.updateAll()
    }

    changeTopInstance(top: number) {
        this.topInstance.next(top)
        this.updateAll()
    }

    changeBottomInstance(bottom: number) {
        this.bottomInstance.next(bottom)
        this.updateAll()
    }

    changeColorInstance(color: string) {
        this.colorInstance.next(color)
        this.updateAll()
    }

    updateAll() {
        this.updateBorderWidth()
        this.updateBorderColor()
        this.updateCssOutput()
    }

    updateBorderWidth() {
        switch(this.typeInstance.getValue()) {
            case "equilateral": {
                var top, right, bottom, left;
                switch(this.directionInstance.getValue()){
                    case "top": {
                        top = 0;
                        right = (this.widthInstance.getValue() / 2).toFixed(1);
                        bottom = (Math.sqrt(3)/2 * this.widthInstance.getValue()).toFixed(1);
                        left = (this.widthInstance.getValue() / 2).toFixed(1);
                        break;
                    }
                    case "bottom": {
                        top = (Math.sqrt(3)/2 * this.widthInstance.getValue()).toFixed(1);
                        right = (this.widthInstance.getValue() / 2).toFixed(1);
                        bottom = 0;
                        left = (this.widthInstance.getValue() / 2).toFixed(1);
                        break;
                    }
                    case "left": {
                        top = (this.widthInstance.getValue() / 2).toFixed(1);
                        right = (this.widthInstance.getValue()).toFixed(1);
                        bottom = (this.widthInstance.getValue() / 2).toFixed(1);
                        left = 0;
                        break;
                    }
                    case "right": {
                        top = (this.widthInstance.getValue() / 2).toFixed(1);
                        right = 0
                        bottom = (this.widthInstance.getValue() / 2).toFixed(1);
                        left = (this.widthInstance.getValue()).toFixed(1);
                        break;
                    }
                }
                this.borderWidthInstance.next(`${top}px ${right}px ${bottom}px ${left}px`)
                break;
            }
            case "isosceles": {
                var top, right, bottom, left
                switch(this.directionInstance.getValue()){
                    case "top": {
                        top = 0;
                        right = (this.widthInstance.getValue() / 2).toFixed(1);
                        bottom = this.heightInstance.getValue().toFixed(1)
                        left = (this.widthInstance.getValue() / 2).toFixed(1);
                        break;
                    }
                    case "bottom": {
                        top = (this.heightInstance.getValue()).toFixed(1);
                        right = (this.widthInstance.getValue() / 2).toFixed(1);
                        bottom = 0;
                        left = (this.widthInstance.getValue() / 2).toFixed(1);
                        break;
                    }
                    case "left": {
                        top = (this.widthInstance.getValue() / 2).toFixed(1);
                        right = (this.heightInstance.getValue()).toFixed(1);
                        bottom = (this.widthInstance.getValue() / 2).toFixed(1);
                        left = 0;
                        break;
                    }
                    case "right": {
                        top = (this.widthInstance.getValue() / 2).toFixed(1);
                        right = 0
                        bottom = (this.widthInstance.getValue() / 2).toFixed(1);
                        left = (this.heightInstance.getValue()).toFixed(1);
                        break;
                    }
                    case "top-right": {
                        top = 0;
                        right = (this.widthInstance.getValue()).toFixed(1);
                        bottom = (this.heightInstance.getValue()).toFixed(1);
                        left = 0;
                        break;
                    }
                    case "top-left": {
                        top = (this.heightInstance.getValue()).toFixed(1);
                        right = (this.widthInstance.getValue()).toFixed(1);
                        bottom = 0;
                        left = 0;
                        break;
                    }
                    case "bottom-left": {
                        top = (this.heightInstance.getValue()).toFixed(1);
                        right = 0;
                        bottom = 0;
                        left = (this.widthInstance.getValue()).toFixed(1);
                        break;
                    }
                    case "bottom-right": {
                        top = 0;
                        right = 0;
                        bottom = (this.heightInstance.getValue()).toFixed(1);
                        left = (this.widthInstance.getValue()).toFixed(1);
                        break;
                    }
                }
                this.borderWidthInstance.next(`${top}px ${right}px ${bottom}px ${left}px`)
                break;
            }
            case "scalene": {
                var top, right, bottom, left
                switch(this.directionInstance.getValue()){
                    case "top": {
                        top = 0;
                        right = (this.rightInstance.getValue()).toFixed(1);
                        bottom = (this.heightInstance.getValue()).toFixed(1);
                        left = (this.leftInstance.getValue()).toFixed(1);
                        break;
                    }
                    case "bottom": {
                        top = (this.heightInstance.getValue()).toFixed(1);
                        right = (this.rightInstance.getValue()).toFixed(1);
                        bottom = 0;
                        left = (this.leftInstance.getValue()).toFixed(1);
                        break;
                    }
                    case "left": {
                        top = (this.topInstance.getValue()).toFixed(1);
                        right = (this.widthInstance.getValue()).toFixed(1);
                        bottom = (this.bottomInstance.getValue()).toFixed(1);
                        left = 0;
                        break;
                    }
                    case "right": {
                        top = (this.topInstance.getValue()).toFixed(1);
                        right = 0
                        bottom = (this.bottomInstance.getValue()).toFixed(1);
                        left = (this.widthInstance.getValue()).toFixed(1);
                        break;
                    }
                    case "top-right": {
                        top = 0;
                        right = (this.widthInstance.getValue()).toFixed(1);
                        bottom = (this.heightInstance.getValue()).toFixed(1);
                        left = 0;
                        break;
                    }
                    case "top-left": {
                        top = (this.heightInstance.getValue()).toFixed(1);
                        right = (this.widthInstance.getValue()).toFixed(1);
                        bottom = 0;
                        left = 0;
                        break;
                    }
                    case "bottom-left": {
                        top = (this.heightInstance.getValue()).toFixed(1);
                        right = 0;
                        bottom = 0;
                        left = (this.widthInstance.getValue()).toFixed(1);
                        break;
                    }
                    case "bottom-right": {
                        top = 0;
                        right = 0;
                        bottom = (this.heightInstance.getValue()).toFixed(1);
                        left = (this.widthInstance.getValue()).toFixed(1);
                        break;
                    }
                }
                this.borderWidthInstance.next(`${top}px ${right}px ${bottom}px ${left}px`)
                break;
            }
        }
    }

    updateBorderColor() {
        switch(this.directionInstance.getValue()){
            case "top": {
                this.borderColorInstance.next(`transparent transparent ${this.colorInstance.getValue()} transparent`)
                break;
            }
            case "bottom": {
                this.borderColorInstance.next(`${this.colorInstance.getValue()} transparent transparent transparent`)
                break;
            }
            case "left": {
                this.borderColorInstance.next(`transparent ${this.colorInstance.getValue()} transparent transparent`)
                break;
            }
            case "right": {
                this.borderColorInstance.next(`transparent transparent transparent ${this.colorInstance.getValue()}`)
                break;
            }
            case "top-right": {
                this.borderColorInstance.next(`transparent ${this.colorInstance.getValue()} transparent transparent`)
                break;
            }
            case "top-left": {
                this.borderColorInstance.next(`${this.colorInstance.getValue()} transparent transparent transparent`)
                break;
            }
            case "bottom-left": {
                this.borderColorInstance.next(`transparent transparent transparent ${this.colorInstance.getValue()}`)
                break;
            }
            case "bottom-right": {
                this.borderColorInstance.next(`transparent transparent ${this.colorInstance.getValue()} transparent`)
                break;
            }
        }
    }

    updateCssOutput() {
        return;
    }
}

