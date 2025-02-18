import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  imports: [],
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.css',
  standalone: false
})
export class NameEditorComponent {
  name = new FormControl('');
  updateName() {    
    this.name.setValue('Nancy');  
  }
}

