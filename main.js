                            //       start        if


// var age = 70 
// var health = "strong"
// if (age >= 60){
//     console.log("old and the age is:" + age)
// }else if(age >= 40 && age >= 60 || health == "strong"){
//     console.log("Mid and the age is:" + age)
// }
// else{
//     console.log("young and the age is:" + age)
// }
// console.log("done")


                                        //   end  if


                                        //  start switch


// var health = "strong"
// switch(health){
//     case ("strong"):
//         console.log("your health is good")
//         break
//         case("weak"):
//             console.log("you to need to work on your health")
//             break
//         default:
//             console.log("good")
//             break
// }


                                        //end switch



                                        //  start switch


// var age = 70 
// var health = "normal"
// switch("true"){
//     case(age >= 60):
//     console.log("old")
//     break
//     case( age >= 40):
//     console.log("mid")
//     break
//     default:
//         console.log("young")
// }


                                        //  end switch

                                        

// var student = ["Sade", "ali",  "ahmed" ,"sosa" ,"omar"]
// document.getElementById("st").innerHTML = student
// student.push("pealme")
// student.pop("pealme")
// student[1] = "amar"
// console.log(student)

// var st = "sake"
// var st2 = "ali"
// var st3 = "ahmed"
// var st4 = "Soto"
// var st5 = "omar"
// document.getElementById("st").innerHTML+= st
// document.getElementById("st").innerHTML+= st2
// document.getElementById("st").innerHTML+= st3
// document.getElementById("st").innerHTML+= st4
// document.getElementById("st").innerHTML+= st5
document.getElementById("td").addEventListener("click", function(){
    console.log("clicked")
    var weight =document.getElementById("weight-input").value
    var height =document.getElementById("height-input").value
    console.log(weight, height)
    var bm = weight/(height*height)
    document.getElementById("bm").innerHTML= bm
})