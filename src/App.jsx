import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import Languages from "./pages/Languages";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Top50Songs from "./pages/Top50Songs";
import AlbumPage from "./pages/AlbumPage";
import  AddAlbum  from "./pages/AddAlbum";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/top50" element={<Top50Songs />} />
        <Route path="/add-album" element={<AddAlbum />} />
        <Route path="/albums/:albumId" element={<AlbumPage />} />
      </Route>
    </Routes>
  );
}

export default App;
