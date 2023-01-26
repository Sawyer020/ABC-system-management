import App from "../App"
import Home from "../views/Home"
import About from "../views/About"
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
//Two type of router component: BrowserRouter (History), HashRouter (Hash)

// * Method 1: Using 'Component' *
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                {/*⬇ Redirect to path '/home' when user access the main page*/}
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>

        </Routes>
    </BrowserRouter>
)
/*  
//equivalent to
    {
        path:"/home",
        component:
    }
*/

export default baseRouter