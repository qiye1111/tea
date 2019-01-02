const express=require('express');
const pool=require('./pool');
const cors=require('cors');
var app=express();
app.listen(3000);
app.use(express.static(__dirname+'/public'));
app.use(cors({
    origin:['http://127.0.0.1:3001','http://localhost:3001','http://localhost:4200'],
    credentials:true
}));
//功能一：首页轮播图
app.get('/image',(req,res)=>{
    var sql='SELECT index_id,img_url FROM tea_index_swiper';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
});
//功能二：首页商品分类
app.get('/imageList',(req,res)=>{
    var sql='SELECT index_list_id,list_name,img_url FROM tea_index_list';
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
//功能三：获取商品页默认列表
app.get('/shoplist',(req,res)=>{
    var pno=req.query.pno;    
    var pageSize=req.query.pageSize;
    var cho=req.query.cho;    
    if(!pno){pno=1}
    if(!pageSize){pageSize=6};
    var reg=/^[0-9]{1,3}$/;
    if(!reg.test(pno)){
        res.send({code:-1,msg:'页码格式不正确！'})
        return;
    };
    if(!reg.test(pageSize)){
        res.send({code:-1,msg:'页大小格式不正确！'});
        return;
    };
    var progress=0;
    var obj={};
    var sql='SELECT count(tid) AS c FROM tea_product' ;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var pageCount=Math.ceil(result[0].c/pageSize);
        progress+=50;
        obj.pageCount=pageCount;
        if(progress==100){
            res.send(obj)
        }
    });
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize);
    var sql=`SELECT tid,title,label,price,img_url FROM tea_product ORDER BY ${cho} DESC LIMIT ${offset},${pageSize}`;     
    pool.query(sql,(err,result)=>{       
        if(err) throw err;        
        progress+=50;
        obj.data=result;
        if(progress==100){
            res.send(obj)
        }       
    })
})

//功能四 获取新品茶的信息
app.get('/shopNew',(req,res)=>{
    var pno=req.query.pno;    
    var pageSize=req.query.pageSize;
    var index_list_id=req.query.index_list_id;    
    if(!pno){pno=1}
    if(!pageSize){pageSize=2};
    var reg=/^[0-9]{1,3}$/;
    if(!reg.test(pno)){
        res.send({code:-1,msg:'页码格式不正确！'})
        return;
    };
    if(!reg.test(pageSize)){
        res.send({code:-1,msg:'页大小格式不正确！'});
        return;
    };
    var progress=0;
    var obj={};
    var sql='SELECT count(tid) AS c FROM tea_product' ;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var pageCount=Math.ceil(result[0].c/pageSize);
        progress+=50;
        obj.pageCount=pageCount;
        if(progress==100){
            res.send(obj)
        }
    });
    var offset=parseInt((pno-1)*pageSize);
    pageSize=parseInt(pageSize);
    var sql=`SELECT tid,title,subtitle,price,img_url FROM tea_product  WHERE index_list_id =? LIMIT ?,?`;     
    pool.query(sql,[index_list_id,offset,pageSize],(err,result)=>{        
        if(err) throw err;        
        progress+=50;
        obj.data=result;
        if(progress==100){
            res.send(obj)
        }       
    })
})

//功能五 获取商品详情页
app.get('/shopinfo',(req,res)=>{
    var tid=req.query.tid;
    var sql='SELECT `tid`,  `title`, `label`, `price`, `sales`, `comment`, `img_url` FROM `tea_product` WHERE tid=? ';
    pool.query(sql,tid,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


//功能六 获取购物车信息
app.get('/cart',(req,res)=>{
    var uid=req.query.uid;
    var sql='SELECT tid,title,price,count,isChecked,img_url FROM tea_cart WHERE uid=?';
    pool.query(sql,uid,(err,result)=>{
        if(err) throw err;
        res.send(result);
    }) 
})