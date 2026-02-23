import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-component',
  imports: [CommonModule],
  templateUrl: './list-component.html',
  styleUrl: './list-component.css',
})

export class ListComponent {
presidents: string[] = ["Higgins", "McAleese", "Robinson", "Hillery"];
}
