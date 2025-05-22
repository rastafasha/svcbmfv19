import { Routes } from '@angular/router';
import { ActaConstitutivaComponent, AyudarteComponent, BlogpostDetailComponent, BlogpostListComponent, DirectorioComponent, DocumentosComponent, HomeComponent, JuntaNacionalComponent, JuntaRegionalComponent, NosotrosComponent, PacienteDetailComponent, PacientesComponent, PortalEducativoComponent, ProximamenteComponent, QueesCirugiaComponent, ResenaHistoricaComponent, RevistaComponent, ServiciosComponent, SolvenciasComponent, TipsComponent, TraumaComponent } from './pages/index.paginas';
import { ContactFormComponent } from './cmspage/contact-form/contact-form.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'directorio', component: DirectorioComponent},


  // Nostros
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'resena-historica', component: ResenaHistoricaComponent},
  {path: 'junta-directiva-nacional', component: JuntaNacionalComponent},
  {path: 'junta-directiva-regional', component: JuntaRegionalComponent},
  {path: 'acta-constitutiva', component: ActaConstitutivaComponent},

  // Area profesional
  {path: 'documentos', component: DocumentosComponent},
  {path: 'solvencias', component: SolvenciasComponent},

  // Area pacientes
  {path: 'tips', component: PacientesComponent},
  {path: 'tips/:id', component: PacienteDetailComponent},

  {path: 'como-podemos-ayudarte', component: AyudarteComponent},
  {path: 'que-es-cirugia-bucal-y-buco-maxilofacial', component: QueesCirugiaComponent},
  {path: 'como-podemos-ayudarte', component: TipsComponent},
  {path: 'trauma-como-problema-de-salud-publica', component: TraumaComponent},
  {path: 'servicios-de-cirugia-en-el-sistema-publico-de-salud', component: ServiciosComponent},

  {path: 'blog', component: BlogpostListComponent},
  {path: 'blog/:slug', component: BlogpostDetailComponent},

  {path: 'revista', component: RevistaComponent},
  {path: 'contacto', component: ContactFormComponent},

  { path: 'portal-educativo', component: PortalEducativoComponent},
  { path: 'miembros', component: ProximamenteComponent},


  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

