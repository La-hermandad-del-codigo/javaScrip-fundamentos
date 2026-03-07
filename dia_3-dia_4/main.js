import { menu } from "./menu.js";
import { obtenerResumenMenu } from "./menu.js";
import { renderLista, renderMenu } from "./ui.js";

renderLista("Menú del día", obtenerResumenMenu(menu))
renderMenu(menu)
obtenerResumenMenu(menu);