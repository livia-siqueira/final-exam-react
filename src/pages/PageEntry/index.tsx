import {
  FormLogin,
  Form,
  FormResetPassword,
  MainText,
  FooterPage,
} from "@components/index";
import { Route, Routes } from "react-router";
import { Container } from "./styles";

export function PageEntry() {
  return (
    <>
      <Container>
        <MainText />
        <div>
          <Routes>
            <Route path="/" element={<FormLogin />} />
            <Route path="/Registration" element={<Form title="Registration" />} />
            <Route path="/ResetPassword" element={<FormResetPassword />} />
          </Routes>
        </div>
      </Container>
      <FooterPage />
    </>
  );
}
