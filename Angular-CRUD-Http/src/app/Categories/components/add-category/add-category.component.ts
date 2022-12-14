import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { ICategory } from '../../models/ICategory';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    status: new FormControl('active'),
  });
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}
  onAddCategory() {
    this.messageService.showLoading();
    let category = this.categoryForm.value;
    this.categoryService.addCategory(category).subscribe((data) => {
      this.messageService.setSuccessMessage('Category added successfully');
      this.messageService.hideLoading();
      this.router.navigate(['/categories']);
    });
  }
  
}
