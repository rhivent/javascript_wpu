const cobaPromise = () => {
    return new Promise((resolve,reject) => {
        const waktu = 7000;
        if(waktu < 5000){
            setTimeout( () => {
                resolve('selesai');
            },waktu);
        }else{
            reject('lamaa!');
        }
    });
}

// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

async function cobaAsync() {

    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (error) {
        console.error(error);
    }
}

cobaAsync();