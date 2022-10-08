import { SvgIcon } from '@mui/material'

export default function CusIcon(props) {
    return (
        // svg custom icon > use 24X24 VIEWBOX
        <SvgIcon {...props} viewBox='0 0 24 24'>
            <g>
                <rect id='base24x24' fill='#D8D8D8' x='0' y='0' width='24' height='24' opacity='0'></rect>
                <path
                    d='M22.2855586,5.14303906 C22.2855586,4.80688539 22.0892589,4.50191138 21.7829318,4.36281264 L12.3543931,0.0771998051 C12.1292004,-0.0257332684 11.8705302,-0.0257332684 11.645318,0.0771998051 L2.21677925,4.36281264 C1.91046684,4.50190159 1.71415242,4.80687069 1.71415242,5.14303906 C1.71415242,5.47920743 1.91045215,5.78416674 2.21677925,5.92326549 L11.645318,10.2088783 C11.7580098,10.2603449 11.8789253,10.2857892 11.9998457,10.2857892 C12.1207661,10.2857892 12.2416816,10.2603434 12.3543735,10.2086873 L21.7829122,5.92307447 C22.0892246,5.78417654 22.2855586,5.47920743 22.2855586,5.14304396 L22.2855586,5.14303906 Z'
                    id='Path'
                ></path>
                <path
                    d='M10.5038209,12.0769157 L1.19614084,7.7913029 C0.935496788,7.67115391 0.630475652,7.69334604 0.387944104,7.8508019 C0.146186181,8.00845368 0,8.28012725 0,8.57132362 L0,18.8567944 C0,19.1929481 0.193783481,19.4979221 0.496183961,19.6370208 L9.80386399,23.9226337 C9.91548846,23.9741002 10.034854,23.9995445 10.1538473,23.9995445 C10.3138233,23.9995445 10.4732337,23.9534357 10.6120559,23.8631298 C10.8538138,23.705287 11,23.4338044 11,23.1424121 L11,12.8569413 C11,12.5207877 10.8062165,12.2158137 10.503816,12.0769108 L10.5038209,12.0769157 Z'
                    id='Path'
                ></path>
                <path
                    d='M22.802264,7.79155759 L13.494584,12.0771704 C13.192198,12.2162594 12.9984,12.5212285 12.9984,12.8573968 L12.9984,23.1428676 C12.9984,23.4342501 13.1445862,23.7057278 13.3863441,23.8635853 C13.5251663,23.9538917 13.6845767,24 13.8445527,24 C13.9635411,24 14.0829115,23.9745542 14.194536,23.9228982 L23.502216,19.6372853 C23.804602,19.4983874 23.9984,19.1934183 23.9984,18.8572548 L23.9984,8.57178401 C23.9984,8.28059254 23.8522138,8.00892387 23.6104559,7.85106638 C23.3683257,7.69283176 23.0635076,7.67102167 22.802264,7.79155759 Z'
                    id='Path'
                ></path>
            </g>
        </SvgIcon>
    )
}
