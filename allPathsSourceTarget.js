var allPathsSourceTarget = function(graph){
    const result = []
    dfs(graph,0,result,[0]);
    return result
}

function dfs(graph,start,result,temp){
    if (start === graph.length -1){
        result.push(temp.slice())
        return
    }
    for(let i = 0;i<graph[start].length;i++){
        temp.push(graph[start][i])
        dfs(graph,graph[start][i],result,temp);
        temp.pop();
    }
}