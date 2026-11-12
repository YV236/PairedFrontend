import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessengerPage from "./pages/MessengerPage";
import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import { PageViewProvider } from "./context/PageViewContext";

function App() {
    return (
        <BrowserRouter>
            <PageViewProvider>
                <Routes>
                    <Route path="/app/:chatId" element={<MessengerPage />} />
                    <Route path="/app" element={<MessengerPage />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </PageViewProvider>
        </BrowserRouter>
    );
}

export default App;
