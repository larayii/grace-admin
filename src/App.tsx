import { useEffect, useMemo } from "react";
import { ConfigProvider, ThemeConfig, theme, App as AntdApp } from "antd"
import Router from "@/router/index.tsx";
import { useGlobalStore } from "./stores/global";
import { i18n } from "./utils/i18n";
import enUS from "./assets/locales/en-US"
import zhCN from "./assets/locales/zh-CN"

function App() {

  const { darkMode, lang } = useGlobalStore();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [darkMode]);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const curTheme: ThemeConfig = useMemo(() => {
    if (darkMode) {
      return {
        token: {
          colorPrimary: 'rgb(124, 77, 255)',
          colorBgBase: 'rgb(17, 25, 54)',
          colorBgContainer: 'rgb(26, 34, 63)',
          colorBorder: 'rgba(189, 200, 240, 0.157)',
          colorBgTextHover: 'rgba(124, 77, 255, 0.082)',
          colorTextHover: 'rgba(124, 77, 255, 0.082)',
          controlItemBgActive: 'rgba(33, 150, 243, 0.16)',
          colorBgElevated: 'rgb(33, 41, 70)'
        },
        algorithm: theme.darkAlgorithm,
      }
    } else {
      return {
        token: {
          colorPrimary: 'rgb(124, 77, 255)',
        },
      }
    }
  }, [darkMode]);

  return (
    <ConfigProvider
      theme={curTheme}
      //@ts-ignore
      locale={lang === 'zh' ? zhCN : enUS}
      componentSize='large'
    >
      <AntdApp>
        <Router />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
