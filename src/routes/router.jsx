import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <div>HomePage</div>
            },
        ]
    }
]);

export default router;