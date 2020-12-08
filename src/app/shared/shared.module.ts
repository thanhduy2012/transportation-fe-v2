// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';

// Ng-Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



// Directives
// import { NgbdSortableHeader, FocusFirstInvalidFieldDirective } from 'src/app/shared/directives';

// Services
// import * as fromSharedServices from './services';

// Components
// import * as fromComponents from './components';
// import { NumberToIterablePipe } from './pipes/number-to-iterable.pipe';
// Ngx document viewer
// import { NgxDocViewerModule } from 'ngx-doc-viewer';
// import { CreateUrlPipe } from './pipes/create-url-image.pipe';
// import { ScrollSpyDirective } from './directives/scroll-spy.directive';
// import { MatTreeModule } from '@angular/material';
// import { CheckBoxDirective } from './directives/check-box.directive';


@NgModule({
  declarations: [
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,


    // Material
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatDialogModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatTooltipModule,

    // NgBoostrap
    NgbModule,
  ],
    exports: [
        // Angular
        CommonModule,
        FormsModule,
        ReactiveFormsModule,


        // Material
        MatButtonModule,
        MatMenuModule,
        MatTabsModule,
        MatChipsModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatCardModule,
        MatListModule,
        MatSelectModule,
        MatIconModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatSlideToggleModule,
        MatDividerModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatDialogModule,
        MatProgressBarModule,
        MatAutocompleteModule,
        MatTooltipModule,


        // NgBoostrap
        NgbModule,

    ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
