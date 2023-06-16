const ConectorPluginV3 = (() => {

    /**
     * Una clase para interactuar con el plugin v3
     * desde TypeScript
     *
     * @date 2022-12-01
     * @author parzibyte
     * @see https://parzibyte.me/blog
     */

    class Operacion {
        nombre: string;
        argumentos: any[];
        constructor(nombre: string, argumentos: any[]) {
            this.nombre = nombre;
            this.argumentos = argumentos;
        }
    }

    class ConectorPlugin {
        ruta: string;
        serial: string;
        operaciones: Operacion[];

        static URL_PLUGIN_POR_DEFECTO = "http://localhost:8000";
        static Operacion = Operacion;
        static TAMAÑO_IMAGEN_NORMAL = 0;
        static TAMAÑO_IMAGEN_DOBLE_ANCHO = 1;
        static TAMAÑO_IMAGEN_DOBLE_ALTO = 2;
        static TAMAÑO_IMAGEN_DOBLE_ANCHO_Y_ALTO = 3;
        static ALINEACION_IZQUIERDA = 0;
        static ALINEACION_CENTRO = 1;
        static ALINEACION_DERECHA = 2;
        static RECUPERACION_QR_BAJA = 0;
        static RECUPERACION_QR_MEDIA = 1;
        static RECUPERACION_QR_ALTA = 2;
        static RECUPERACION_QR_MEJOR = 3;

        constructor(ruta: string = ConectorPlugin.URL_PLUGIN_POR_DEFECTO, serial: string = "") {
            this.ruta = ruta;
            this.serial = serial;
            this.operaciones = [];
            return this;
        }
        CargarImagenLocalEImprimir(ruta: string, tamaño: number, maximoAncho: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("CargarImagenLocalEImprimir", Array.from(arguments)));
            return this;
        }
        Corte(lineas: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("Corte", Array.from(arguments)));
            return this;
        }
        CorteParcial() {
            this.operaciones.push(new ConectorPlugin.Operacion("CorteParcial", Array.from(arguments)));
            return this;
        }
        DefinirCaracterPersonalizado(caracterRemplazo: string, matriz: string) {
            this.operaciones.push(new ConectorPlugin.Operacion("DefinirCaracterPersonalizado", Array.from(arguments)));
            return this;
        }
        DescargarImagenDeInternetEImprimir(urlImagen: string, tamaño: number, maximoAncho: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("DescargarImagenDeInternetEImprimir", Array.from(arguments)));
            return this;
        }
        DeshabilitarCaracteresPersonalizados() {
            this.operaciones.push(new ConectorPlugin.Operacion("DeshabilitarCaracteresPersonalizados", Array.from(arguments)));
            return this;
        }
        DeshabilitarElModoDeCaracteresChinos() {

            this.operaciones.push(new ConectorPlugin.Operacion("DeshabilitarElModoDeCaracteresChinos", Array.from(arguments)));
            return this;
        }
        EscribirTexto(texto: string) {
            this.operaciones.push(new ConectorPlugin.Operacion("EscribirTexto", Array.from(arguments)));
            return this;
        }
        EstablecerAlineacion(alineacion: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("EstablecerAlineacion", Array.from(arguments)));
            return this;
        }
        EstablecerEnfatizado(enfatizado: boolean) {
            this.operaciones.push(new ConectorPlugin.Operacion("EstablecerEnfatizado", Array.from(arguments)));
            return this;
        }
        EstablecerFuente(fuente: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("EstablecerFuente", Array.from(arguments)));
            return this;
        }
        EstablecerImpresionAlReves(alReves: boolean) {
            this.operaciones.push(new ConectorPlugin.Operacion("EstablecerImpresionAlReves", Array.from(arguments)));
            return this;
        }
        EstablecerImpresionBlancoYNegroInversa(invertir: boolean) {
            this.operaciones.push(new ConectorPlugin.Operacion("EstablecerImpresionBlancoYNegroInversa", Array.from(arguments)));
            return this;
        }
        EstablecerRotacionDe90Grados(rotar: boolean) {
            this.operaciones.push(new ConectorPlugin.Operacion("EstablecerRotacionDe90Grados", Array.from(arguments)));
            return this;
        }
        EstablecerSubrayado(subrayado: boolean) {
            this.operaciones.push(new ConectorPlugin.Operacion("EstablecerSubrayado", Array.from(arguments)));
            return this;
        }
        EstablecerTamañoFuente(multiplicadorAncho: number, multiplicadorAlto: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("EstablecerTamañoFuente", Array.from(arguments)));
            return this;
        }
        Feed(lineas: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("Feed", Array.from(arguments)));
            return this;
        }
        HabilitarCaracteresPersonalizados() {
            this.operaciones.push(new ConectorPlugin.Operacion("HabilitarCaracteresPersonalizados", Array.from(arguments)));
            return this;
        }
        HabilitarElModoDeCaracteresChinos() {
            this.operaciones.push(new ConectorPlugin.Operacion("HabilitarElModoDeCaracteresChinos", Array.from(arguments)));
            return this;
        }
        ImprimirCodigoDeBarrasCodabar(contenido: string, alto: number, ancho: number, tamañoImagen: number) {

            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirCodigoDeBarrasCodabar", Array.from(arguments)));
            return this;
        }

        ImprimirCodigoDeBarrasCode128(contenido: string, alto: number, ancho: number, tamañoImagen: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirCodigoDeBarrasCode128", Array.from(arguments)));
            return this;
        }
        ImprimirCodigoDeBarrasCode39(contenido: string, incluirSumaDeVerificacion: boolean, modoAsciiCompleto: boolean, alto: number, ancho: number, tamañoImagen: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirCodigoDeBarrasCode39", Array.from(arguments)));
            return this;
        }

        ImprimirCodigoDeBarrasCode93(contenido: string, alto: number, ancho: number, tamañoImagen: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirCodigoDeBarrasCode93", Array.from(arguments)));
            return this;
        }

        ImprimirCodigoDeBarrasEan(contenido: string, alto: number, ancho: number, tamañoImagen: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirCodigoDeBarrasEan", Array.from(arguments)));
            return this;
        }
        ImprimirCodigoDeBarrasEan8(contenido: string, alto: number, ancho: number, tamañoImagen: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirCodigoDeBarrasEan8", Array.from(arguments)));
            return this;
        }
        ImprimirCodigoDeBarrasPdf417(contenido: string, nivelSeguridad: number, alto: number, ancho: number, tamañoImagen: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirCodigoDeBarrasPdf417", Array.from(arguments)));
            return this;
        }
        ImprimirCodigoDeBarrasTwoOfFiveITF(contenido: string, intercalado: boolean, alto: number, ancho: number, tamañoImagen: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirCodigoDeBarrasTwoOfFiveITF", Array.from(arguments)));
            return this;
        }
        ImprimirCodigoDeBarrasUpcA(contenido: string, alto: number, ancho: number, tamañoImagen: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirCodigoDeBarrasUpcA", Array.from(arguments)));
            return this;
        }
        ImprimirCodigoDeBarrasUpcE(contenido: string, alto: number, ancho: number, tamañoImagen: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirCodigoDeBarrasUpcE", Array.from(arguments)));
            return this;
        }
        ImprimirCodigoQr(contenido: string, anchoMaximo: number, nivelRecuperacion: number, tamañoImagen: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirCodigoQr", Array.from(arguments)));
            return this;
        }
        ImprimirImagenEnBase64(imagenCodificadaEnBase64: string, tamaño: number, maximoAncho: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("ImprimirImagenEnBase64", Array.from(arguments)));
            return this;
        }
        Iniciar() {
            this.operaciones.push(new ConectorPlugin.Operacion("Iniciar", Array.from(arguments)));
            return this;
        }
        Pulso(pin: number, tiempoEncendido: number, tiempoApagado: number) {
            this.operaciones.push(new ConectorPlugin.Operacion("Pulso", Array.from(arguments)));
            return this;
        }
        TextoSegunPaginaDeCodigos(numeroPagina: number, pagina: string, texto: string) {
            this.operaciones.push(new ConectorPlugin.Operacion("TextoSegunPaginaDeCodigos", Array.from(arguments)));
            return this;
        }


        static async obtenerImpresoras(ruta: string = ConectorPlugin.URL_PLUGIN_POR_DEFECTO) {
            const response = await fetch(ConectorPlugin.URL_PLUGIN_POR_DEFECTO + "/impresoras");
            return await response.json();
        }

        static async obtenerImpresorasRemotas(ruta: string, rutaRemota: string = ConectorPlugin.URL_PLUGIN_POR_DEFECTO) {
            const response = await fetch(ConectorPlugin.URL_PLUGIN_POR_DEFECTO + "/reenviar?host=" + rutaRemota);
            return await response.json();
        }


        async imprimirEnImpresoraRemota(nombreImpresora: string, rutaRemota: string) {
            const payload = {
                operaciones: this.operaciones,
                nombreImpresora,
                serial: this.serial,
            };
            const response = await fetch(this.ruta + "/reenviar?host=" + rutaRemota, {
                method: "POST",
                body: JSON.stringify(payload),
            });
            return await response.json();
        }

        async imprimirEn(nombreImpresora: string) {
            const payload = {
                operaciones: this.operaciones,
                nombreImpresora,
                serial: this.serial,
            };
            const response = await fetch(this.ruta + "/imprimir", {
                method: "POST",
                body: JSON.stringify(payload),
            });
            return await response.json();
        }
    }
    return ConectorPlugin;
})();
export default ConectorPluginV3;