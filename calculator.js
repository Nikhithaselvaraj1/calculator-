<!DOCTYPE html>
<html>
    <head>
        <style>
             body{
                background-image: url('https://images.unsplash.com/photo-1516557070061-c3d1653fa646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60');
                background-repeat: cover    ;
        }
        fieldset{
                background-color: gray;
                position:absolute;
                top: 90px;
                left: 150px;
                height:90%;
                width:80%;
        }
        div{
            width: 300px;
            height: 560px;
            margin: auto;
            margin-top: 25px;
            
            border: 3px solid black;
            border-radius: 5px;
            padding: 20px;
            }
         #spe{
            width: 250px;
            border: 5px solid black;
	        border-radius: 3px;
	        padding: 20px;
	        margin: auto;
         }  
         #clear{
            width: 250px;
            border: 5px solid black;
	        border-radius: 3px;
	        padding: 20px;
	        margin: auto;
         } 
            input{
                width: 20px;
                background-color: white;
                color:black;
                border: 3px solid black;
	            border-radius: 5px;
	            padding: 26px;
	            margin: 5px;
	            font-size: 15px;
}

        </style>
    </head>
    <body>
        <fieldset>
            <div>
                <form name="form25">
                    <input id = "spe" type ="text" name = "answer"> <br> <br>
                    <input type = "button" value = "1" onclick = "form25.answer.value += '1' ">
                    <input type = "button" value = "2" onclick = "form25.answer.value += '2' ">
                    <input type = "button" value = "3" onclick = "form25.answer.value += '3' ">
                    <input type = "button" value = "+" onclick = "form25.answer.value += '+' ">
                    <br> <br>
                    <input type = "button" value = "4" onclick = "form25.answer.value += '4' ">
                    <input type = "button" value = "5" onclick = "form25.answer.value += '5' ">
                    <input type = "button" value = "6" onclick = "form25.answer.value += '6' ">
                    <input type = "button" value = "-" onclick = "form25.answer.value += '-' ">
                    <br> <br>
                    <input type = "button" value = "7" onclick = "form25.answer.value += '7' ">
                    <input type = "button" value = "8" onclick = "form25.answer.value += '8' ">
                    <input type = "button" value = "9" onclick = "form25.answer.value += '9' ">
                    <input type = "button" value = "*" onclick = "form25.answer.value += '*' ">
                    <br> <br>
                    <input type = "button" value = "/" onclick = "form25.answer.value += '/' ">
                    <input type = "button" value = "0" onclick = "form25.answer.value += '0' ">
                    <input type = "button" value = "." onclick = "form25.answer.value += '.' ">    
                    <input type = "button" value = "=" onclick = "form25.answer.value = eval(form25.answer.value) ">
                    <br> 
                    <input type = "button" value = "Clear All" onclick = "form25.answer.value = ' ' " id= "clear" >
                    <br>                 

                </form>
            </div>
        </fieldset>
    </body>
</html>
