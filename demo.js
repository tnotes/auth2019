const axios = require('axios');
let {Compare} = require('./db/mongo');

let test = async (keyword)=>{
    let options = {
        method:'GET',
        url:'https://www.lazada.vn/catalog/?ajax=true&from=input&q=' + encodeURIComponent(keyword),
        headers: {
            'cookie':'_bl_uid=6qjjkr1yzyvxX93Ud7yCuLw3CLjd; Hm_lvt_7cd4710f721b473263eed1f0840391b4=1549864031; t_fv=1549864131993; t_uid=9IE5kow8DAcOG8eHOMQzDPUHVt1V5D0E; cna=NPrnFJms72YCAQE21Codlydi; lzd_cid=4b8172ef-9363-48b5-f587-15a6cd27f944; hng=VN|vi|VND|704; userLanguageML=vi; cto_lwid=b151d0d2-57ee-4aa4-a0a0-c07bb34dc068; _fbp=fb.1.1549864134941.225606047; _bl_uid=7pjt2r9yzp5ypdctkx22atX2syms; _ga=GA1.2.493808531.1549869116; l=bBNQ_ZQnvzzJ2UgiBOCNZuI8LP_tSIRAguPRwCcBi_5h-1L_Ml_OloNS0ep6VA5RsLYB4z6vzNp9-etlw; _gid=GA1.2.55316917.1550386091; t_sid=1Nr8nUOxcEbghJ50WXIk1TcTO19hUiwm; utm_channel=NA; lzd_sid=162aa4bf8ea302391a50cd338f8cf78c; _m_h5_tk=3a722ac466c892e11182a7671c5112cd_1550471079844; _m_h5_tk_enc=c8d118f4878857ad225b3835583da744; _tb_token_=556e33837b075; JSESSIONID=55F4164EE1CD27EF61DAF475DB5F585B; isg=BGJi3MbFStdnAFaA0K0KVU8qs-gEG2foIey5Qqz7gFWAfwL5lEfj3ej9q-Mm6d5l;  ',
            'user-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
        },
    //    proxy: 'http://103.48.80.15:8081',
        json:true
    };
    let response =  await axios(options);
    let objResult = response['data'];
    console.log(objResult)
    if(objResult['mods'] === undefined){
        return {lazadaMIN:[]}
    }


    let list = objResult['mods']['listItems'];
    list = list.map(e => {
        return {
            id: e.itemId,
            price: parseInt(e.price),
            name: e.name
        }
    });
    return {lazadaMIN:list}

};
(async ()=>{
    let m = 0;
    let all = await Compare.find({});
    for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }
    for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }
    for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }
    for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }
    for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }
    for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }
    for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }
    for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }
    for(let i = 0;i<all.length;i++){
        let getMin = await test(all[i]['_doc']['keyword'] || 'microlab');
        console.log(getMin);
        m++;
        console.log(m)
    }
})();
