import { Component, Input } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { Products } from "../../../models/products-models";

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [CurrencyPipe],
    templateUrl:'./product-card.html',
    styleUrl:'./product-card.css',
})

export class ProductCardComponent {
    @Input({ required: true }) product!: Products;
}