import { QueryClient, QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
