import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {Logger} from "../../../services/logger.service";
import {parseFormGroup} from "../../../shared/utils/utility-function";
import {Category} from "../../../models/category.model";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  entityForm: FormGroup;
  edit: boolean = false;

  categories: Category[];

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {

    this.categoryService.findAll()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      })

    Logger.log('edit product', this.product);
    this.edit = !!this.product;
    // returns true if the product is true
    // not (not (false)) = not (true) = false

    this.entityForm = this.fb.group({
      label: [null, Validators.required],
      price: [null, Validators.required],
      quantity: [null, Validators.required],
      category: [null, Validators.required],
    });

    if (this.product) {
      this.entityForm.patchValue(this.product);
      this.entityForm.get('category').setValue(this.product.category.id);
    } else {
      this.product = new Product();
    }
  }


  submit(){
    Logger.log("SUMBIT FORM", this.entityForm);
    if(this.entityForm.invalid){
      return;
    }

    parseFormGroup(this.entityForm, this.product);
    this.product.category = this.categories.find((cat) => {
      return cat.id == this.entityForm.get('category').value;
    })

    Logger.log('product', this.product);

    if (this.edit){
      this.productService.update(this.product)
        .subscribe((product: Product)=> {
          this.router.navigate(['/items', this.product.id, 'detail'])
        });
    } else {
      this.productService.insert(this.product)
        .subscribe(() => {
          this.router.navigate(['items']);
        })
    }

  }

}
