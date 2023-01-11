import {useEffect,  Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import AOS from "aos";
import NavScrollTop from './components/NavScrollTop';
import { useUserState } from './components/UserContext';

const HomeOne = lazy(() => import("./pages/HomeOne"));
const HomeTwo = lazy(() => import("./pages/HomeTwo"));
const HomeThree = lazy(() => import("./pages/HomeThree"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Service"));
const Work = lazy(() => import("./pages/Work"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));
const BlogGrid = lazy(() => import("./pages/BlogGrid"));
const BlogClassic = lazy(() => import("./pages/BlogClassic"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const BlogCategories = lazy(() => import("./pages/BlogCategories"));
const BlogTag = lazy(() => import("./pages/BlogTag"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Logout = lazy(() => import("./pages/Logout"));
const MainOne = lazy(() => import("./pages/MainOne"));
const ExpertTechniques = lazy(() => import("./pages/ExpertTechniques"));
const PageDayTrade = lazy(() => import("./pages/PageDayTrade"));
const PageTop10News = lazy(() => import("./pages/PageTop10News"));
const PageSettings = lazy(() => import("./pages/PageSettings"));
const PageBilling = lazy(() => import("./pages/PageBilling"));
const PageSchedule = lazy(() => import("./pages/PageSchedule"));
const HomeGetStarted = lazy(() => import("./pages/HomeGetStarted"));
const LoginRedirect = lazy(() => import("./pages/LoginRedirect"));
const Test = lazy(() => import("./pages/Test"));

function App() {
  const { isAuthenticated, user, jwt } = useUserState();
  const uname = isAuthenticated ? user.username : '';
  const eventStandard = process.env.REACT_APP_REALTIME_EVENT_STANDARD;

  useEffect(() => {
    AOS.init({
        offset: 80,
        duration: 1000,
        once: true,
        easing: 'ease',
    });
    AOS.refresh();
    
  }, [])
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavScrollTop>
          <Suspense fallback={<div />}>
                <Routes>
                  <Route path={`${process.env.PUBLIC_URL + "/"}`} element={<HomeOne/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/home-one"}`} element={<HomeOne/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/home-two"}`} element={<HomeTwo/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/home-three"}`} element={<HomeThree/>}/>
                  <Route path={`${process.env.PUBLIC_URL + "/about"}`} element={<About/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/service"}`} element={<Service/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/work"}`} element={<Work/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/work-details/:id"}`} element={<WorkDetails/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/blog-grid"}`} element={<BlogGrid/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/blog-classic"}`} element={<BlogClassic/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} element={<BlogTag/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/category/:slug"}`} element={<BlogCategories/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}element={<BlogDetails/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/contact"}`} element={<Contact/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/login"}`} element={<Login/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/logout"}`} element={<Logout/>} />
                  <Route path={`${process.env.PUBLIC_URL + "/dashboard"}`} element={<MainOne />} />
                  <Route path={`${process.env.PUBLIC_URL + "/dashboard/expert"}`} element={<ExpertTechniques />} />
                  <Route path={`${process.env.PUBLIC_URL + "/daytrade"}`} element={<PageDayTrade room={eventStandard} username={uname} jwt={jwt} />} />
                  <Route path={`${process.env.PUBLIC_URL + "/topnews"}`} element={<PageTop10News jwt={jwt} />} />
                  <Route path={`${process.env.PUBLIC_URL + "/settings"}`} element={<PageSettings jwt={jwt} />} />
                  <Route path={`${process.env.PUBLIC_URL + "/billings"}`} element={<PageBilling jwt={jwt} />} />
                  <Route path={`${process.env.PUBLIC_URL + "/schedule"}`} element={<PageSchedule jwt={jwt} />} />
                  <Route path={`${process.env.PUBLIC_URL + "/get-started/:id"}`} element={<HomeGetStarted />} />
                  <Route path={`${process.env.PUBLIC_URL + "/connect/google/redirect"}`} element={<LoginRedirect providerName="google" />} />
                  <Route path={`${process.env.PUBLIC_URL + "/connect/facebook/redirect"}`} element={<LoginRedirect providerName="facebook" />} />
                  <Route path={`${process.env.PUBLIC_URL + "/connect/twitter/redirect"}`} element={<LoginRedirect providerName="twitter" />} />
                  <Route path={`${process.env.PUBLIC_URL + "/test"}`} element={<Test />} />
                </Routes>
            </Suspense>
        </NavScrollTop>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
