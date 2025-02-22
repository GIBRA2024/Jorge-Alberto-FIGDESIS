function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Muñoz Cuadros;Jorge;Alberto;;
FN:Jorge Alberto Muñoz Cuadros
TEL: +57 3164823082
EMAIL: jorge.munoz@figdesis.com
NOTE: Gerente General
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}