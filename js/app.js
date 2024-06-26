function login (coffee , callback){
    setTimeout(()=>{
        console.log('go to website')
        setTimeout(()=>{
            callback();
            setTimeout(()=>{
                order()
                setTimeout(()=>{
                    arrived()
                    setTimeout(()=>{
                        take()
                        setTimeout(()=>{
                            drink()
                        },8000)
                    },6000)
                },4000)     
            },2000)
        },2000)
    },1000)
}

function findCoffee() {
    console.log(' coffee select')
}

function order() {
    console.log('order coffee')
}

function arrived() {
    console.log('wate for arrived coffee')
}

function take() {
    console.log('take coffee')
}

function drink() {
    console.log('drink coffee')
}


login('capochino' , 'findproduct')