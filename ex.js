//document.querySelector('.characters').innerText = '안녕하세요!';
const ilbuni = document.querySelector('.characters');
            console.log(ilbuni);

           function clickIlbuniHandler(e){
               // console.log(this);
                console.log(e);
               ilbuni.classList.toggle('special');
               console.log(e.currentTarget);
               console.log(e.target);
            }
            ilbuni.addEventListener('click',clickIlbuniHandler)
