'use strict';

import Cliente from './cliente.js';

((doc, win) => {

    doc.addEventListener('DOMContentLoaded', event => {




        console.log('Cargado el contenido del DOM');


        let txtNombre = doc.querySelector('#txtnombre');
        let txtApellido = doc.querySelector('#txtapellidos');
        let txtDireccion = doc.querySelector('#txtdireccion');
        let txtCorreo = doc.querySelector('#txtcorreo');
        let txtTelefono = doc.querySelector('#txttelefono');
        let txtEdad = doc.querySelector('#txtedad');
        let selsexo = doc.querySelector('#selsexo');
        let chkSegSocial = doc.querySelector('#segsocial');
        let chkRh = doc.querySelector('#rh')
        let txtGustos = doc.querySelector('#gustos');
        let btnEnviar = doc.getElementById('btnenviar');
        let btnCancelar = doc.getElementById('btncancelar');





        btnEnviar.addEventListener('click', () => {


            let nombre = txtNombre.value;
            let apellido = txtApellido.value;
            let direccion = txtDireccion.value;
            let correo = txtCorreo.value;
            let telefono = txtTelefono.value;
            let edad = txtEdad.value;
            let sexo = selsexo.value;
            let seguSocial = chkSegSocial.checked;
            let rhp = chkRh.checked;
            let gustosc = txtGustos.value;



            let clientenuevo = new Cliente(nombre, apellido, direccion, correo, telefono, edad, sexo, seguSocial, rhp, gustosc);

            let valido = clientenuevo.verificarDatos()
            console.log(valido)

            if (valido) {
                alert("Usuario creado correctamente");
                //AQUI IRIA EL METODO DE GUARDAR EL USUARIO EN LA BASE DE DATOS
                txtNombre.value = "";
                txtApellido.value = "";
                txtDireccion.value = "";
                txtCorreo.value = "";
                txtTelefono.value = "";
                txtEdad.value = "";
                //chkSegSocial.prop('checked', false);  revisar porque no me funciona el .prop
                //chkRh.prop("checked", false);
                txtGustos.value = "";


            } else {
                alert("No se ha creado el usuario, Verifique que todos los datos sean diligenciados correctamente")
            }






            console.log(clientenuevo)

        }, false);

        btnCancelar.addEventListener('click', () => {

            txtNombre.value = "";
            txtApellido.value = "";
            txtDireccion.value = "";
            txtCorreo.value = "";
            txtTelefono.value = "";
            txtEdad.value = "";
            //chkSegSocial.prop('checked', false);  revisar porque no me funciona el .prop
            //chkRh.prop("checked", false);
            txtGustos.value = "";
        })

    });

    console.log('Cargada la funcion anonima principal');

})(document, window);
