import { Component, inject } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  imports: [],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {
  
  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({    
    firstName: ['', Validators.required],    
    lastName: [''],    
    address: this.formBuilder.group({      
      street: [''],      
      city: [''],      
      state: [''],      
      zip: [''],    
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  
  
  

  });
  onSubmit() {    
    // TODO: Use EventEmitter with form value    
    console.warn(this.profileForm.value);  
  }
  updateProfile() {    
    this.profileForm.patchValue({      
      firstName: 'Nancy',      
      address: {        
        street: '123 Drew Street',      
      },    
    });  
  }
  get aliases() {    
    return this.profileForm.get('aliases') as FormArray;  
  } 
  addAlias() {    
    this.aliases.push(this.formBuilder.control(''));  
  }

}

