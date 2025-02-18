import {ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({

  imports: [

    // other imports ...    
    ReactiveFormsModule, 
    ProfileEditorComponent,
],
})
export class AppModule {}