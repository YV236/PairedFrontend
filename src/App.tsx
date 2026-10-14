import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessengerPage from "./pages/MessengerPage";
import { SidebarProvider } from "./context/SideBarContext";

function App() {
    return (
        <BrowserRouter>
        <SidebarProvider>
            <Routes>
                <Route path="/" element={<MessengerPage />} />
                <Route path="/chat/:chatId" element={<MessengerPage />} />
                <Route path="/settings" element={<MessengerPage />} />
                <Route path="/contacts" element={<MessengerPage />} />
            </Routes>
        </SidebarProvider>
        </BrowserRouter>
    );
}

export default App;