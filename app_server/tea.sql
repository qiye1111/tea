SET NAMES UTF8;
DROP DATABASE IF EXISTS tea;
CREATE DATABASE tea CHARSET=UTF8;
USE tea;
#首页轮播图列表
CREATE TABLE tea_index_swiper(
    index_id TINYINT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255)
);
INSERT INTO tea_index_swiper VALUES(1,'http://127.0.0.1:3000/img/index_swiper/index01.jpg');
INSERT INTO tea_index_swiper VALUES(2,'http://127.0.0.1:3000/img/index_swiper/index02.jpg');
INSERT INTO tea_index_swiper VALUES(3,'http://127.0.0.1:3000/img/index_swiper/index03.jpg');
#首页商品分类列表
USE tea;
CREATE TABLE tea_index_list(
    index_list_id TINYINT PRIMARY KEY AUTO_INCREMENT,
    list_name VARCHAR(255),
    img_url VARCHAR(255)
);
INSERT INTO tea_index_list index_list_id,list_name,img_url VALUES(1,'红茶分类','http://127.0.0.1:3000/img/111.png');
INSERT INTO tea_index_list index_list_id,list_name,img_url VALUES(2,'绿茶分类','http://127.0.0.1:3000/img/222.png');
INSERT INTO tea_index_list index_list_id,list_name,img_url VALUES(3,'花茶分类','http://127.0.0.1:3000/img/333.png');
INSERT INTO tea_index_list index_list_id,list_name,img_url VALUES(4,'铁观音分类','http://127.0.0.1:3000/img/444.png');

#商品详情表
USE tea;
CREATE TABLE tea_product(
    tid TINYINT PRIMARY KEY AUTO_INCREMENT,
    index_list_id TINYINT,
    title VARCHAR(255),
    label VARCHAR(255),
    subtitle VARCHAR(255),
    price DECIMAL,
    sales INT,
    comment INT,
    img_url VARCHAR(255)
);
#红茶
INSERT INTO tea_product VALUES(1,1,'正山王茶叶 武夷山桐木关新茶礼盒装散茶铁罐装500g','人工手工制作','原味花香、入口清甜甘爽，嫩芽能耐泡',228.00 ,6081,17889,'http://127.0.0.1:3000/img/product/101.jpg');
INSERT INTO tea_product VALUES(2,1,'金骏眉茶叶特级正宗红茶茶叶旗泓金俊眉浓香型福建红茶散装礼盒装','传统百年技法制作','武夷原产地 高山金俊眉 升级加量装500克',267.00 ,3327,4826,'http://127.0.0.1:3000/img/product/102.jpg');
INSERT INTO tea_product VALUES(3,1,'金骏眉茶叶特级正宗红茶茶叶御兴金俊眉浓香型福建红茶散装礼盒装','馥郁悠长，浓厚回甘','用心制茶，只为一壶好茶',168.00 ,3719,6395,'http://127.0.0.1:3000/img/product/103.jpg');
INSERT INTO tea_product VALUES(4,1,'祁野祁门红茶2018新茶茶叶明前特级祁红金针嫩芽原产地祁红共250g','高山茶韵，入口香醇','原料细心筛选，娴熟制茶工艺，造就茶叶品质',218.00 ,3203,12826,'http://127.0.0.1:3000/img/product/104.jpg');
INSERT INTO tea_product VALUES(5,1,'天之红祁门红茶特级祁红香螺纸包180克茶叶春茶','手工特级，味甘醇厚','传承守艺，用品牌去塑造',288.00 ,329,1206,'http://127.0.0.1:3000/img/product/105.jpg');
INSERT INTO tea_product VALUES(6,1,'祁润祁门红茶特级正宗浓香型散装祁红香螺新茶','百年传承，品质之选','原产地 传承古法 海拔700米 核心产区',118.00 ,185,545,'http://127.0.0.1:3000/img/product/106.jpg');
INSERT INTO tea_product VALUES(7,1,'宫明茶叶 蜜香金螺 云南凤庆 高海拔古树工夫滇红茶 250克/罐','传承好茶，珍藏岁月','海拔1837米的甜香 原生态 真品质',389.00 ,561,3065,'http://127.0.0.1:3000/img/product/107.jpg');
INSERT INTO tea_product VALUES(8,1,'守一轩 宝塔红茶 手工滇红茶 茶叶金丝宝塔形金芽工夫红茶450g','形如宝塔，金毫显露','金丝宝塔红茶 花般绽放 质量保证 约120泡',198.00 ,178,130,'http://127.0.0.1:3000/img/product/108.jpg');

