import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

import { Tag } from '../../models/secundary/tag';

@Component({
  selector: 'app-creatediet',
  imports: [RouterLink, Navbar, Footer, FormsModule, CommonModule,],
  templateUrl: './creatediet.html',
  styleUrl: './creatediet.scss',
})
export class Creatediet implements
  OnInit {
  tags: Tag[] = [];
  newTagInput: string = '';

  constructor(
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.initializeTags();
  }
  initializeTags(): void {
    this.tags = [
      { id: '1', label: 'Bajar de peso', selected: false },
      { id: '2', label: 'Subir de peso', selected: false },
      { id: '3', label: 'Peso sano', selected: false },
      { id: '4', label: 'Bajar calorias', selected: false },
      { id: '5', label: 'Ganar musculo', selected: false },
      { id: '6', label: 'Definir mi cuerpo', selected: false }
    ];
  }

  toggleTag(tag: Tag): void {
    tag.selected = !tag.selected;
  }

  removeTag(tag: Tag): void {
    this.tags = this.tags.filter(t => t.id !== tag.id);
  }

  onReturn(): void {
    this.router.navigate(['/diet']);
  }
}
