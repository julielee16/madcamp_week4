import React from 'react';
import ClothesCard from './clothesCard';
import './uiEquip.css';

const clothesinfo = [
    {
      title: '튜브 펑크수리패치',
      link: 'https://search.shopping.naver.com/gate.nhn?id=21221967148',
      image: 'https://shopping-phinf.pstatic.net/main_2122196/21221967148.20200103033014.jpg',
      lprice: '2130',
      hprice: '33500',
      mallName: '네이버',
      productId: '21221967148',
      productType: '1',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '번개표 자전거펑크패치 수리/빵구',
      link: 'https://search.shopping.naver.com/gate.nhn?id=12386849314',
      image: 'https://shopping-phinf.pstatic.net/main_1238684/12386849314.20180803111502.jpg',
      lprice: '2600',
      hprice: '5310',
      mallName: '네이버',
      productId: '12386849314',
      productType: '1',
      brand: '번개표',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '자이언트 자전거 공구 토크렌치 세트 모음',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81166213862',
      image: 'https://shopping-phinf.pstatic.net/main_8116621/81166213862.3.jpg',
      lprice: '70000',
      hprice: '0',
      mallName: '로카스타일',
      productId: '81166213862',
      productType: '2',
      brand: '자이언트',
      maker: '자이언트',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: 'OLC 자전거 토크렌치 공구세트',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82232815220',
      image: 'https://shopping-phinf.pstatic.net/main_8223281/82232815220.2.jpg',
      lprice: '53000',
      hprice: '0',
      mallName: '잔차나라',
      productId: '82232815220',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '아이스툴즈 정비 공구세트 에센스 82F4',
      link: 'https://search.shopping.naver.com/gate.nhn?id=8603639802',
      image: 'https://shopping-phinf.pstatic.net/main_8603639/8603639802.20150617105329.jpg',
      lprice: '79000',
      hprice: '103780',
      mallName: '네이버',
      productId: '8603639802',
      productType: '1',
      brand: '아이스툴즈',
      maker: '아이스툴즈',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '비엠웍스 카본 툴캡슐 비엠웍스 공구통 자전거 공구통',
      link: 'https://search.shopping.naver.com/gate.nhn?id=18999104462',
      image: 'https://shopping-phinf.pstatic.net/main_1899910/18999104462.20190430213015.jpg',
      lprice: '18500',
      hprice: '18900',
      mallName: '네이버',
      productId: '18999104462',
      productType: '1',
      brand: '비엠웍스',
      maker: '비엠웍스',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '자전거 펑크패치모음 수리키트 타이어 펑크 빵꾸 수리공구',
      link: 'https://search.shopping.naver.com/gate.nhn?id=19719851511',
      image: 'https://shopping-phinf.pstatic.net/main_1971985/19719851511.20190611131026.jpg',
      lprice: '790',
      hprice: '800',
      mallName: '네이버',
      productId: '19719851511',
      productType: '1',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: 'GIANT GIANT 자이언트 토크렌치 자전거용품',
      link: 'https://search.shopping.naver.com/gate.nhn?id=22094820537',
      image: 'https://shopping-phinf.pstatic.net/main_2209482/22094820537.20200302145350.jpg',
      lprice: '70000',
      hprice: '70000',
      mallName: '네이버',
      productId: '22094820537',
      productType: '1',
      brand: '자이언트',
      maker: '자이언트',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '스프라켓 탈부착,자전거 프리휠 분리 공구,스프라켓,후리휠스프라켓홀더',
      link: 'https://search.shopping.naver.com/gate.nhn?id=81902533347',
      image: 'https://shopping-phinf.pstatic.net/main_8190253/81902533347.2.jpg',
      lprice: '1500',
      hprice: '0',
      mallName: '벨로투맥스',
      productId: '81902533347',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '와일드맨 wild man 자전거 공구통',
      link: 'https://search.shopping.naver.com/gate.nhn?id=23204200891',
      image: 'https://shopping-phinf.pstatic.net/main_2320420/23204200891.20200619215543.jpg',
      lprice: '6390',
      hprice: '6390',
      mallName: '네이버',
      productId: '23204200891',
      productType: '1',
      brand: '와일드맨',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '토픽 헥서스 엑스 HEXUS X 21가지기능 휴대용공구',
      link: 'https://search.shopping.naver.com/gate.nhn?id=14109363922',
      image: 'https://shopping-phinf.pstatic.net/main_1410936/14109363922.20181114032116.jpg',
      lprice: '22640',
      hprice: '33000',
      mallName: '네이버',
      productId: '14109363922',
      productType: '1',
      brand: '토픽',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: 'WITH 자전거 공구 바퀴 펑크 튜브 패치 키트 세트 정리 휴대',
      link: 'https://search.shopping.naver.com/gate.nhn?id=22646208751',
      image: 'https://shopping-phinf.pstatic.net/main_2264620/22646208751.20200425155354.jpg',
      lprice: '2630',
      hprice: '6680',
      mallName: '네이버',
      productId: '22646208751',
      productType: '1',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '자전거공구 자가정비 자전거오버홀 44종',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82190152669',
      image: 'https://shopping-phinf.pstatic.net/main_8219015/82190152669.11.jpg',
      lprice: '45000',
      hprice: '0',
      mallName: '아나톨리아',
      productId: '82190152669',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '번개표 펑크패치 - 자전거 튜브 펑크 빵꾸 수리용 패치 딱지',
      link: 'https://search.shopping.naver.com/gate.nhn?id=19071716825',
      image: 'https://shopping-phinf.pstatic.net/main_1907171/19071716825.20190504131836.jpg',
      lprice: '4280',
      hprice: '4300',
      mallName: '네이버',
      productId: '19071716825',
      productType: '1',
      brand: '번개표',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '아이스툴즈 체인커터 자전거공구 61A4',
      link: 'https://search.shopping.naver.com/gate.nhn?id=8603576075',
      image: 'https://shopping-phinf.pstatic.net/main_8603576/8603576075.20150617104041.jpg',
      lprice: '16500',
      hprice: '19000',
      mallName: '네이버',
      productId: '8603576075',
      productType: '1',
      brand: '아이스툴즈',
      maker: '아이스툴즈',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: 'TOPEAK 토픽 공구 ComboTorq Wrench Bit Set 토크 렌치',
      link: 'https://search.shopping.naver.com/gate.nhn?id=20705051745',
      image: 'https://shopping-phinf.pstatic.net/main_2070505/20705051745.20190822143522.jpg',
      lprice: '16420',
      hprice: '23000',
      mallName: '네이버',
      productId: '20705051745',
      productType: '1',
      brand: '토픽',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '비엠웍스 사이클 바이크 거치 보관함 가방 BM-EG-004',
      link: 'https://search.shopping.naver.com/gate.nhn?id=22665045244',
      image: 'https://shopping-phinf.pstatic.net/main_2266504/22665045244.20200427152437.jpg',
      lprice: '16960',
      hprice: '27000',
      mallName: '네이버',
      productId: '22665045244',
      productType: '1',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '메리다 자전거 펑크패치 세트 타이어레버 포함',
      link: 'https://search.shopping.naver.com/gate.nhn?id=12374610701',
      image: 'https://shopping-phinf.pstatic.net/main_1237461/12374610701.jpg',
      lprice: '3000',
      hprice: '0',
      mallName: '옐로바이크',
      productId: '12374610701',
      productType: '2',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '토픽 미니 20 PRO',
      link: 'https://search.shopping.naver.com/gate.nhn?id=82391321311',
      image: 'https://shopping-phinf.pstatic.net/main_8239132/82391321311.jpg',
      lprice: '27360',
      hprice: '0',
      mallName: '테크벨리',
      productId: '82391321311',
      productType: '2',
      brand: '토픽',
      maker: '토픽',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    },
    {
      title: '락브로스 휴대용 자전거 멀티툴 공구',
      link: 'https://search.shopping.naver.com/gate.nhn?id=17966168164',
      image: 'https://shopping-phinf.pstatic.net/main_1796616/17966168164.20191213024422.jpg',
      lprice: '4000',
      hprice: '30600',
      mallName: '네이버',
      productId: '17966168164',
      productType: '1',
      brand: '',
      maker: '',
      category1: '스포츠/레저',
      category2: '자전거',
      category3: '자전거용품',
      category4: '공구'
    }
  ];

const ToolsList = (props) => {
    return (
        <div className="list">
            {
                clothesinfo.map((helmet, i) => {
                    return <ClothesCard
                                key={i}
                                image={helmet.image}
                                title={helmet.title}
                                author={helmet.lprice}
                                published={helmet.brand} />
                })
            }

        </div>

    )
}

export default ToolsList;