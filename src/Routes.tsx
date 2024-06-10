import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { About } from "./pages/institucional/About";
import { Banks } from "./pages/ajude/Banks";
import { ClickHope } from "./pages/ajude/ClickHope";
import { Contact } from "./pages/Contact";
import { ExtendTheHand } from "./pages/ajude/ExtendTheHand";
import { Transparency } from "./pages/institucional/Transparency";
import { Home } from "./pages/Home";
import { FriendEnterprise } from "./pages/ajude/FriendEnterprise";
import { WithSliderLayout } from "./layouts/WithSliderLayout";
import { IncomeTax } from "./pages/ajude/IncomeTax";
import { Blog } from "./pages/Blog";
import { ArteVida } from "./pages/projetos/ArteVida";
import { ProjectsLayout } from "./layouts/ProjectsLayout";
import { BoysHouse } from "./pages/projetos/BoysHouse";
import { BreadHouse } from "./pages/projetos/BreadHouse";
import { BuildingFuture } from "./pages/projetos/BuildingFuture";
import { HogarNinas } from "./pages/projetos/HogarNinas";
import { MathewDistricts } from "./pages/projetos/MathewDistricts";
import { MathewStreets } from "./pages/projetos/MathewStreets";
import { HelpLifes } from "./pages/projetos/HelpLifes";
import { SingleBlog } from "./pages/SingleBlog";
import { ShareAndLove } from "./pages/projetos/ShareAndLove";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />

        <Route path="/institucional/" element={<WithSliderLayout />}>
          <Route path="sobre" element={<About />} />
          <Route path="transparencia" element={<Transparency />} />
        </Route>

        <Route path="/projetos/" element={<ProjectsLayout />}>
          <Route path="artevida" element={<ArteVida />} />
          <Route path="casa-de-meninos" element={<BoysHouse />} />
          <Route path="casa-do-pao" element={<BreadHouse />} />
          <Route path="mateus-25-35-compartilhar" element={<ShareAndLove />} />
          <Route path="construindo-o-futuro" element={<BuildingFuture />} />
          <Route path="hogarninas" element={<HogarNinas />} />
          <Route path="mateus-25-35-bairros" element={<MathewDistricts />} />
          <Route path="mateus-25-35-ruas" element={<MathewStreets />} />
          <Route path="socorrevidas" element={<HelpLifes />} />
        </Route>

        <Route path="/ajude/" element={<WithSliderLayout />}>
          <Route path="cofrinhos" element={<Banks />} />
          <Route path="estendaamao" element={<ExtendTheHand />} />
          <Route path="clique-esperanca" element={<ClickHope />} />
          <Route path="empresa-amiga" element={<FriendEnterprise />} />
          <Route path="imposto-de-renda" element={<IncomeTax />} />
        </Route>
      </Route>
    </Routes>
  );
}
