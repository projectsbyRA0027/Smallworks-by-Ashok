import {CreateStore} from 'redux';

import rootReducer from '../redusers/redusers';

export default CreateStore(
    rootReducer,
    undefined,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);
    

