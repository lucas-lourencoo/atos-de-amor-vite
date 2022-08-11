import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { About } from "./pages/About";
import { Banks } from "./pages/Banks";
import { ClickHope } from "./pages/ClickHope";
import { Contact } from "./pages/Contact";
import { ExtendTheHand } from "./pages/ExtendTheHand";
import { Transparency } from "./pages/Transparency";
import { Home } from "./pages/Home";
import { FriendEnterprise } from "./pages/FriendEnterprise";
import { WithSliderLayout } from "./layouts/WithSliderLayout";
import { IncomeTax } from "./pages/IncomeTax";
import { Blog } from "./pages/Blog";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/institucional/" element={<WithSliderLayout />}>
          <Route path="sobre" element={<About />} />
          <Route path="transparencia" element={<Transparency />} />
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
