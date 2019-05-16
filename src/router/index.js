import React, {lazy, Suspense} from 'react';

export default {
    FirstPage: {
        path: '/FirstPage',
        page: lazy(() => import('page/FirstPage'))
    }
}

