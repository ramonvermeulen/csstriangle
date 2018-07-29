import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class CssGeneratorService {
    private directionInstance = new BehaviorSubject<string>("top");
    private typeInstance = new BehaviorSubject<string>("equilateral");
    private widthInstance = new BehaviorSubject<number>(200);
    private heightInstance = new BehaviorSubject<number>(100);
    private leftInstance = new BehaviorSubject<number>(100);
    private rightInstance = new BehaviorSubject<number>(100);
    private topInstance = new BehaviorSubject<number>(50);
    private bottomInstance = new BehaviorSubject<number>(50);
    private colorInstance = new BehaviorSubject<string>("#ff0000")

    /* generated instances */
    private borderWidthInstance = new BehaviorSubject<string>("0 100px 173.3px 100px")
    private borderColorInstance = new BehaviorSubject<string>("transparent transparent #ff0000 transparent")


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
    }

    updateBorderWidth() {
        switch(this.typeInstance.getValue()) {
            case "equilateral": {
                let top = 0;
                let right = (this.widthInstance.getValue() / 2).toFixed(1)
                let left = (this.widthInstance.getValue() / 2).toFixed(1)
                let bottom = (Math.sqrt(3)/2 * this.widthInstance.getValue()).toFixed(1)
                this.borderWidthInstance.next(`${top}px ${right}px ${bottom}px ${left}px`)
            }
        }
    }

    updateBorderColor() {
        switch(this.typeInstance.getValue()) {
            case "equilateral": {
                this.borderColorInstance.next(`transparent transparent ${this.colorInstance.getValue()} transparent`)
            }
        }
    }
}
