# Imprimir Tickets con Angular

## Recursos

- Drivers
    
    Driver para la impresora POS-5802DD
    
    [https://github.com/Lecibur-13/termal-printer-angular/blob/27583147b1dee9e6f9b4e11af62e2126403c2807/POS Printer Driver Setup .exe](https://github.com/Lecibur-13/termal-printer-angular/blob/27583147b1dee9e6f9b4e11af62e2126403c2807/POS%20Printer%20Driver%20Setup%20.exe)
    
- Plug-in
    
    Plugin de @parzibyte
    
    [termal-printer-angular/plugin-impresora-termica-v3-3.2.zip at main · Lecibur-13/termal-printer-angular](https://github.com/Lecibur-13/termal-printer-angular/blob/main/plugin-impresora-termica-v3-3.2.zip)
    
- Conector
    
    [termal-printer-angular/ConectorPluginV3.ts at main · Lecibur-13/termal-printer-angular](https://github.com/Lecibur-13/termal-printer-angular/blob/main/ConectorPluginV3.ts)
    

---

## Tuto

- Paso 1: Drivers de impresoras
    
    **Paso 1: Drivers de impresoras**
    
    Para imprimir tickets con Angular, necesitamos descargar los drivers de la impresora térmica. En la sección de **Recursos > Drivers**, encontrará un enlace para descargar los drivers para la impresora POS-5802DD.
    
    Una vez que haya descargado los drivers, siga las instrucciones para instalarlos. Es posible que necesite reiniciar su computadora después de la instalación. Después de que se hayan instalado los drivers, conecte la impresora térmica a su computadora a través de USB y espere a que Windows la reconozca.
    
    Una vez que Windows haya reconocido la impresora, marque la impresora como predeterminada en la sección de impresoras y dispositivos de Windows.
    
- Paso 2: Compartir impresora
    
    <aside>
    👉 **Nota:** Antes de continuar, asegúrese de haber completado el **Paso 1: Drivers de impresoras**.
    
    </aside>
    
    Para poder imprimir desde Angular, es necesario que la impresora térmica esté compartida en su red local. Para hacerlo, siga estos pasos:
    
    1. Abra el **Panel de control** de Windows y seleccione **Impresoras y dispositivos**.
    2. Haga clic derecho en la impresora térmica y seleccione **Propiedades**.
    3. En la pestaña **Compartir**, seleccione **Compartir esta impresora**.
    4. Escriba un nombre para la impresora compartida y haga clic en **Aplicar**.
- Paso 3: Implementar conector
    
    Para descargar el archivo que se encuentra en Recursos > Conector, siga estos pasos:
    
    1. Haga clic en el enlace proporcionado en la sección de **Recursos > Conector**.
    2. Haga clic en **Download** para descargar el archivo **ConectorPluginV3.ts**.
    3. Abra su proyecto de Angular y pegue el archivo `ConectorPluginV3.ts` en la carpeta de su proyecto.
    
    A continuación, puede comenzar a escribir el código necesario para imprimir los tickets. A continuación, se muestra un bloque de código vacío para que pueda agregar su propio código:
    
    ```
    import ConectorPluginV3 from "./ConectorPluginV3";
    
    async ngOnInit() {
      await ConectorPluginV3.obtenerImpresoras();
    }
    
    async probarImpresion() {
        if (!this.mensaje) {
          return alert("Escribe un mensaje");
        }
        const conector = new ConectorPluginV3();
        conector
          .Iniciar()
          .EstablecerAlineacion(ConectorPluginV3.ALINEACION_CENTRO)
          .Feed(1)
          .EscribirTexto(this.mensaje)
          .Feed(1)
          .Iniciar()
          .Feed(1);
        const respuesta = await conector.imprimirEn('POS-58');
        if (respuesta == true) {
          console.log("Impresión correcta");
        } else {
          console.log("Error: " + respuesta);
        }
      }
    ```
    

## Extras

---

- ****Cambiando el puerto del plugin****
    
    Para cambiar el puerto del plugin, siga los siguientes pasos:
    
    1. Cree un acceso directo al archivo `plugin_impresoras_termicas_v3_prod_64.exe`.
    2. Haga clic derecho en el acceso directo y seleccione **Propiedades**.
    3. En el campo **Destino**, agregue `-puerto={{PUERTO}}` al final. Por ejemplo: `C:\\ruta\\al\\archivo\\plugin_impresoras_termicas_v3_prod_64.exe --puerto=COM3`.
    4. Haga clic en **Aplicar** y luego en **Aceptar**.
    
    <aside>
    👉🏻 tener en cuenta de que si se cambia el puerto, se debe cambiar el puerto también en el codigo de angular
    
    </aside>
