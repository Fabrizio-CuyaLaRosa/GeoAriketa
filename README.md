# GeoAriketa
Trabajo para Geolokalizazioa, idea inicial: Recoger datos de una web y generar marcadores en un mapa en base a estos.

## Documentación V1.0
Esta documentación respecta a la versión 1.0 del proyecto y a continuación se mostrarán problemas, funciones y posibles mejoras de la versión actual.

### Fallos/Problemas
- La idea era llamar a una API pública para recoger los datos necesarios pero no logré solucionar el problema de política CORS y no conseguí hacer una API propia que llame a esa API pública, por lo que opté por recoger los datos manualmente y colocarlo en un data.json para simular la API, cambiando la función de mostrar los datos mostrados del usuario logeado a colocar un select en el navbar para cambiar entre los datos por mostrar.
- El botón de configuración no tiene utilidad actualmente pero en la próxima versión tendrá la opción de cambio de idioma.

### Funciones actuales
**App**
- Selector para cambiar de usuario/datos.
- Sidebar para cambiar de pestaña dentro de la página.
- Botón de configuración que actualmente está en desarrollo.

**Dashboard**
<img width="1919" height="955" alt="Captura de pantalla 2026-01-16 212350" src="https://github.com/user-attachments/assets/d7ed64d0-f0d2-48ac-9020-ccc74805fe6d" />
*Datos de usuario en la página/Charges*
- El valor "Current" sube en 1 por la cantidad de milisegundos recolectados en data.json (data.currentUser.charges.cooldownMs) hasta llegar al máximo indicado en el mismo json.

*Localizaciones favoritas*
- Al darle click te lleva a la pestaña de Favorites.

**Favorites**
<img width="1919" height="955" alt="Captura de pantalla 2026-01-16 214615" src="https://github.com/user-attachments/assets/381f0666-a8dd-472d-9bac-079274053f62" />
*Mapa*
- Contiene marcadores generados mediante valores recogidos de data.json (data.currentUser.favoriteLocations), estos marcadores tienen una redirección dentro al hacerles click, al abrir el enlace te lleva a la ubicación mostrada dentro de la página de donde salen los datos.
- El mapa tiene un límite de zoom y bounds para evitar que el usuario se salga de los límites impuestos por el código.
  <img width="643" height="189" alt="image" src="https://github.com/user-attachments/assets/66507c31-4623-4aa4-93fa-7edfab6d7e1d" />

*Sidebar del mapa*
- Al hacer click sobre una de las coordenadas te llevará al marcador con las mismas coordenadas, ya que están generados mediante el mismo dato.
- Tiene un botón a la izquierda para cerrar/abrir el sidebar.

### Posibles mejoras
- Añadir un cambio de diseño para cuando el usuario tiene el navegador en modo claro/oscuro
- Al principio la idea era únicamente mostrar los datos del usuario logeado en la página oficial ([Wplace](https://wplace.live)) pero en el desarrollo pensé en la posibilidad de preguntar si se desea guardar esos datos en una base de datos para la página y mantener/mejorar el selector del navbar, quizá colocando un buscador para buscar algún usuario que haya guardado sus datos en la base de datos.
