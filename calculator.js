function GetInput(){

}

$('.number').on('click' , function(){
    let data = $(this).val();
    let screen_value = document.getElementById('screen_c').value += data
    // screen = data.innerText
    // console.log(screen_value)

})   

$('.opre').on('click' , function(){
    let opreation = $(this).val();
    let screen_value = $('#screen_c').val()
    let arr = ['+','-','*','/'];
    // console.log(opreation.length)
    if ($('#screen_c').val().length != 0 ){
        document.getElementById('screen_c').value += opreation

        if(arr.includes(screen_value.charAt(screen_value.length-1)) ){
            let new_value = screen_value.slice(0 , screen_value.length-1) + opreation
            $('#screen_c').val(new_value)

        }
        

        





    // 


    }


    // console.log(screen_value) 
})
$('#clear').on('click' , function(){
    $('#screen_c').val('') 

    
});

$('#result').on( 'click' , function(){
    // var screen_value = document.getElementById('screen_c').value
    // console.log(screen_value)
    
    // var arr = ['+','-','*','/'];
    // console.log(arr) 
    // var Number = ['1','2','3','4','5','6','7','8','9','0']
    // if(screen_value != '*' || screen_value != '/'){
    //     if (screen_value !=  '*') {
    //         let ans = screen_value.split('*')
    //         console.log('heelo multiple')
    //         console.log(ans)
    //         // ans.toString()
    //         let result_multi = parseInt(ans[0]) * parseInt(ans[1])
    //         console.log(result_multi)
    //         if (screen_value != '/') {

    //             let ans = screen_value.split('/')
    //             console.log('hello divi ')
    //             // console.log(ans)
    //             // // ans.toString()
    //             let final_result = result_multi / parseInt(ans[1]) || parseInt(ans[0]) /  parseInt(ans[1])
    //             console.log(final_result)
    //             if(screen_value != '+'){
    //                 let ans = screen_value.split('+')
    //                 let data = result_multi + parseInt(ans[1]) || parseInt(ans[1]) + final_result
    //                 console.log(data)

    //             }
    //         }



    //     }
        

     
    // }
  

    // let ans = screen_value.split(arr)
        // var ans = [];
        // ans = screen_value.split('')

        // console.log(ans)
        // for(i in ans){
        //     if(ans[i] == '+'){
                

        //     }
        // }
       


    // console.log(ans) 
    // for( i in Number){
    //     let result = screen_value.split(Number[i])
    //     console.log(result)

    // }
    // console.log(ans)
    // ans.toString()
    // let result = parseInt(ans[0]) + parseInt(ans[1])
    // console.log(result)
    
    let screen_value = document.getElementById('screen_c').value
    let data = eval(screen_value)
    $('#screen_c').val(data)
    // screen_value.innerHTML = eval(screen_value)
    console.log(eval(screen_value))
    
} )









































// function display(val){
//     let screen_value = document.getElementById('screen_c').value += val
    
    
    

    
// }
// document.getElementById('clear').addEventListener('click' , clear)
// function clear(){
//     let clearbtn = document.getElementById('screen_c').value = ''
    

    

// }
// document.getElementById('result').addEventListener('click' , result)
// function result(){
    
//     let screen_value = document.getElementById('screen_c').value
 
    
    
    
//     // console.log(screen_value);   
//     if( screen_value === '' ){
//         document.getElementById('screen_c').value = ''
//         console.log('enter the opre 1st')
//     }
//     else if(screen_value === '.') {
//         document.getElementById('screen_c').value = ''
//         console.log('you cant take dot in start')
//     }
//     else if(screen_value === '+-' || screen_value === '-+'|| screen_value === '*%' || screen_value === '%*' || screen_value === '-*' || screen_value === '-%')
//     {
//         document.getElementById('screen_c').value = ''
//     }
//     else{
        
//         // document.getElementById('screen_c').value = eval(document.getElementById('screen_c').value)
        
//         // // console.log(screen_value);
        
//         // // let data = parseInt(screen_value);
//         // // console.log(data)
//         // screen_value = eval(screen_value    )
        


        
         

//     }

// }





