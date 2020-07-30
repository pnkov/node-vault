const fs = require('fs');
const { compile } = require('json-schema-to-typescript');
const { format: prettify } = require('prettier');
const commands = require('../src/commands');


const formatOptions = {
  bannerComment: '',
  style: {
    printWidth: 120,
    tabWidth: 4,
  },
};

function format(code) {
  return prettify(
      Array.isArray(code) ? code.join('\n') : code,
      Object.assign({ parser: 'typescript' }, formatOptions.style)
  );
}

Promise.all(Object.keys(commands).map(name => {
  const schema = commands[name].schema || {};
  let req = schema.req || { type: 'object' };
  let res = schema.res || { type: 'object' };

  if (!('required' in req) || (req.required.length === 0)) {
    req = { oneOf: [req, { tsType: 'void' }] };
  }
  if (!('required' in res) || (res.required.length === 0)) {
    res = { oneOf: [res, { tsType: 'void' }] };
  }

  return Promise.all([
    compile(req, name, formatOptions),
    compile(res, name, formatOptions),
  ]).then(types => ({
    name,
    tName: name.replace(/^\w/, c => c.toUpperCase()),
    req: types[0],
    res: types[1],
  }));
})).then(command => {
  fs.writeFileSync('./types/req.d.ts', format([
    'export namespace req {',
    ...command.map(c => c.req),
    '}',
  ]));

  fs.writeFileSync('./types/res.d.ts', format([
    'export namespace res {',
    ...command.map(c => c.res),
    '}',
  ]));

  fs.writeFileSync('./types/commands.d.ts', format([
    'import { req } from "./req";',
    'import { res } from "./res";',
    '',
    'export interface commands {',
    ...command.map(c => `${c.name}(options: req.${c.tName}): Promise<res.${c.tName}>;`),
    '}',
  ]));
});
