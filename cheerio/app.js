const request=require('request')
const cheerio=require('cheerio')


//for(let i=0;i<4;i++){

    let i=0
   
request(`${process.env.URL}/fr/${process.env.PAGE}=${i}`,async (error,response,html)=>{

  if(!error && response.statusCode==200){

        let $=await cheerio.load(html)
     await console.log(i);
     await $(process.env.SELECTOR).each((i,el)=>{

        const link=$(el)
        .find('a')
        .attr('href')


            request(link,async (error,response,html)=>{

            $=await cheerio.load(html)
            
            const el=await $('.is-sticky')


            const category=await $(`#channel-show > div:nth-child(1) > div > nav > ol > li:nth-child(3) > a > span`)
                            .text()
                            .trim()

            const tags=await $(`a > span.tag`)
                            .text()
                            .trim()
                            .split('  ')
                            .join(';')
            const cName=el
                    .find('a')
                    .attr('title')
                    .trim()

            const cType=el
                    .find('.card-label')
                    .text()
                    .trim()

             const cLink=el
                    .find('.has-text-grey.is-size-7')
                    .text()
                    .trim()
                    .slice(12)
                    .trim()
            
            const cMembers=el
                        .find('.subtitle.is-6')
                        .text()
                        .trim()

                    console.log({
                        name:cName,
                        type:cType,
                        category,
                        tags,
                        link:cLink,
                        nbr:cMembers
                    })
            })
     })

    }


})

//}