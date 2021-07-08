import { graph } from "./graph.mjs";
console.log(graph);

const seenStack = [];
const SCCFounds = [];
let index = 1;
graph.forEach((node) => {
  if (node.index === undefined) {
    console.log("node id visited : ", node.id);
    search(node);
  }
});

console.log(SCCFounds);

function search(node) {
  console.log("search in node ", node.id)
  node.index = index;
  node.lowLink = index;
  index++;
  seenStack.push(node.id);
  node.onStack = true;
  node.connectedTo.forEach((idNode) => {
    const neighbourNode = graph.find(
      (nodeInGraph) => nodeInGraph.id === idNode
    );
    if (neighbourNode.index === undefined) {
      search(neighbourNode);
      node.lowLink = Math.min(node.lowLink, neighbourNode.lowLink);
    } else if (seenStack.indexOf(neighbourNode.id) != -1) {
      node.lowLink = Math.min(node.lowLink, neighbourNode.index);
    }
  });
  if (node.lowLink === node.index) {
    const SCCFound = [];
    let currentNode;
    do {
      const currentNodeId = seenStack.pop();
      console.log("currentNodeId", currentNodeId);
      currentNode = graph.find(
        (nodeInGraph) => nodeInGraph.id === currentNodeId
      );
      currentNode.onStack = false;
      SCCFound.push(currentNode.id);
    } while (currentNode.id !== node.id);
    SCCFounds.push(SCCFound);
    console.log("push SCC", SCCFound);
  }
}
