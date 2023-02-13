var data=document.getElementById("number")
data.innerHTML=`Currently, we have ${countries_data.length} countries`
var temmost=document.getElementById("ten")

const sort_counties= countries_data.sort(function(a,b){
    return b.population-a.population
})

let total=0;
for(let i=0;i<sort_counties.length;i++){
    total+= sort_counties[i].population
}
console.log(total)
const clear = document.getElementById("graph")


function population(){
    clear.innerHTML=" "
   
    temmost.innerHTML="10 most Populated counties in the World"

    for(let i=0;i<10;i++){
        var div= document.createElement("div")
        div.style.width="70%"
        div.style.height="9%"
        div.style.display="flex"
        div.style.justifyContent="space-evenly"
        div.style.alignItems="center"

        var countrydiv= document.createElement("div")
        countrydiv.style.width="20%"
        countrydiv.style.height="100%"
        countrydiv.style.display="flex"
        countrydiv.style.justifyContent="space-between"
        countrydiv.style.alignItems="center"



        var languagename=document.createElement("p")
        languagename.innerHTML= sort_counties[i].name
        countrydiv.appendChild(languagename)
        div.appendChild(countrydiv)


        var bar=document.createElement("div")
        bar.style.height="70%"
        bar.style.width="30%"
        div.appendChild(bar)

        var percentdiv= document.createElement("div")
        bar.appendChild(percentdiv)
       

        var percentage=(sort_counties[i].population/total)*100
        percentdiv.innerText= `${percentage.toFixed(1)}%`


        percentdiv.style.width=`${percentage}%`
        percentdiv.style.background="orange"
        percentdiv.style.height="100%"
        percentdiv.style.display="flex"
        percentdiv.style.justifyContent="space-between"
        percentdiv.style.alignItems="center"
        percentdiv.style.fontSize="14px"

        var populationdiv= document.createElement("div")
        populationdiv.innerHTML=sort_counties[i].population
        div.appendChild(populationdiv)


        var graph=document.getElementById("graph")
        graph.appendChild(div)

    }

}








function languages(){
    clear.innerHTML=" "
    
    temmost.innerHTML="10 most Spoken languages in the World"
    var languageArray=[]
    for(let i=0;i<countries_data.length;i++){
        languageArray.push(countries_data[i].languages)
    }

    var flatArray= languageArray.flat()

    var countlang={}
    flatArray.map((ele) => {
        countlang[ele]= (countlang[ele]||0)+1
    })
    
    var objarray= Object.entries(countlang)

    var sortedlangcount=objarray.sort(function(a,b){
        return b[1]-a[1]
    })
    

    for(let i=0;i<10;i++){
        var toptenlang=sortedlangcount[i]
        var div= document.createElement("div")
        div.style.width="70%"
        div.style.height="9%"
        div.style.display="flex"
        div.style.justifyContent="space-evenly"
        div.style.alignItems="center"

        var countrydiv= document.createElement("div")
        countrydiv.style.width="20%"
        countrydiv.style.height="100%"
        countrydiv.style.display="flex"
        countrydiv.style.justifyContent="space-between"
        countrydiv.style.alignItems="center"



        var languagename=document.createElement("p")
        languagename.innerHTML= toptenlang[0]
        countrydiv.appendChild(languagename)
        div.appendChild(countrydiv)


        var bar=document.createElement("div")
        bar.style.height="70%"
        bar.style.width="30%"
        div.appendChild(bar)

        var percentdiv= document.createElement("div")
        bar.appendChild(percentdiv)
       

        var percentage=( toptenlang[1]/sortedlangcount.length)*100
        percentdiv.innerText= `${percentage.toFixed(1)}%`


        percentdiv.style.width=`${percentage}%`
        percentdiv.style.background="orange"
        percentdiv.style.height="100%"
        percentdiv.style.display="flex"
        percentdiv.style.justifyContent="space-between"
        percentdiv.style.alignItems="center"
        percentdiv.style.fontSize="14px"

        var languagediv= document.createElement("div")
        languagediv.innerHTML=toptenlang[1]
        div.appendChild(languagediv)


        var graph=document.getElementById("graph")
        graph.appendChild(div)

    }




}