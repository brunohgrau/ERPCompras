import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");
const queryClient = new QueryClient();
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
