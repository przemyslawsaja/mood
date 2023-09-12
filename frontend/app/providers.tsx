"use client";
import { GlobalStyles } from "@/theme/global-styles";
import { theme } from "@/theme";
import React from "react";
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "@/lib/registry";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledComponentsRegistry>
        <GlobalStyles />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
}
