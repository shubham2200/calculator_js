function display(val){
    let screen_value = document.getElementById('screen_c').value += val
    
    

    
}
document.getElementById('clear').addEventListener('click' , clear)
function clear(){
    let clearbtn = document.getElementById('screen_c').value = ''
    

    

}
document.getElementById('result').addEventListener('click' , result)
function result(){
    let ans = '';
    let screen_value = document.getElementById('screen_c').value
    // console.log(screen_value);
    if( screen_value === '' ){
        document.getElementById('screen_c').value = ''
        console.log('enter the opre 1st')
    }
    else{
        
        console.log(screen_value);
        let arr = [];
        let conunter = 0;
        let opreation = [];
        for (i in screen_value){
            if(screen_value[i]== '*' || screen_value[i] =='+' || screen_value[i] == '%' || screen_value[i] == '-')
            {
                conunter++;
                arr[conunter] = screen_value[i]
                console.log(arr,conunter)
            }
            else{
                arr[conunter] += screen_value[i]
                console.log(arr,conunter)
            }

            
        }


        
         

    }

}





