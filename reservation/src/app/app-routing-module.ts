import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 컴포넌트 임포트 (레스토랑 상세페이지)
import {
  MainComponent,
  ShopComponent,
  NotFoundComponent,
  PaymentComponent,
} from './routing-forRouting';

// 라우트 구성
const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'shop', component: ShopComponent },   //backend : restraunts
  { path: 'payment', component: PaymentComponent }, //backend : reservations/infomations    (imp) /payment    /imp uri
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }