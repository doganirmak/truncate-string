function truncateString(str, num) {
    if (str.length > num){
      let arr = str.split("");
      let result = [];
      for (let i = 0; i < num; i++){
        result += arr[i];
      }
      console.log(result + "...");
      return result + "...";
    }
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);