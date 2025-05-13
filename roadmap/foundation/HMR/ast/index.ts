import { parse, ParseResult } from "@babel/parser";
import fs from 'fs';
import path from 'path';
import traverse from "@babel/traverse";
// 生成 ast
const content = fs.readFileSync('./demo.js', 'utf-8');

const entry = './demo.js';

const dependencies: Map<string, string> = new Map();

const parseAst = (content: string) => {
    return parse(content, {
        sourceType: 'module'
    });
}

const createDepGraph = (ast: ParseResult) => {
    traverse(ast, {
        ImportDeclaration({node}) {
            if (node.source.value) {
                console.log(__dirname, node.source.value);
                const filePath = path.join(__dirname, 'dist', node.source.value + '.js');
                dependencies.set(node.source.value, filePath);
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                const depAst = parseAst(fileContent);
                createDepGraph(depAst);
            }
        },
        ExportNamedDeclaration({node}) {
            if (node.source?.value) {
                console.log(__dirname, node.source.value);
                const filePath = path.join(__dirname, 'dist', node.source.value + '.js');
                dependencies.set(node.source.value, filePath);
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                const depAst = parseAst(fileContent);
                createDepGraph(depAst);
            }
        }
    })
}

const entryAst = parseAst(content);

createDepGraph(entryAst);

console.log(dependencies);