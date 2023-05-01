import { render, RenderOptions } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";

type Props = {
  children: React.ReactNode;
};

const Providers: React.FC<Props> = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions
) => render(ui, { wrapper: Providers, ...options });
