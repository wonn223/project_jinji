import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Shop {
  id: number;
  name: string;
  countFavorite: number;
  reviewCount: number;
  storeScore: number;
  introStore: string;
}

@Injectable()
export class ShopListService {
  shopList: Shop[];
  shopTest = {
    "name": "abc레스토랑",
    "countFavorite": 2,
    "reviewCount": 3,
    "storeScore": 3.7,
    "intro": "아침, 점심, 저녁 식사가 가능한 뷔페 레스토랑으로서, 오픈 키친에서 만든 초밥과 사시미, 중동/서구 특선 요리, 아시아 요리 및 한국의 인기 메뉴는 물론, 미각을 사로잡는 디저트로 이루어진 뷔페가 따로 마련되어 있습니다. 여유로운 좌석 공간과 단체 인원을 수용 가능한 프라이빗 다이닝 룸이 특징."
  }
  url = 'http://localhost:3000/shopList';

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getShopList();

  }

  
  getShopList() {
    this.http.get<Shop[]>(this.url)
      .subscribe(shopList => {
       return this.shopList = shopList;
      });
  }

  addFavorite() {
    this.shopTest.countFavorite += 1;

  }
}