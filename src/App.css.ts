//App.css.ts

//весь этот файл скомпилируется в нативный css
//и маленькую js обвязку с экспортами!

import {
  createTheme,
  style,
  globalStyle,
  composeStyles
} from "@vanilla-extract/css";

//а это уже third-party библиотека
//версия classnames, заточенная под специфику vanilla-extract
import { vcn } from "vanilla-classnames";

//создаём тему и её "контракт"
export const [lightTheme, vars] = createTheme({
  color: {
    body: "white",
    text: "black",
    inactive: "gray",
    active: "red"
  }
});

//добавляем новую тему, используя контракт из предыдущей
export const darkTheme = createTheme(vars, {
  color: {
    body: "black",
    text: "white",
    inactive: "gray",
    active: "blue"
  }
});

//глобальный стиль
globalStyle("body", {
  //это будет "ссылкой" на переменную
  //background-color: var(--color-body__1bu5mlq1);
  backgroundColor: vars.color.body
});

//обычный scoped стиль
export const switchButton = style({
  marginBottom: "20px"
});

//scoped стиль
const common = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  cursor: "pointer",
  color: vars.color.text
});

const size = style({
  width: "150px",
  height: "150px",
  transition: "width 1s, height 1s",

  //сразу с дополнительным селектором
  ":hover": {
    width: "200px",
    height: "200px"
  }
});

//toggle - это функция, принимающая что-то вроде
// {active: someCondition} и возвращающая строку классов
export const toggle = vcn(composeStyles(common, size), {
  active: [
    //стиль если переключатель активен
    style({
      background: vars.color.active
    }),
    //и если неактивен
    style({
      background: vars.color.inactive
    })
  ]
});
