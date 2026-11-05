import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessengerPage from "./pages/MessengerPage";
import { PageViewProvider } from "./context/PageViewContext";

function App() {
    return (
        <BrowserRouter>
            <PageViewProvider>
                <Routes>
                    <Route path="*" element={<MessengerPage />} />
                </Routes>
            </PageViewProvider>
        </BrowserRouter>
    );
}

export default App;
