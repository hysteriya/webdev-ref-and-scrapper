const request= require('request');
const cheerio=require('cheerio');


request('https://www.msn.com/en-in/money/topstories/google-is-killing-off-youtube-stories-on-june-26-here-s-why/ar-AA1bIVIC?ocid=msedgntp&cvid=13366a18352f42e485ef34d156b38720&ei=12', cb);

function cb (error, response, html) {
    if (error){
        console.error('error:', error);
    }
    else{
        handlehtml(html);
    }
};

function handlehtml(html){
    let seltool= cheerio.load(html);
    let h1=seltool("h1");
    console.log(h1.length);
}
