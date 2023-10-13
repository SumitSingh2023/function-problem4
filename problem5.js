/*Write a function to convert a character to lower case
Use this function to convert a given word to lower case
Use that function to convert an array of strings to array of lower case strings
Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"]*/


function upTolow(arr){
    let low ="abcdefghijklmnopqrstuvwxyz"
    let upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
    for(let i=0;i<arr.length;i++){
      let str=arr[i]
      let bag=""
      for(let j=0;j<str.length;j++){
        for(let k=0;k<upper.length;k++){
          if(str[j]==upper[k]){
            bag=bag+low[k]
          }
        }
      }
      arr[i]=bag;
    }
    return arr;
    
  }
  let arr=["MA", "SA", "I", "SCH", "OOL"]
  let ans=upTolow(arr)
  console.log(ans)
  