#绿茶
INSERT INTO tea_product VALUES(9,2,'茶叶碧螺春2018新茶非特级浓香型春茶礼盒装500g散装绿茶','明前茶更香醇','暖冬茶，更香醇',139.00 ,1022,1770,'http://127.0.0.1:3000/img/product/201.jpg');
INSERT INTO tea_product VALUES(10,2,'茶西湖牌龙井茶叶正宗雨前西湖龙井茶250g纸包春茶绿茶','正宗雨前浓香龙井','暖冬茶，更香醇',108.00 ,14816,111989,'http://127.0.0.1:3000/img/product/202.jpg');
INSERT INTO tea_product VALUES(11,2,'正宗明前龙井茶2018新茶200g盒装浓香耐泡一杯香茶叶绿茶明前散装','头采嫩芽','明前龙井茶200g装,全国多仓发货',58.00 ,12724,32180,'http://127.0.0.1:3000/img/product/203.jpg');
INSERT INTO tea_product VALUES(12,2,'龙井绿茶 2018五虎新茶龙井散装一级高山豆香浓香型春茶L1000爪芽','一叶两三叶。形似鹰爪','浓郁豆香，检验合格，正产黄版',129.00 ,112,118,'http://127.0.0.1:3000/img/product/204.jpg');
INSERT INTO tea_product VALUES(13,2,'明前龙井茶绿茶2018新茶正宗特级西湖龙井茶叶散装大佛龙井豆香味','正宗明前一级龙井','高山无公害,奉上一杯放心茶',98.00 ,1397,792,'http://127.0.0.1:3000/img/product/205.jpg');
INSERT INTO tea_product VALUES(14,2,'祁野2018新茶黄山毛峰明前特级绿茶250g春茶嫩芽毛尖雀舌开园茶叶','茶香清新，口感香醇','2018新茶上市 自家茶园 早春茶叶',198.00 ,2924,5688,'http://127.0.0.1:3000/img/product/206.jpg');
INSERT INTO tea_product VALUES(15,2,'茶叶碧螺春2018新茶非特级浓香型春茶礼盒装500g散装绿茶','汤色清亮','2018明前雀舌 茶农茶厂直销 250克',128.00 ,20262,65347,'http://127.0.0.1:3000/img/product/207.jpg');
INSERT INTO tea_product VALUES(16,2,'乐品乐茶毛尖茶叶信阳毛尖绿茶2018新茶雨前嫩芽浓香型散装125g*2','原产地的浓香','嫩芽焙制好茶 高品质实力派',89.00 ,5911,44939,'http://127.0.0.1:3000/img/product/208.jpg');

#花茶分类
INSERT INTO tea_product VALUES(17,3,'艺福堂花茶组合女人泡水喝的饮品八宝水果茶红枣茶红枣桂圆枸杞茶*2','温暖的宠爱','第2件半价 美丽女人 好喝又好吃 高品质实力派',75.00 ,34222,91707,'http://127.0.0.1:3000/img/product/301.jpg');
INSERT INTO tea_product VALUES(18,3,'荷叶茶冬瓜荷叶茶叶纯干玫瑰花茶袋泡花草茶包组合天然决明正品子*2','温暖的宠爱','品质花草茶 冬瓜荷叶茶',26.00 ,128516,826752,'http://127.0.0.1:3000/img/product/302.jpg');
INSERT INTO tea_product VALUES(19,3,'艺福堂花草茶叶金银花搭配菊花茶特级泡水去金银花火茶清罐火散装*2','专业成就品质','河南封丘原产 精选金银花蕾 绒毛密披',29.00,11628,61538,'http://127.0.0.1:3000/img/product/303.jpg');
INSERT INTO tea_product VALUES(20,3,'祁真天下胖大海包邮 润喉茶枇杷叶罗汉果教师嗓子喉咙疼声音嘶哑','润喉亮嗓 即喝即舒服','九种草本配伍 润喉亮嗓 即喝即舒服',46.00 ,642,10879,'http://127.0.0.1:3000/img/product/304.jpg');
INSERT INTO tea_product VALUES(21,3,'网红水果茶纯果干新鲜手工花果果茶组合小袋装柠檬片百香果花茶包','预见清新','买1送玻璃杯 买2发3 送1只杯',30.00 ,25406,377246,'http://127.0.0.1:3000/img/product/305.jpg');
INSERT INTO tea_product VALUES(22,3,'韩国原装进口全南蜂蜜柚子茶1kg 泡水喝的饮品水果茶蜜炼冲饮果酱','柚香怡人，蜜润沁心','原装进口 日期新鲜',39.00 ,25024,57621,'http://127.0.0.1:3000/img/product/306.jpg');
INSERT INTO tea_product VALUES(23,3,'柠檬片泡茶干片蜂蜜冻干柠檬片泡水茶叶花茶水果茶小袋装','便携冲泡，锁鲜片装','买1盒送1盒再送梅森杯',29.00 ,70511,193403,'http://127.0.0.1:3000/img/product/307.jpg');
INSERT INTO tea_product VALUES(24,3,'红枣桂圆枸杞茶玫瑰花茶气血组合调理男女泡水養生饮品八宝水果茶','便携冲泡，锁鲜片装','1盒15包/买1盒送2盒/共45包/在送杯',37.00 ,8225,4370,'http://127.0.0.1:3000/img/product/308.jpg');

