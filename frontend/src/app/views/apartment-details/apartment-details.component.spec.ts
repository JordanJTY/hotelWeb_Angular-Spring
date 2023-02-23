// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientModule } from '@angular/common/http';
// import { NgxPermissionsModule } from 'ngx-permissions';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from '../../app-routing.module';
// import { HeaderComponent } from '../../components/header/header.component';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { ApartmentDetailsComponent } from './apartment-details.component';
// import { MatCardModule } from '@angular/material/card';
// import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

// describe('ApartmentDetailsComponent', () => {
//     let component: ApartmentDetailsComponent;
//     let fixture: ComponentFixture<ApartmentDetailsComponent>;

//     beforeEach(async () => {
//         await TestBed.configureTestingModule({
//             imports: [
//                 HttpClientModule,
//                 AppRoutingModule,
//                 MatSlideToggleModule,
//                 NgxPermissionsModule.forRoot(),
//                 FormsModule,
//                 ReactiveFormsModule,
//                 MatDialogModule,
//                 MatCardModule
//             ],
//             declarations: [ApartmentDetailsComponent, HeaderComponent],
//             providers: [
//                 { provide: MAT_DIALOG_DATA, useValue: {} },
//                 { provide: MatDialogRef, useValue: {} },
//             ]
//         })
//             .compileComponents();

//         fixture = TestBed.createComponent(ApartmentDetailsComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });
// });
