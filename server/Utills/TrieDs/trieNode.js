function createNode(ch){
    this.ch=ch;
    this.isEnd=false;
    this.rootFilePath="";
    this.map={};
  }
  
  function insert(word,index,root,path){
    
    //base case
    if(index>=word.length)
    {
      root.isEnd=true;
      root.rootFilePath=path;
      return;
    }
  
    if(!root.map[word[index]])
    {
      root.map[word[index]]=new createNode(word[index],"");
    }
    
    insert(word, index+ 1, root.map[word[index]],path);
   
  }
  
  
  function search(word, index, root) {
    if(index===word.length)
    {
      if(root.isEnd)
      return root.rootFilePath;
      return "Not Found"
    }
  
    if(!root.map[word[index]])
    {
      return "Not Found"
    }
    
    return search(word, index+ 1, root.map[word[index]]);
  }
  
  modules.export={createNode,insert,search}