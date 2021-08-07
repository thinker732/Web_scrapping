let request=require("request-promise")

const cookieJar=request.jar(); 
request= request.defaults({jar:cookieJar})


main=async ()=>{

    const result=request.get(process.env.URL)

    const cookieString=cookieJar.getCookieString(process.env.URL)
    const splittedByCsrfCookieName=cookieString.split("csrf_cookie_name=")
    const crsf_test_name=splittedByCsrfCookieName[1].split(';')

    const login=await request.post(`${process.env.URL}/user`,
    {
        form:{
            crsf_test_name,
            email:process.env.MAIL,
            password:process.env.PWD,
        },
    }
    );

    console.log(login );
}
