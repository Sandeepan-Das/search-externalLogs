function constructPiTable(pattern){
    len=pattern.length;
    var lps=new Array(len);
    lps[0]=0;
    var maxPrefix=0;

    for(i=1;i<len;i++){
     if(pattern.charAt(i)==pattern.charAt(maxPrefix)){
         maxPrefix++;
         lps[i]=maxPrefix;

     }else{
         if(maxPrefix==0)
         lps[i]=maxPrefix;
         else
         maxPrefix=lps[maxPrefix-1];
     }
    }
  return lps;
}

function KmpPatternMatching(text,pattern){
    n=text.length;
    m=pattern.length;
    var lps=constructPiTable(pattern);
    var matches=[]
    //pointer for text
    var i=0;

    //pointer for pattern
    var j=0;

    while(i<n){
        if (pattern.charAt(j) === text.charAt(i)) {
            j++;
            i++;
        }
        if (j===m) {
            matches.push(i-j);
            j = lps[j - 1];
        }
        else if (i < n && pattern.charAt(j) != text.charAt(i)) {
            if (j != 0)
                j = lps[j - 1];
            else
                i++;
        }
    }

    return matches;

}

module.exports={KmpPatternMatching}