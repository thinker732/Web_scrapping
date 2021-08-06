const request=require('request')
const cheerio=require('cheerio')


//for(let i=0;i<4;i++){

    let i=0
   
request(`${process.env.URL}/fr/${process.env.PAGE}=${i}`,async (error,response,html)=>{

  if(!error && response.statusCode==200){

        const $=await cheerio.load(html)
        await console.log(i);
     await $(process.env.SELECTOR).each((i,el)=>{

        const title=$(el)
        .find('a')
        .attr('href')

        console.log(title)
     })

    }


})

//}