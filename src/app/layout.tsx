"use client";
import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import RTL from "@app/(DashboardLayout)/layout/shared/customizer/RTL";
import {ThemeSettings} from "@utils/theme/Theme";
import {AppState, store} from "@/src/store/store";
import {useSelector} from "@/src/store/hooks";
import {Provider} from "react-redux";
import NextTopLoader from 'nextjs-toploader';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "@/app/api/index";
// import "@utils/i18n";
// import createEmotionCache from "@utils/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();

export const MyApp = ({ children }: { children: React.ReactNode }) => {
  const theme = ThemeSettings();

  const customizer = useSelector((state: AppState) => state.customizer);

  return (
    <>
      <NextTopLoader color="#5D87FF" />
      <ThemeProvider theme={theme}>
        <RTL direction={customizer.activeDir}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </RTL>
      </ThemeProvider>
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 3000);
  }, []);
  return (
    <html lang="fa" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          {loading ? (
            // eslint-disable-next-line react/no-children-prop
            <MyApp children={children} />
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100vh",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Provider>
      </body>
    </html>
  );
}
