import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';

export const Error = () => {
    return(
        <Card>
          <CardBody>
            <Text align={'center'}>🚫ERROR🚫</Text>
            <Text align={'center'}>El usuario no está registrado o las credenciales son inválidas</Text>
          </CardBody>
          <CardFooter>
            <div align={'center'}>
                <NavLink to="/SignUp"><button className='error'>Regístrate</button></NavLink>
                <NavLink to="/SignIn"><button className='error'>Intentar de nuevo</button></NavLink>
            </div>
            </CardFooter>
        </Card>
    );
}
export default Error;