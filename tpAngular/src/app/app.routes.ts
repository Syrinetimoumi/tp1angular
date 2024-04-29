import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path:"/header",component:HeaderComponent},
    {path:"/body",component:BodyComponent},
    {path:"/footer",component:FooterComponent}

];
