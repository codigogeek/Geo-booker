// <!--################################################################################
//   --# Nombre del Programa : GeoBooker                                              #
//   --# Autor               : Gandhi Soto Sanchez                                    #
//   --# Compania            : Codigo Geek                                            #
//   --# Proyecto            : GeoBooker                       Fecha: 15/05/2024      #
//   --# Descripcion General : Componente modal de  Inicio de Cookies                 #
//   ---------------------------------------------------------------------------------#-->

import {Button, Col, Container, Row} from "react-bootstrap";
import {ModalLayout} from "../../Layout/Index.js";
import {useContext} from "react";
import {ModalContext} from "../../Context/Index.js";
import './StyleModal.css';
import {Typography} from "@mui/material";

/**
 * Componente que muestra un modal de inicio de cookies
 * TODO encontrar la manera de coloca un divisor entre el cuerpo y el footer
 */
export const InicioCookiesModal = () => {
    const {mostrarInicioCookiesModal} = useContext(ModalContext);
    return (
        <ModalLayout
            mostrarModal={mostrarInicioCookiesModal}
            titulo={<></>}
            cuerpo={<Cuerpo/>}
            footer={<Footer/>}
            dialogClassName='Modal-Style-InicioCookiesModal'
        />
    );
}

const Cuerpo = () => {
    return (
        <Typography variant="p" className='fs-5 lh-sm'>
            Usamos cookies para mejorar GeoBooker, algunas son necesarias para el funcionamiento del sitio,
            otras son opcionales y te brindan una experiencia personalizada. Puedes aceptar todas las cookies, rechazar
            todas las opcionales o personalizarlas, para más información consulta nuestra Política de Cookies
        </Typography>
    )
}

const Footer = () => {
    const {setMostrarAdministradorDeCookiesModal, setMostrarInicioCookiesModal} = useContext(ModalContext);
    return (
        <>
            <Container fluid='sm'>
                <Row>
                    <Col xs={6}>
                        <Button
                            variant="secondary"
                            onClick={() => setMostrarInicioCookiesModal(false)}
                            size="sm"
                            className='w-100'
                        >
                            Aceptar todas
                        </Button>
                    </Col>

                    <Col xs={6}>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                setMostrarInicioCookiesModal(false)
                            }}
                            size='sm'
                            className='w-100'
                        >
                            Navegar sin cookies
                        </Button>
                    </Col>
                </Row>
                <Row
                    style={{
                        marginTop: '0.5rem',
                    }}
                >
                    <Button
                        className='text-white'
                        variant="link"
                        onClick={() => {
                            setMostrarInicioCookiesModal(false);
                            setMostrarAdministradorDeCookiesModal(true);
                        }}>
                        Administrar cookies
                    </Button>
                </Row>
            </Container>
        </>
    )
}