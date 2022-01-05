document.querySelectorAll('.accordion_pergunta').forEach((item) => {
    item.addEventListener('click',(event) => {
        console.log('test');
        
        let acc= item.nextElementSibling;

        item.classList.toggle('show');


        if(!acc.classList.contains('show')){
            console.log('open accordion');


            acc.style.display = 'block';
            let accHeight = acc.clientHeight;
            console.log(accHeight);

            setTimeout(() => {
                acc.style.height = accHeight + 'px';
                acc.style.display = '';
                
            },1);
           ;
          
            acc.classList = 'accordion_collapse collapsing';
            
            setTimeout(() => {
                console.log('open accordion content');
                acc.classList = 'accordion_collapse show';
                // acc.style.height = '';
            }, 400);



        }else{

            acc.classList = 'accordion_collapse collapsing';
          
                    setTimeout(() =>{
                        acc.style.height= '0px';
                    },1);

            setTimeout(() => {
               acc.classList = 'accordion_collapse hidden'
                console.log('close accordion content');
                acc.style.height = '';
            }, 400);
        }   
    });
    
});
//item.nextElementSibling.classList.toggle('show');