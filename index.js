const _ = require('lodash');

try {
  console.log(_.sum([1, 2]));
  console.log(process.versions.node);
} catch (err) {
  console.error(err.starck);
  process.exit(1);
}
