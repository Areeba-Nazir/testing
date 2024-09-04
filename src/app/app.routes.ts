import { Routes } from '@angular/router';
import { ParaphrasingComponent } from './paraphrasing/paraphrasing.component';

export const routes: Routes = [

    { path: '', component: ParaphrasingComponent, pathMatch: 'full',
        data: {
          title: 'Paraphrasing Tool'
        //   descrption: "Grammarin.com is a free online grammar checker to fix grammatical errors, punctuation, spellings, sentences & contextual mistakes to improve your writing. ",
        //   ogUrl: 'https://www.grammarin.com',
        //   ogImage : "https://www.grammarin.com/assets/images/logo-header.svg",
        //   canonical: "https://www.grammarin.com",
        } },
];
