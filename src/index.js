import dva from 'dva';
import './index.css';

import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
new VConsole() // 初始化

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/products').default);
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
