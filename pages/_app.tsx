import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={Store}>
        <Component {...pageProps} />
      </Provider>
    </LocalizationProvider>
  );
}
