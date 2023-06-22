function telephoneCheck(str) {
  let cond = /^[0-9]{10}$|(^1\s\(\d{3}(\)|(\)\s))\d{3}(\s|\-)\d{4}$)|(^1\s\d{3}(\s|\-)\d{3}(\s|\-)\d{4}$)|^\d{3}\-\d{3}\-\d{4}$|(^1\(\d{3}\)\d{3}(\s|\-)\d{4}$)|(^\(\d{3}\)\d{3}(\s|\-)\d{4}$)|1\d{9}$/;
  let result = cond.test(str); 
  return result;
}


console.log(telephoneCheck("5555555555"));

