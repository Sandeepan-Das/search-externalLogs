function createNode(ch){
    this.ch=ch;
    this.isEnd=false;
    this.rootFilePath="";
    this.map={};
  }
  
  function insert(word,root,path){
    
    for(index=0;index<word.length;index++)
    {
        if(!root.map[word[index]])
        {
          root.map[word[index]]=new createNode(word[index],"");
        }
        root=root.map[word[index]];
    }
    root.isEnd=true;
    root.rootFilePath=path;
  }
  
  function search(word,root) {
    for(index=0;index<word.length;index++)
    {
        if(!root.map[word[index]])
        {
          return "Not Found";
        }
        root=root.map[word[index]];
    }
    if(root.isEnd)
      return root.rootFilePath;
      return "Not Found"
  }
  
  module.exports={createNode,insert,search}