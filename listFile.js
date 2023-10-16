import fs from "fs";
import path from "path";

const listFiles = (dirName, tree = {}) => {
    try {
      const children = fs.readdirSync(dirName);
      children.forEach(async child => {
        const stat = fs.statSync(path.join(dirName, child));
        if (stat.isDirectory()) {
            let node = {
                text: child,
                items: []
            }
            
            listFiles(path.join(dirName, child), node)
            tree.items.push(node);
        } else {
            const node = {
                text: child,
                link: path.join(dirName, child)
            }
            tree.items.push(node)
        }
      })
    } catch(e) {
      //
      console.log(e);
    } 
    return tree
  };
const tree = { text: 'CSS 基础', items: []};
const test = listFiles(path.join( path.resolve('docs'), "./base"), tree);
console.log(JSON.stringify(test));

export default listFiles;