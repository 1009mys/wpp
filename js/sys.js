
var houses = [
    [0, 0, "행복아파트", "매매", 33, 4.2, "", 'happy_apart.jpg'],
    [1, 0, "좋아아파트", "전세", 36, 2.1, "", 'good_apart.jpg'],
    [2, 0, "행복아파트", "전세", 35, 3.2, "", 'happy_apart.jpg'],
    [3, 0, "신혼아파트", "매매", 33, 3.2, "", 'married_apart.jpg'],
    [4, 0, "편리아파트", "전세", 36, 2.6, "", 'conve_apart.jpg'],
    [5, 0, "행복아파트", "전세", 35, 3.9, "",'happy_apart.jpg'],
    [6, 0, "행복아파트", "매매", 33, 5.5, "",'happy_apart.jpg'],
    [7, 0, "좋아아파트", "전세", 36, 2.1, "", 'good_apart.jpg'],
    [8, 0, "행복아파트", "전세", 35, 3.2, "",'happy_apart.jpg'],
    [9, 0, "신혼아파트", "매매", 33, 4.9, "", 'married_apart.jpg'],
    [10, 0, "편리아파트", "전세", 36, 2.6, "", 'conve_apart.jpg'],
    [11, 0, "청년빌라", "월세", 10, 500, 30, 'young_apart.jpg'],
    [12, 0, "혼자산다빌라", "월세", 8, 100, 35, 'alone_apart.jpg'],
    [13, 0, "넓어원룸", "월세", 6, 100, 30, 'wide_house.jpg'],
    [14, 0, "넓어원룸", "월세", 6, 300, 30, 'wide_house.jpg'],
    [15, 0, "혼자산다빌라", "월세", 12, 300, 20, 'alone_apart.jpg'],
    [16, 0, "청년빌라", "월세", 10, 500, 25, 'young_apart.jpg'],
    [17, 0, "청년빌라", "월세", 8, 200, 40, 'young_apart.jpg']
]

function plus(num)
{
    var idx=-1

    for(var i=0;i<houses.length;i++)
    {
        if(houses[i][0] == num)
        {
            idx = i
            houses[idx][1]+=1
            return
        }
    }

}

function sortBySizeAscending()
{
    for(var i=0;i<houses.length - 1;i++)
    {
        for(var j=0;j<houses.length - 1;j++)
        {
            if(houses[j][4] > houses[j+1][4])
            {
                var tmp = houses[j];
                houses[j] = houses[j+1];
                houses[j+1]=tmp;
            }

        }
    }
}

function sortBySizeDescending()
{
    for(var i=0;i<houses.length - 1;i++)
    {
        for(var j=0;j<houses.length - 1;j++)
        {
            if(houses[j][4] < houses[j+1][4])
            {
                var tmp = houses[j];
                houses[j] = houses[j+1];
                houses[j+1]=tmp;
            }

        }
    }
}


function sortByPriceAscending()
{
    for(var i=0;i<houses.length - 1;i++)
    {
        for(var j=0;j<houses.length - 1;j++)
        {
            var num1=-1
            var num2=-1
            if(houses[j][3] == "월세")
            {
                num1 = houses[j][5] * houses[j][6]
            }
            else
            {
                num1 = houses[j][5] * 100000000
            }
            
            if(houses[j+1][3] == "월세")
            {
                num2 = houses[j+1][5] * houses[j+1][6]
            }
            else
            {
                num2 = houses[j+1][5] * 100000000
            }

            if(num1 > num2)
            {
                var tmp = houses[j];
                houses[j] = houses[j+1];
                houses[j+1]=tmp;
            }

        }
    }
}

function sortByPriceDescending()
{
    for(var i=0;i<houses.length - 1;i++)
    {
        for(var j=0;j<houses.length - 1;j++)
        {
            var num1=-1
            var num2=-1
            if(houses[j][3] == "월세")
            {
                num1 = houses[j][5] * houses[j][6]
            }
            else
            {
                num1 = houses[j][5] * 100000000
            }
            
            if(houses[j+1][3] == "월세")
            {
                num2 = houses[j+1][5] * houses[j+1][6]
            }
            else
            {
                num2 = houses[j+1][5] * 100000000
            }

            if(num1 < num2)
            {
                var tmp = houses[j];
                houses[j] = houses[j+1];
                houses[j+1]=tmp;
            }

        }
    }
}

