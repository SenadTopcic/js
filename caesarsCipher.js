function rot13(str) {
    
    let result = "";
    //char are in range from 65 do 90
    for (let i = 0; i < str.length; i++) 
    {
        let position_char = str.charCodeAt(i);

        if (position_char >= 65 && position_char <= 90)
        {
            if(position_char >=78)
            {
                let new_pos = position_char - 13;
                let tmp_char = String.fromCharCode(new_pos);
                result += tmp_char;
            }
            else if (position_char < 78)
            {
                let new_pos = 90 - (77 - position_char);
                let tmp_char = String.fromCharCode(new_pos);
                result += tmp_char;
            }
        }else 
        {
            result += str[i];
        }
    }
    return result;
}
  console.log("<" + rot13("SERR PBQR PNZC") + ">");