import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // import the ReactiveFormsModule
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTreeModule } from '@angular/material/tree';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/headers/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RealestateComponent } from './pages/realestate/realestate.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SlidingCommercialComponent } from './core/components/sliding-commercial/sliding-commercial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePagePopularCategoriesComponent } from './core/components/home-page-popular-categories/home-page-popular-categories.component';
import { AppBannerComponent } from './core/components/app-banner/app-banner.component';
import { PopularServicesComponent } from './core/components/popular-services/popular-services.component';
import { SideBarNavComponent } from './shared/sidebar/side-bar-nav/side-bar-nav.component';
import { SideBarItemComponent } from './shared/sidebar/side-bar-item/side-bar-item.component';
import { NewAdComponent } from './shared/ad/new-ad/new-ad.component';
import { HalfRectangleComponent } from './shared/icons/half-rectangle/half-rectangle.component';
import { UserDetailsComponent } from './shared/user-details/user-details.component';
import { UserCircleComponent } from './shared/user-circle/user-circle.component';
import { TopBarNavComponent } from './shared/sidebar/top-bar-nav/top-bar-nav.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { BtnComponent } from './shared/btn/btn.component';
import { GenericContainerComponent } from './shared/generics/generic-container/generic-container.component';
import { GenericFormComponent } from './shared/generics/generic-form/generic-form.component';
import { LoginInfoComponent } from './shared/login-info/login-info.component';
import { SubHeaderComponent } from './shared/headers/sub-header/sub-header.component';
import { FormsModule } from '@angular/forms';
import { ChecklistDatabase, TreeComponent } from './shared/checkBoxs/tree/tree.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { UpdateDetailsComponent } from './pages/update-details/update-details.component';
import { SavedAdsComponent } from './pages/saved-ads-page/saved-ads/saved-ads.component';
import { LastSearchesComponent } from './pages/searches/last-searches/last-searches.component';
import { TipsAndInfoComponent } from './pages/tips-and-info/tips-and-info.component';
import { SearchBarComponent } from './shared/search/search-bar/search-bar.component';
import { AdDescriptionComponent } from './shared/ad/ad-description/ad-description.component';
import { AdFooterComponent } from './shared/ad/ad-footer/ad-footer.component';
import { HomeInfoComponent } from './shared/ad/home-info/home-info.component';
import { SearchColumnsComponent } from './shared/search/search-columns/search-columns.component';
import { TextInputComponent } from './shared/inputs/text-input/text-input.component';
import { MyAlertWidgetComponent } from './core/components/my-alert-widget/my-alert-widget.component';
import { FeedOptionsComponent } from './core/components/feed-options/feed-options.component';
import { AdvanceSearchComponent } from './core/components/advance-search/advance-search.component';
import { TextCheckboxButtonComponent } from './shared/checkBoxs/text-checkbox-button/text-checkbox-button.component';
import { PublishComponent } from './core/components/publish-section/publish/publish.component';
import { PublishCategoryComponent } from './core/components/publish-section/publish-category/publish-category.component';
import { CategoryItemComponent } from './core/components/publish-section/category-item/category-item.component';
import { Stage2PublishComponent } from './core/components/publish-section/step2/stage2-publish/stage2-publish.component';
import { Stage2step1Component } from './core/components/publish-section/step2/stage2step1/stage2step1.component';
import { Stage2step2Component } from './core/components/publish-section/step2/stage2step2/stage2step2.component';
import { Stage2step3Component } from './core/components/publish-section/step2/stage2step3/stage2step3.component';
import { Stage2step4Component } from './core/components/publish-section/step2/stage2step4/stage2step4.component';
import { Stage2step5Component } from './core/components/publish-section/step2/stage2step5/stage2step5.component';
import { Stage2step6Component } from './core/components/publish-section/step2/stage2step6/stage2step6.component';
import { Stage2step7Component } from './core/components/publish-section/step2/stage2step7/stage2step7.component';
import { CircledNumComponent } from './shared/circled-num/circled-num.component';
import { CloseStepComponent } from './core/components/publish-section/step2/close-step/close-step.component';
import { SelectBoxComponent } from './shared/checkBoxs/select-box/select-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ApartmentDescriptionComponent } from './core/components/publish-section/step2/apartment-description/apartment-description.component';
import { StudyResultComponent } from './shared/study-result/study-result.component';
import { ContainerStage2Component } from './core/components/publish-section/step2/contianer-stage2/container-stage2.component';
import { InputTextFileComponent } from './shared/inputs/input-text-file/input-text-file.component';
import { RouteToChooseComponent } from './core/components/publish-section/step2/route-to-choose/route-to-choose.component';
import { SearchBarFieldDropComponent } from './shared/search/search-bar-field-drop/search-bar-field-drop.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchInputTextComponent } from './core/components/publish-section/step2/search-input-text/search-input-text.component';
import { Stage2FinalComponent } from './core/components/publish-section/step2/stage2-final/stage2-final.component';
import { SearchSelectBoxComponent } from './shared/checkBoxs/search-select-box/search-select-box.component';
import { FreeSearchComponent } from './core/components/free-search/free-search.component';
import { AdvanceSearchOptionsComponent } from './core/components/advance-search-options/advance-search-options.component';
import { RadioBtnsComponent } from './shared/radio-btns/radio-btns.component';
import {MatRadioModule} from '@angular/material/radio';
import { SearchFilterComponent } from './core/components/search-filter/search-filter.component';
import { NoActiveAdsComponent } from './pages/saved-ads-page/no-active-ads/no-active-ads.component';
import { MiniPopUpComponent } from './shared/mini-pop-up/mini-pop-up.component';
import { NoSearchesComponent } from './pages/searches/no-searches/no-searches.component';
import { SearchComponent } from './shared/search/last-search-box/search.component';
import { LikedAdsComponent } from './pages/myLikedAds/liked-ads/liked-ads.component';
import { NoLikedAdsComponent } from './pages/myLikedAds/no-liked-ads/no-liked-ads.component';
import { MyLikedAdsComponent } from './pages/myLikedAds/my-liked-ads/my-liked-ads.component';
import { ImageGalleryComponent } from './core/components/image-gallery/image-gallery.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { CommentComponent } from './shared/comment/comment.component';
import { ModalSavedAdComponent } from './core/components/modals/modal-saved-ad/modal-saved-ad.component';
import { ModalCreateAdComponent } from './core/components/modals/modal-create-ad/modal-create-ad.component';
import { MyAlertsComponent } from './pages/my-alerts-page/my-alerts/my-alerts.component';
import { MiniAlertComponent } from './shared/mini-alert/mini-alert.component';







