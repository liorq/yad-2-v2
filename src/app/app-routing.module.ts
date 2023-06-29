import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up-page/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { SavedAdsComponent } from './pages/saved-ads-page/saved-ads/saved-ads.component';
import { LastSearchesComponent } from './pages/searches/last-searches/last-searches.component';
import { TipsAndInfoComponent } from './pages/tips-and-info/tips-and-info.component';
import { NewAdComponent } from './shared/ad/new-ad/new-ad.component';
import { AdDescriptionComponent } from './shared/ad/ad-description/ad-description.component';
import { RealestateComponent } from './pages/realestate/realestate.component';
import { AdvanceSearchComponent } from './core/components/advance-search/advance-search.component';
import { PublishComponent } from './core/components/publish-section/publish/publish.component';
import { Stage2PublishComponent } from './core/components/publish-section/step2/stage2-publish/stage2-publish.component';
import { Stage2step1Component } from './core/components/publish-section/step2/stage2step1/stage2step1.component';
import { Stage2step2Component } from './core/components/publish-section/step2/stage2step2/stage2step2.component';
import { Stage2step3Component } from './core/components/publish-section/step2/stage2step3/stage2step3.component';
import { Stage2step4Component } from './core/components/publish-section/step2/stage2step4/stage2step4.component';
import { Stage2step5Component } from './core/components/publish-section/step2/stage2step5/stage2step5.component';
import { Stage2step6Component } from './core/components/publish-section/step2/stage2step6/stage2step6.component';
import { Stage2step7Component } from './core/components/publish-section/step2/stage2step7/stage2step7.component';
import { Stage2FinalComponent } from './core/components/publish-section/step2/stage2-final/stage2-final.component';
import { UpdateDetailsComponent } from './pages/update-details/update-details.component';
import { MyLikedAdsComponent } from './pages/myLikedAds/my-liked-ads/my-liked-ads.component';
import { ImageGalleryComponent } from './core/components/image-gallery/image-gallery.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { MyAlertsComponent } from './pages/my-alerts-page/my-alerts/my-alerts.component';
import { AuthGuard } from './core/guards/auth.guard';
import { SignInGuard } from './core/guards/sign-in.guard';
import { LastStageSignUpComponent } from './auth/sign-up-page/last-stage-sign-up/last-stage-sign-up.component';

const routes: Routes = [
  { path: 'sign-up-last-stage', component: LastStageSignUpComponent },

  { path: 'home', component: HomePageComponent },
  { path: 'new-ad', component: NewAdComponent },
  { path: 'ad-des', component: AdDescriptionComponent },
  { path: 'realestate', component: RealestateComponent },
  { path: 'image-gallery', component: ImageGalleryComponent },
  { path: 'advance', component: AdvanceSearchComponent },
{ path: 'publish' , children: [
    { path: 'stage-1', component: PublishComponent ,canActivate:[AuthGuard]},
    { path: 'stage-2', component: Stage2PublishComponent,children:[
        { path: 'step1', component: Stage2step1Component,canActivate:[AuthGuard] },
        { path: 'step2', component: Stage2step2Component ,canActivate:[AuthGuard]},
        { path: 'step3', component: Stage2step3Component ,canActivate:[AuthGuard]},
        { path: 'step4', component: Stage2step4Component ,canActivate:[AuthGuard]},
        { path: 'step5', component: Stage2step5Component,canActivate:[AuthGuard] },
        { path: 'step6', component: Stage2step6Component ,canActivate:[AuthGuard]},
        { path: 'step7', component: Stage2step7Component ,canActivate:[AuthGuard]},
        { path: 'final', component: Stage2FinalComponent ,canActivate:[AuthGuard]},
    ] },

  ]},

  { path: 'personal', component: PersonalComponent , children: [
    { path: 'update', component: UpdateDetailsComponent ,canActivate:[AuthGuard]},

    { path: 'saved-ads', component: SavedAdsComponent,canActivate:[AuthGuard] },
    { path: 'last-searches', component: LastSearchesComponent ,canActivate:[AuthGuard]},
    { path: 'tips-and-info', component: TipsAndInfoComponent ,canActivate:[AuthGuard]},
    { path: 'my-liked-ads', component: MyLikedAdsComponent,canActivate:[AuthGuard] }

  ]},

  { path: 'chat', component: ChatPageComponent },
  { path: 'my-alerts', component: MyAlertsComponent },

  { path: 'signUp', component: SignUpComponent,canActivate:[SignInGuard] },
  { path: 'signIn', component: SignInComponent ,canActivate:[SignInGuard]},
  { path: '', component: HomePageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