function sortByPopularity()
{
    for(var i=0;i<houses.length - 1;i++)
    {
        for(var j=0;j<houses.length - 1;j++)
        {
            if(houses[j][1] < houses[j+1][1])
            {
                var tmp = houses[j];
                houses[j] = houses[j+1];
                houses[j+1]=tmp;
            }

        }
    }
}

function btn_click()
{
    document.getElementById("houseInfo").innerHTML = ""

    var houseType = document.getElementsByClassName("houseType")
    var housePrice = document.getElementsByClassName("housePrice")
    var houseSize = document.getElementsByClassName("houseSize")
    var deposit = document.getElementsByClassName("deposit")
    var monthly = document.getElementsByClassName("monthly")

    var printType = document.getElementsByClassName("printType")

    if(printType[0].checked == true)
    {
        sortByPriceAscending()
    }
    else if(printType[1].checked == true)
    {
        sortByPriceDescending()
    }
    else if(printType[2].checked == true)
    {
        sortBySizeAscending()
    }
    else if(printType[3].checked == true)
    {
        sortBySizeDescending()
    }
    else if(printType[4].checked == true)
    {
        sortByPopularity()
    }

    for(var i = 0; i<houses.length;i++)
    {
        if(
            (houses[i][3] == "매매" && houseType[0].checked == false) ||
            (houses[i][3] == "전세" && houseType[1].checked == false) ||
            (houses[i][3] == "월세" && houseType[2].checked == false) )
        { continue; }
        
        if(houses[i][3] == "월세") //월세
        {
            if(!(deposit[0].value ==0 && deposit[1].value == 0))
            {
                if(!(deposit[0].value <= houses[i][5] && deposit[1].value >= houses[i][5]))
                {
                    continue
                }
            }

            if(!(monthly[0].value ==0 && monthly[1].value == 0))
            {
                if(!(monthly[0].value <= houses[i][6] && monthly[1].value >= houses[i][6]))
                {
                    continue
                }
            }
        }
        else //매매, 전세
        {
            if(!(houseSize[0].value ==0 && houseSize[1].value == 0))
            {
                if(!(houseSize[0].value <= houses[i][4] && houseSize[1].value >= houses[i][4]))
                {
                    continue
                }
            }
            
            if(!(housePrice[0].value ==0 && housePrice[1].value == 0))
            {
                if(!(housePrice[0].value <= houses[i][5] && housePrice[1].value >= houses[i][5]))
                {
                    continue
                }
            }
        }

        

        printInfo(i)
    }

    
}

