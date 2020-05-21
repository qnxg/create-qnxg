import createGraphQLApp from './app';
import {getConfig} from '../config/index';

const config = getConfig();

const app = createGraphQLApp(config);

app.listen(3000, () => {
  console.log('now listen at http://localhost:3000');
});
