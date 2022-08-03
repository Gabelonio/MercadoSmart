import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TendenciasComponent } from './pages/tendencias/tendencias.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { GrafLineasComponent } from './graficos/graf-lineas/graf-lineas.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GrafRadarComponent } from './graficos/graf-radar/graf-radar.component';
import { GrafBarrasComponent } from './graficos/graf-barras/graf-barras.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './pages/landing/landing.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { GrafCirculoComponent } from './graficos/graf-circulo/graf-circulo.component';
import { OpcionesReporteComponent } from './opciones-reporte/opciones-reporte.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TendenciasComponent,
    GrafLineasComponent,
    GrafRadarComponent,
    GrafBarrasComponent,
    OpcionesComponent,
    LandingComponent,
    ReporteComponent,
    GrafCirculoComponent,
    OpcionesReporteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    NgxChartsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
