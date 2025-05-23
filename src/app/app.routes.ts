import { Routes } from '@angular/router';
import { ActaConstitutivaComponent, AyudarteComponent,  BlogpostListComponent, DirectorioComponent, DocumentosComponent, 
  HomeComponent, JuntaNacionalComponent, JuntaRegionalComponent, NosotrosComponent, 
  PacientesComponent, PortalEducativoComponent, ProximamenteComponent, QueesCirugiaComponent, ResenaHistoricaComponent, RevistaComponent, ServiciosComponent, SolvenciasComponent, TipsComponent, TraumaComponent } from './pages/index.paginas';
import { ContactFormComponent } from './cmspage/contact-form/contact-form.component';
import { BlogdComponent } from './pages/blogd/blogd.component';
import { PacientetipdComponent } from './pages/pacientetipd/pacientetipd.component';


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
  {path: 'tips/:slug', component: PacientetipdComponent},

  {path: 'como-podemos-ayudarte', component: AyudarteComponent},
  {path: 'que-es-cirugia-bucal-y-buco-maxilofacial', component: QueesCirugiaComponent},
  {path: 'como-podemos-ayudarte', component: TipsComponent},
  {path: 'trauma-como-problema-de-salud-publica', component: TraumaComponent},
  {path: 'servicios-de-cirugia-en-el-sistema-publico-de-salud', component: ServiciosComponent},

  {path: 'blogs', component: BlogpostListComponent},
  {path: 'blog/:slug', component: BlogdComponent},
  // {path: 'blog/:id', component: BlogpostDetailComponent},

  {path: 'revista', component: RevistaComponent},
  {path: 'contacto', component: ContactFormComponent},

  { path: 'portal-educativo', component: PortalEducativoComponent},
  { path: 'miembros', component: ProximamenteComponent},


  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

