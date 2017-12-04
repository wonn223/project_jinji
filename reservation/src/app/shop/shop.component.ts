import { Component, OnInit, TemplateRef} from '@angular/core';
import { ShopListService } from '../shop-service.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

interface resList {
  id: number;
  time: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  // 예약네비 정보를 받고 결제창 이동시 정보를 담을 변수를 정의함
  willVisitPeople:number;
  willVisitTime:any;
  resInfo:any;
  resLists: resList[];
  // data picker
  minDate = new Date();
  maxDate = new Date(2018, 9, 15);

  // 인원의 최대값이 number로 들어오면 *ngFor로 리스트를 출력하기 위해서는 arry로 변환이 필요함.
  // ex) for(i = 1; i<number+1; i++) { arry.push(i); };

  //test 이미지 url
  images = ["http://img.insight.co.kr/upload/2014/12/19/ART141219075215.jpg",
    "http://cfile27.uf.tistory.com/image/20055D4D4D94104230AA52",
    "http://cfile24.uf.tistory.com/image/11110B424F92C0E11A97CA"]

  bsValue: Date = new Date();  //선택한 날짜가 담겨있는 변수
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

  // collapsed (예약 가능시간 조회화면)

  isCollapsed: boolean = true;
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  // 확인 모달

  modalRef: BsModalRef;

  constructor(public shopListService: ShopListService, public modalService: BsModalService) { }

  ngOnInit() {
    this.resLists = [
      { id: 1, time: 19},
      { id: 2, time: 20},
      { id: 3, time: 21},
      { id: 4, time: 21 },
      { id: 4, time: 21 },
      { id: 4, time: 21 },
      { id: 4, time: 21 }
    ];
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  collapseTrue() {
    this.isCollapsed = true;
  }
  collapseAlert(){
    if (this.willVisitPeople) { this.isCollapsed = !this.isCollapsed}
    else{alert("예약인원을 선택해주세요")}
 
}

  movePay() {
    this.resInfo = {
      "people": this.willVisitPeople, 
      "date": this.bsValue, 
      "time": this.willVisitTime
    }
    console.log(this.resInfo)
  }

}
