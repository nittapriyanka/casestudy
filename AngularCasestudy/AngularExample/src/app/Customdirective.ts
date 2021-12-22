import { Directive,ElementRef,Input,OnInit } from "@angular/core";

@Directive({
    selector: "[color]"
})
export class Customdirective implements OnInit {
    @Input() color!: string;
    constructor(private e1:ElementRef){}
    ngOnInit(){
        this.e1.nativeElement.style.backgroundColor = this.color;
    }
}