#铁观音分类
INSERT INTO tea_product VALUES(25,4,'安溪铁观音茶叶浓香型特级','正季好茶，浓情雅致','铁观音制艺第十三代传人 茶园直发 厂家直发',88.00 ,57151,91674,'http://127.0.0.1:3000/img/product/401.jpg');
INSERT INTO tea_product VALUES(26,4,'安溪散装袋装礼盒装500g秋茶乌龙茶','还原本真','2018新茶 热销47万件 365天包邮退换',99.00 ,11760,75348,'http://127.0.0.1:3000/img/product/402.jpg');
INSERT INTO tea_product VALUES(27,4,'铁观音茶叶浓香型安溪2018新茶袋装乌龙茶礼盒装共500g','高山茶园','茶厂直供 配送礼袋 35天退换免邮',69.00 ,79063,228622,'http://127.0.0.1:3000/img/product/403.jpg');
INSERT INTO tea_product VALUES(28,4,'正宗安溪铁观音茶叶浓香型秋茶500g乌龙茶小包散装御兴','高山嫩叶，古法制作','高山嫩叶，古法制作',198.00 ,3124,2119,'http://127.0.0.1:3000/img/product/404.jpg');
INSERT INTO tea_product VALUES(29,4,'八马茶叶 安溪铁观音浓香陈香型老铁2008礼盒装送礼茶叶126克','岁月陈韵 老茶知心','岁月陈韵 老茶知心',200.00 ,40,278,'http://127.0.0.1:3000/img/product/405.jpg');
INSERT INTO tea_product VALUES(30,4,'海堤茶叶福建铁观音 XT5631 茶语铁观音 正韵熟香','韵香型铁观音 伴手礼茶','韵香型铁观音 伴手礼茶',99.00 ,124,352,'http://127.0.0.1:3000/img/product/406.jpg');
INSERT INTO tea_product VALUES(31,4,'忆江南铁观音安溪铁观音清香型乌龙茶散装茶叶小包','正季好茶，浓情雅致','铁观音 200g塑盒',45.00 ,26,108,'http://127.0.0.1:3000/img/product/407.jpg');
INSERT INTO tea_product VALUES(32,4,'醇香型 传统工艺 兰花香 铁观音 小罐装茶叶 乌龙茶','半壁山房待明月，一盏清茗酬知音','质优价廉 简洁 方便带出门，有面子',10.00 ,552,5829,'http://127.0.0.1:3000/img/product/408.jpg');


#购物车列表
USE tea;
CREATE TABLE tea_cart(
    cid TINYINT PRIMARY KEY AUTO_INCREMENT,
    tid TINYINT,
    uid TINYINT,    
    title VARCHAR(255),   
    price DECIMAL,    
    img_url VARCHAR(255),
    count TINYINT,
    isChecked VARCHAR(255)
);
INSERT INTO tea_cart VALUES(1,1,1,'正山王茶叶 武夷山桐木关新茶礼盒装散茶铁罐装500g',228.00 ,'http://127.0.0.1:3000/img/product/101.jpg',1,'');
INSERT INTO tea_cart VALUES(2,2,1,'金骏眉茶叶特级正宗红茶茶叶旗泓金俊眉浓香型福建红茶散装礼盒装',267.00 ,'http://127.0.0.1:3000/img/product/102.jpg' ,1,'');
INSERT INTO tea_cart VALUES(3,9,1,'茶叶碧螺春2018新茶非特级浓香型春茶礼盒装500g散装绿茶',139.00 ,'http://127.0.0.1:3000/img/product/201.jpg',1,'');
INSERT INTO tea_cart VALUES(4,10,1,'茶西湖牌龙井茶叶正宗雨前西湖龙井茶250g纸包春茶绿茶',108.00 ,'http://127.0.0.1:3000/img/product/202.jpg',1,'');
INSERT INTO tea_cart VALUES(5,25,1,'安溪铁观音茶叶浓香型特级',88.00 ,'http://127.0.0.1:3000/img/product/401.jpg',1,'');
INSERT INTO tea_cart VALUES(6,26,1,'安溪散装袋装礼盒装500g秋茶乌龙茶',99.00 ,'http://127.0.0.1:3000/img/product/402.jpg',1,'');