function printInfo(i)
{
    var info = document.getElementById("houseInfo")

    var newDIV = document.createElement("div");
    
    info.innerHTML += "<img class='light' width='285px' height='177' src='../image/" + houses[i][7] + "' alt = '" + "이미지 불러오기 실패" + "'>"

    info.innerHTML += "<p style='position: relative; left: 300px;'>"
    info.innerHTML += "방 이름: " + houses[i][2] + "<br>"
    info.innerHTML += "주거 형태: " + houses[i][3] + "<br>"
    info.innerHTML += "크기: " + houses[i][4] + "평<br>"
    if(houses[i][3] == "월세")
    {
        info.innerHTML += "보증금: " + houses[i][5] + "만원 / 월세: " + houses[i][6] + "만원<br>"
        //info.innerHTML += "<p>" + houses[i][2] + " " + houses[i][3] + " 보증금:" + houses[i][5] + " 월세:" + houses[i][6] + " " + houses[i][4] + "평 " + houses[i][1] + "좋아요</p>"
    }
    else
    {
        info.innerHTML += "가격: " + houses[i][5] + "억<br>"
        //info.innerHTML += "<p>" + houses[i][2] + " " + houses[i][3] + " " + houses[i][5] + "억 " + houses[i][4] + "평 " + houses[i][1] + "좋아요</p>"
    }
    info.innerHTML += "</p>"
    
/*
    if(houses[i][2] == "행복아파트")
    {
        info.innerHTML += "<a class='light' href='happy_apart.jpg'>사진 보기</a>"
    }
    else if(houses[i][2] == "신혼아파트")
    {
        info.innerHTML += "<a class='light' href='married_apart.jpg'>사진 보기</a>"
    }
    else if(houses[i][2] == "좋아아파트")
    {
        info.innerHTML += "<a class='light' href='good_apart.jpg'>사진 보기</a>"
    }
    else if(houses[i][2] == "편리아파트")
    {
        info.innerHTML += "<a class='light' href='conve_apart.jpg'>사진 보기</a> "
    }
    */

    info.innerHTML += "<input type='button' value='좋아요' onclick='plus(" + houses[i][0] + ")'></input>"
    info.innerHTML += houses[i][1]
    newDIV.setAttribute("class", "myDiv");
    info.appendChild(newDIV);
}

function newHouse()
{
    var houseTypeForNewHouse = document.getElementsByClassName("houseTypeForNewHouse")
    var newHouseInfo = document.getElementById("newHouseInfo")
    
    newHouseInfo.innerHTML = ""

    if(houseTypeForNewHouse[0].value == "월세")
    {
        alert("월세입니다.")
        newHouseInfo.innerHTML += "보증금 : <input type='text' style='width: 40px;' id='newHouseDeposit'></input>만<br>"
        newHouseInfo.innerHTML += "월세 : <input type='text' style='width: 40px;' id='newHouseMonthly'></input>만"
    }
    else
    {
        alert("매매or전세입니다.")
        newHouseInfo.innerHTML += "가격 : <input type='text' style='width: 40px;' id='newHousePrice'></input>억"
    }

    newHouseInfo.innerHTML += "<br>크기 : <input type='text' style='width: 20px;' id='newHouseSize'></input>평"

    newHouseInfo.innerHTML += "<br><input type='button' value='새로 등록하기' onclick='uploadNewHouse()'></input>"
}

function uploadNewHouse()
{
    
    var idx2 = document.getElementsByClassName("houseNameForNewHouse")[0].value;
    var idx3 = document.getElementsByClassName("houseTypeForNewHouse")[0].value;
    var idx4 = document.getElementById("newHouseSize").value

    var houseTypeForNewHouse = document.getElementsByClassName("houseTypeForNewHouse")

    var idx5=""
    var idx6=""
    var idx7=""

    if(houseTypeForNewHouse[0].value == "월세")
    {
        var newHouseDeposit = document.getElementById("newHouseDeposit").value
        var newHouseMonthly = document.getElementById("newHouseMonthly").value

        idx5 = newHouseDeposit
        idx6 = newHouseMonthly
    }
    else
    {
        var newHousePrice = document.getElementById("newHousePrice").value
        idx5 = newHousePrice
    }

    if(idx2 == "행복아파트")
    {
        idx7 = 'happy_apart.jpg'
    }
    else if(idx2 == "신혼아파트")
    {
        idx7 = 'married_apart.jpg'
    }
    else if(idx2 == "좋아아파트")
    {
        idx7 = 'good_apart.jpg'
    }
    else if(idx2 == "편리아파트")
    {
        idx7 = 'conve_apart.jpg'
    }
    else if(idx2 == "청년빌라")
    {
        idx7 = 'young_apart.jpg'
    }
    else if(idx2 == "혼자산다빌라")
    {
        idx7 = 'alone_apart.jpg'
    }
    else if(idx2 == "넓어원룸")
    {
        idx7 = 'wide_house.jpg'
    }

    houses[houses.length] = [houses.length, 0, idx2, idx3, idx4, idx5, idx6, idx7]
    alert("새로운 매물 추가 완료!")
}