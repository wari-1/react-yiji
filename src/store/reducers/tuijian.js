const initialState = [
  {
    id: "yudqyguvwdsfv",
    wen: false,
    content: [
      {
        id: "6t31yu2ui",
        src:
          "https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/u166_02.jpg",
          address: "清华大学艺术博物馆",
          startTime: "2019-09-10T15:05:42+08:00",
          endTime: "2019-11-09T15:05:42+08:00",
          during: "2019.09.10-11.09",
        isDisplaying: true,
        desc:
          "本次展览将从人像摄影家肖全为杨丽萍拍摄的众多摄影中挑选出一组精品一个是舞之精灵,美的化身:一个被营为中国最好的人像摄影家。两人的心灵碰隆会擦出什么样的艺术火花?指影师镜头下直实的杨丽萍是什么样的?25日开始的“心动展,无疑极六地撩起了人们的好奇心",
        author: {
          desc:
            "肖全,周,1959年生于四川成都,曾任深圳《街道》杂志摄影记者,被称为“中国最好的人像摄影师代中期开始我们这一代拍摄,1991年出版《天堂之鸟》三毛摄影专集,1992年在瑞士举办个展,1993年在法国参加摄影联展1997年出版《我们这一代》。2000年出版《我销头下的美丽女人》。",
          src:
            "https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/u194_03.jpg"
        },
        works: {
          src: [
            "https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/u194_05.jpg",
            "https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/u194_07.jpg",
            "https://dev.tencent.com/u/dtid_30b2a4e50adc6692/p/images-tuoguan/git/raw/master/src/assets/images/u194_09.jpg"
          ]
        },
        comments: [
          {
            id: "h1hj",
            text: "挺好的",
            name: "阿德"
          }
        ],
        zanNum: 159,
        liulanNum: 394
      }
    ]
  },
  { id: "hjhyew2223", wen: true, content: [] }
];
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
