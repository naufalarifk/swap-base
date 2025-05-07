import { NuqsAdapter } from 'nuqs/adapters/react-router/v7';
import { Route, Routes, Outlet } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { Base } from '../ui/base';


export default function RootRoutes() {
    return (
        <NuqsAdapter>
            <Outlet />
            <Routes>
                <Route element={<Base />}>
                    <Route path='/' element={<MainPage />} />
                </Route>
            </Routes>
        </NuqsAdapter>
    )
}