@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    FooterComponent,
    RealestateComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    SlidingCommercialComponent,
    HomePagePopularCategoriesComponent,
    AppBannerComponent,
    PopularServicesComponent,
    SideBarNavComponent,
    SideBarItemComponent,
    NewAdComponent,
    HalfRectangleComponent,
    UserDetailsComponent,
    UserCircleComponent,
    TopBarNavComponent,
    PersonalComponent,
    BtnComponent,
    GenericContainerComponent,
    GenericFormComponent,
    LoginInfoComponent,
    SubHeaderComponent,
    TreeComponent,
    UpdateDetailsComponent,
    SavedAdsComponent,
    LastSearchesComponent,
    TipsAndInfoComponent,
    SearchBarComponent,
    AdDescriptionComponent,
    AdFooterComponent,
    HomeInfoComponent,
    SearchColumnsComponent,
    TextInputComponent,
    MyAlertWidgetComponent,
    FeedOptionsComponent,
    AdvanceSearchComponent,
    TextCheckboxButtonComponent,
    PublishComponent,
    PublishCategoryComponent,
    CategoryItemComponent,
    Stage2PublishComponent,
    Stage2step1Component,
    Stage2step2Component,
    Stage2step3Component,
    Stage2step4Component,
    Stage2step5Component,
    Stage2step6Component,
    Stage2step7Component,
    CircledNumComponent,
    CloseStepComponent,
    SelectBoxComponent,
    ApartmentDescriptionComponent,
    StudyResultComponent,
    ContainerStage2Component,
    InputTextFileComponent,
    RouteToChooseComponent,
    SearchBarFieldDropComponent,
    SearchInputTextComponent,
    Stage2FinalComponent,
    SearchSelectBoxComponent,
    FreeSearchComponent,
    AdvanceSearchOptionsComponent,
    RadioBtnsComponent,
    SearchFilterComponent,
    NoActiveAdsComponent,
    MiniPopUpComponent,
    NoSearchesComponent,
    SearchComponent,
    LikedAdsComponent,
    NoLikedAdsComponent,
    MyLikedAdsComponent,
    ImageGalleryComponent,
    ChatPageComponent,
    CommentComponent,
    ModalSavedAdComponent,
    ModalCreateAdComponent,
    MyAlertsComponent,
    MiniAlertComponent,

  ],
  imports: [



    BrowserModule,HttpClientModule,
    AppRoutingModule,BrowserAnimationsModule,NgxPaginationModule,
    ReactiveFormsModule,MatCheckboxModule,FormsModule,MatTreeModule,MatIconModule,
    MatFormFieldModule,MatButtonModule,MatInputModule,MatMenuModule,MatRadioModule



  ],
  providers: [ChecklistDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
