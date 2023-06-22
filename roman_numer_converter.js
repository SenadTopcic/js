function convertToRoman(num) {
    "use strict"

    let result = "";
    let arr_place_v = place_value(num);
    //thousands
    result = result + "M".repeat(arr_place_v[0]);
    //hundreds
    result += place_roman(arr_place_v[1], "CM", "D", "CD", "C");
    //tens
    result += place_roman(arr_place_v[2], "XC", "L", "XL", "X");
    //ones
    result += place_roman(arr_place_v[3], "IX", "V", "IV", "I");

    return result;      
}


function place_value(num)
{
        let arr_place_v = [];
        let tmp_num = num;
        let place;
        if(tmp_num / 1000 >= 0)
        {
            place = Math.floor(tmp_num / 1000);
            tmp_num = tmp_num - (place*1000);
            arr_place_v.push(place);
        }
        if(tmp_num / 100 >= 0)
        {
            place = Math.floor(tmp_num / 100);
            tmp_num = tmp_num - (place*100);
            arr_place_v.push(place);
        }
        if(tmp_num/10 >=0)
        {
            place = Math.floor(tmp_num / 10);
            tmp_num = tmp_num - (place*10);
            arr_place_v.push(place);
        }
        if(tmp_num >= 0 )
        {
            place = tmp_num;
            arr_place_v.push(place);
        }            
    return arr_place_v;
};

function place_roman(place, a,b,c,d){
    let result = ""
    if (place == 9)
        result += a;
    if (place >= 5 && place < 9)
    {
        result = result + b;
        if(place - 5 > 0)
        { 
            result = result + d.repeat((place - 5));
        }   
    }
    if (place == 4)
        result = result + c;
    if (place >= 1 && place < 4)
        result = result + d.repeat((place));
    if (place== 0)
        result+=result;
    return result;
}

console.log(convertToRoman(3999))